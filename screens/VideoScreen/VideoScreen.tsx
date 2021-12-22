import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Image, SafeAreaView, ScrollView, FlatList } from 'react-native';
import VideoListItem from '../../components/VideoListItem';
import VideoPlayer from '../../components/VideoPlayer';

import video from '../../assets/data/video.json';
import videos from '../../assets/data/videos.json';
import styles from './styles';

const VideoScreen = () => {
    const minutes = Math.floor(video.duration/60);
    const seconds = video.duration % 60;

    let viewsString = video.views.toString();

    if (video.views > 1000000) {
        viewsString = (video.views / 1000000).toFixed(1) + 'M';
    } else if (video.views > 1000) {
        viewsString = (video.views / 1000).toFixed(1) + 'k';
    }

    return (
        <View>
            {/* Video player */}
            <VideoPlayer videoURI={video.videoUrl} thumbnailURI={video.thumbnail} />

            {/* Video info */}
            
            <View style={styles.videoInfoContainer}>
                <Text style={styles.tags}>{video.tags}</Text>
                <Text style={styles.title}>{video.title}</Text>
                <Text style={styles.subtitle}>{video.user.name} {viewsString} {video.createdAt}</Text>
            </View>

            {/* Action list */}
            <View style={styles.actionListContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.actionListItem}>
                        <AntDesign name="like1" size={30} color="white"></AntDesign>
                        <Text style={styles.actionText}>{video.likes}</Text>
                    </View>

                    <View style={styles.actionListItem}>
                        <AntDesign name="dislike2" size={30} color="white"></AntDesign>
                        <Text style={styles.actionText}>{video.dislikes}</Text>
                    </View>

                    <View style={styles.actionListItem}>
                        <AntDesign name="export" size={30} color="white"></AntDesign>
                        <Text style={styles.actionText}>{video.dislikes}</Text>
                    </View>

                    <View style={styles.actionListItem}>
                        <AntDesign name="download" size={30} color="white"></AntDesign>
                        <Text style={styles.actionText}>{video.dislikes}</Text>
                    </View>

                    <View style={styles.actionListItem}>
                        <AntDesign name="download" size={30} color="white"></AntDesign>
                        <Text style={styles.actionText}>{video.dislikes}</Text>
                    </View>

                    <View style={styles.actionListItem}>
                        <AntDesign name="download" size={30} color="white"></AntDesign>
                        <Text style={styles.actionText}>{video.dislikes}</Text>
                    </View>

                    <View style={styles.actionListItem}>
                        <AntDesign name="download" size={30} color="white"></AntDesign>
                        <Text style={styles.actionText}>{video.dislikes}</Text>
                    </View>

                </ScrollView>
            </View>

            {/* User info */}
            <View style={styles.userInfoContainer}>
                <Image style={styles.avatar} source={{ uri: video.user.image }}/>
                
                <View style={styles.userInfo}>
                    <Text style={styles.username}>{video.user.name}</Text>
                    <Text style={styles.userSubscribers}>{video.user.subscribers} subscribers</Text>
                </View>

                <Text style={styles.subscribeButton}>Subscribe</Text>
            </View>


            {/* Comments */}
            <View style={styles.commentsContainer}>
                <Text style={styles.commentsCounter}>Comments 256</Text>
                {/* Comment component */}
                <View style={styles.commentContainer}> 
                    <Image style={styles.commentAvatar} source={{ uri: video.user.image }}/>
                    <Text style={styles.commentUsername}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rerum numquam eligendi cum illo.</Text>
                </View>
            </View>
        </View>
    )
};

const VideoScreenWithRecommendations = () => {
    return (
        <SafeAreaView style={{backgroundColor: '#141414', flex: 1}}>
            <FlatList
                data={videos}
                renderItem={({ item }) => <VideoListItem video={item} />}
                ListHeaderComponent={VideoScreen}
            />
        </SafeAreaView>
        
    )
}

export default VideoScreenWithRecommendations;
