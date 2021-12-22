import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    //Comment
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