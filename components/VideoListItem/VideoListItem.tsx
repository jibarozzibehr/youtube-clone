import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import styles from './styles';

import { useNavigation } from '@react-navigation/native';

type VideoListItemProps = {
    video: {
        id: string;
        createdAt: string;
        title: string;
        thumbnail: string;
        videoUrl: string;
        duration: number;
        views: number;
        user: {
            name: string;
            image?: string;     //Puede ser null.
        }
    }
}

const VideoListItem = (props: VideoListItemProps) => {
    const { video } = props;
    const navigation = useNavigation();


    const minutes = Math.floor(video.duration/60);
    const seconds = video.duration % 60;

    let viewsString = video.views.toString();

    if (video.views > 1000000) {
        viewsString = (video.views / 1000000).toFixed(1) + 'M';
    } else if (video.views > 1000) {
        viewsString = (video.views / 1000).toFixed(1) + 'k';
    }


    const openVideoPage = () => {
        navigation.navigate("VideoScreen");
    }

    return (
        <Pressable onPress={openVideoPage} style={styles.videoCard}>
            {/*Thumbnail*/}
            <View >
                <Image style={styles.thumbnail} source={{ uri: video.thumbnail }} />

                <View style={styles.timeContainer}>
                    <Text style={styles.time}>{minutes}:{('0' + seconds).slice(-2)}</Text>
                </View>
            </View>

            {/*Title row*/}
            <View style={styles.titleRow}>
                {/*Avatar*/}
                <Image style={styles.avatar} source={{ uri: video.user.image }}/>

                {/*Middle container: title, subtitle, etc.*/}
                <View style={styles.middleContainer}>
                    <Text style={styles.title}>{video.title}</Text>
                    <Text style={styles.subtitle}>{video.user.name} • {viewsString} • {video.createdAt}</Text>
                </View>


                {/*Icon*/}
                <Entypo name="dots-three-vertical" size={16} color="white" />
            </View>

        </Pressable>
    )
}

export default VideoListItem;