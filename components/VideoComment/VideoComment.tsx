import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

interface VideoCommentProps {
    comment: {
        id: string;
        createdAt: string;
        comment: string;
        likes: number;
        dislikes: number;
        replies: number;
        user: {
            name: string;
            image: string;
        }

    }
}

const VideoComment = (props: VideoCommentProps) => {
    const { comment } = props;

    return (
        <View style={styles.commentContainer}> 
            <Image style={styles.commentAvatar} source={{ uri: comment.user.image }}/>
            <Text style={styles.commentUsername}>{comment.comment}</Text>
        </View>
    )
}

export default VideoComment;
