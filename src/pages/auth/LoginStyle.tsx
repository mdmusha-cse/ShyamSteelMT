import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: '#e1e1e1',
    },
    mian_view: {
        flex: 1,
        margin: 16,
        alignItems: 'center'
    },
    title_view: {
        width: '90%',
        marginTop: '50%',
        marginBottom: '2%',
    },
    _txt: {
        color: '#000',
        fontSize: 18,
        fontWeight: '600'
    },
    _input_view: {
        marginTop: 12,
        width: '90%',
        height: 50,
        backgroundColor: '#F4FAFC',
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden'
    },
    
    _input_view_img: {
        height: 20,
        width: 20,
        marginLeft: 16,
        tintColor: 'gray'
    },
    _input_view_hide_show_icon: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 0,
    },
    _input_view_hide_show_icon_img: {
        height: 20,
        width: 20,
        tintColor: 'gray'
    },
    _input_view_text_input: {
        width: '90%',
        paddingLeft: 10,
        paddingRight: 16
    },

    _button: {
        backgroundColor: '#AFAFAF',
        marginTop: 25,
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    _button_txt: {
        color: '#FFFFFF'
    }

});