import { AntDesign } from '@expo/vector-icons';
import React, { useRef } from 'react';
import { View, Text, Image, SafeAreaView, ScrollView, FlatList, Pressable } from 'react-native';
import VideoListItem from '../../components/VideoListItem';
import VideoPlayer from '../../components/VideoPlayer';
import BottomSheet, { BottomSheetModalProvider, BottomSheetModal } from '@gorhom/bottom-sheet';
import VideoComments from '../../components/VideoComments';

import video from '../../assets/data/video.json';
import videos from '../../assets/data/videos.json';
import styles from './styles';

const VideoScreen = () => {
    const commentsSheetRef = useRef<BottomSheetModal>(null);

    let viewsString = video.views.toString();

    if (video.views > 1000000) {
        viewsString = (video.views / 1000000).toFixed(1) + 'M';
    } else if (video.views > 1000) {
        viewsString = (video.views / 1000).toFixed(1) + 'k';
    }

    const openComments = () => {
        //commentsSheetRef.current?.close();
        commentsSheetRef.current?.present();
    }

    return (
        <View style={{backgroundColor: '#141414', flex: 1}}>
            {/* Video player */}
            <VideoPlayer videoURI={video.videoUrl} thumbnailURI={video.thumbnail} />

            <View style={{ flex: 1 }}>
                {/* Video info */}
                <View style={styles.videoInfoContainer}>
                    <Text style={styles.tags}>{video.tags}</Text>
                    <Text style={styles.title}>{video.title}</Text>
                    <Text style={styles.subtitle}>{video.user.name} • {viewsString} • {video.createdAt}</Text>
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
                <Pressable onPress={openComments} style={styles.commentsContainer}>
                    <Text style={styles.commentsCounter}>Comments 256</Text>
                    
                </Pressable>

                {/* All comments */}
                <BottomSheetModal
                    ref={commentsSheetRef}
                    snapPoints={['70%']}
                    index={0}
                    enablePanDownToClose={true}
                    enableOverDrag={true}
                    backgroundComponent={({style}) => <View style={[style, {backgroundColor: '#141414'}]} />}
                >
                    <VideoComments />
                </BottomSheetModal>
            </View>
        </View>
    )
};

const VideoScreenWithRecommendations = () => {
    return (
        <SafeAreaView style={{backgroundColor: '#141414', flex: 1}}>
            <BottomSheetModalProvider>
                <FlatList
                    data={videos}
                    renderItem={({ item }) => <VideoListItem video={item} />}
                    ListHeaderComponent={VideoScreen}
                />
            </BottomSheetModalProvider>
        </SafeAreaView>
        
    )
}

export default VideoScreenWithRecommendations;
