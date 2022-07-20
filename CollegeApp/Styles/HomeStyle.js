import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: { flex: 1, 
        
        backgroundColor: "#080707",
        padding: 3,

        },
    post: {
        color:"white",
        flexDirection: "row",
        backgroundColor: "#080707",
        borderColor: "#944646",
        borderWidth: 2,
        padding: 10,
        marginHorizontal: 20,
    },
    category: {
        color:"white",
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'justify' ,
        backgroundColor: "#080707",
        borderColor: "#706e6e",
        borderWidth: 3,
        padding: 10,

    },
    scrollView: {
        marginHorizontal: 10,
    },
});