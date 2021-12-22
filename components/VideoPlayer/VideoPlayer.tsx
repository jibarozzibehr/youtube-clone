import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import { Video } from 'expo-av';

interface VideoPlayerProps {
    videoURI: string;
    thumbnailURI: string;
};

const VideoPlayer = (props: VideoPlayerProps) => {
    const { videoURI, thumbnailURI } = props;

    /* const onRefAssign = (videoElement) => {
        console.warn("Video is mounted");
        const playbackObject = videoElement;

        const source = { uri: videoURI };
        const initialStatus = {};

        playbackObject.loadAsync();
    } */

    return (
        <View>
            <Video
                source={{ uri: videoURI }}
                posterSource={{ uri: thumbnailURI }}
                posterStyle={{ resizeMode: 'cover' }}
                usePoster={true}
                useNativeControls={true}
                style={{ width: '100%', aspectRatio: 16/9 }}
                resizeMode='cover'
            />
        </View>
    )
}

export default VideoPlayer;
