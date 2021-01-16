import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    color: '#202020',
    fontWeight: '500',
    marginVertical: 15
  },
  footerButtonContainer: {
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  forgotPasswordButtonText: {
    color: 'tomato',
    fontSize: 18,
    fontWeight: '600'
  },
  textLabel: {
    color: '#202020',
    fontSize: 18,
    fontWeight: '600'
  },
  pageTitle: {
    color: 'green',
    fontSize: 28,
    fontWeight: '900'
  },
  pageTitle2: {
    color: 'green',
    fontSize: 22,
    fontWeight: '700'
  },
  footerText: {
    color: '#202020',
    fontSize: 12,
    fontWeight: '600'
  },
  RNPickerSelectStyle: {
    width: '80%',
    fontSize: 18,
    color: '#101010'
  }
});

export { styles }