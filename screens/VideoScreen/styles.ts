import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    videoPlayer: {
        width: '100%',
        aspectRatio: 16/9
    },

    videoInfoContainer: {
        margin: 10

    },

    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 5
    },

    tags: {
        color: '#0094e3',
        fontSize: 14,
        fontWeight: '500',
        marginVertical: 10
    },

    subtitle: {
        color: 'grey',
        fontSize: 14,
        fontWeight: '500'
    },

    //Action list
    actionListContainer: {
        marginVertical: 10
    },

    actionListItem: {
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 70,
        height: 70
    },

    actionText: {
        color: 'white',
    },


    //User
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25
    },

    userInfoContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        borderColor: '#3d3d3d',
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },

    userInfo: {
        marginHorizontal: 10,
        flex: 1
    },

    username: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },

    userSubscribers: {
        color: 'grey',
        fontSize: 18
    },

    subscribeButton: {
        color: 'red',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
        textTransform: 'uppercase'
    },


    //Comments
    commentsContainer: {
        padding: 10,
        marginVertical: 10
    },

    commentsCounter: {
        color: 'white'
    },

    commentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },

    commentAvatar: {
        width: 35,
        height: 35,
        borderRadius: 20
    },

    commentUsername: {
        color: 'white',
        marginLeft: 10
    }

});

export default styles;