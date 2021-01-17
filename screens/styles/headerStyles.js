import { StyleSheet } from 'react-native';

const headerStyles = StyleSheet.create({
    headerBgColor: {
        flex: 1,
        backgroundColor: 'green'
    },
    headerTitle: {
        fontSize: 20,
        fontFamily: 'Arial',
        color: '000fff',
        fontWeight: '500',
        marginVertical: 15
    },
    headerMenu: {
        fontSize: 12,
        fontFamily: 'Arial',
        color: '#ffffff',
        fontWeight: '100',
        marginVertical: 4
    }
});

export { headerStyles }