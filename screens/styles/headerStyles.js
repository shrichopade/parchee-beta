import { StyleSheet } from 'react-native';

const headerStyles = StyleSheet.create({
    headerBgColor: {
        flex: 1,
        backgroundColor: '#4CAF50'
    },
    headerTitle: {
        fontSize: 20,
        fontFamily: 'Arial',
        color: '#000fff',
        fontWeight: '500',
        marginVertical: 15
    },
    headerMenu: {
        fontSize: 7,
        fontFamily: 'Arial',
        color: '#000000',
        fontWeight: '100',
        marginVertical: 4
    },
    headerFooterIcon: {
        height: 27,
        width: 27
    }
});

export { headerStyles }