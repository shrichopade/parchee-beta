import { apisAreAvailable } from 'expo';
import { StyleSheet } from 'react-native';

const dStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },  
    content: {
        padding:0,
    },
    pageTitle: {
        color: '#4CAF50',
        fontFamily: 'Arial',
        fontSize: 28,
        fontWeight: '900',
        alignSelf: 'center',
        marginVertical: 8
    },
    pageSubTitle: {
        color: '#4CAF50',
        fontFamily: 'Arial',
        fontSize: 24,
        alignSelf: 'center',
        fontWeight: '700',
        marginVertical: 16
    },
    formTitle: {
        color: '#4CAF50',
        fontFamily: 'Arial',
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 1
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    buttonStyle: {
        flex: 1,
        padding: 0,
        marginVertical: 8,
        alignSelf: 'center'
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'Arial',
        fontSize: 12,
        fontWeight: '600'
    },
    footerText: {
        color: '#202020',
        fontFamily: 'Arial',
        fontSize: 10,
        fontWeight: '400',
        alignSelf: 'right'
    },
})

export { dStyles }