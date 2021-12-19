import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import videos from '../assets/data/videos.json';

import VideoListItem from '../components/VideoListItem';



const HomeScreen = () => {
    return (
        <View>
            <FlatList
                data={videos}
                renderItem={({ item }) => <VideoListItem video={item} />}
            />


            <VideoListItem video={videos[0]} />
            <VideoListItem video={videos[1]} />
        </View>
    )
}


const styles = StyleSheet.create({
    
})

export default HomeScreen;
