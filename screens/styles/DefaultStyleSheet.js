import { apisAreAvailable } from 'expo';
import { StyleSheet } from 'react-native';

const dStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },  
    cardStyle: {
        padding:0,
        alignSelf: 'center',
        width:'95%'
    },
    cardItemBodyStyle: {
        padding:0,
        alignSelf: 'center'
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
        marginVertical: 20,
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
    generalText: {
        color: '#546467',
        fontFamily: 'Arial',
        fontSize: 12,
        fontWeight: '400',
        marginVertical: 15
    },
    linkText: {
        color: '#ff6633',
        fontFamily: 'Arial',
        fontSize: 12,
        fontWeight: '400',
        marginVertical: 12
    },
})

export { dStyles }