import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: { flex: 1, 
        
        padding: 3,

        },
    post: {
        flexDirection: "row",
        borderColor: "#944646",
        borderWidth: 2,
        padding: 15,
        marginHorizontal: 35,
        borderRadius: 30,
        marginVertical: 5,

    },
    postGroup: {
        flex: 1,
        alignItems: 'center', 
        borderColor: "#706e6e",
        borderWidth: 3,
        padding: 1,
        borderRadius: 40,


    },
    scrollView: {
        marginTop: 30,
        marginHorizontal: 5,
    },
    postText: {
        padding: 10,
    },
});