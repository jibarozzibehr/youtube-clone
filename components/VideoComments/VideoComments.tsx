import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import VideoComment from '../VideoComment';

import comments from '../../assets/data/comments.json'

const VideoComments = () => {
    return (
        <View style={styles.videoCommentsContainer}>
            <BottomSheetFlatList
                data={comments}
                renderItem={({item}) => <VideoComment comment={item} />}
            />
        </View>
    )
}

export default VideoComments;
