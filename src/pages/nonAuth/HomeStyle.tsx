import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#D5DBDB'
    },
    text_input: {
        flex: 1
    },
    _btn: {
        padding: 5
    },
    _chat_box:{
        padding: 8,
        margin: 5, 
        borderRadius: 5
    },
    _chat_box_name:{
        color: '#000000', 
        fontWeight: '600', 
        fontSize: 16
    },
    _chat_box_msg:{
        color: '#000000',
        fontSize: 12
    }
})