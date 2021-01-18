import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
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
    color: '#8B918D',
    fontSize: 16,
    fontWeight: '600'
  },
  textLabel: {
    color: '#202020',
    fontSize: 18,
    fontFamily: 'Arial',
    fontWeight: '600'
  },
  pageTitle: {
    color: '#4CAF50',
    fontSize: 28,
    fontWeight: '900',
    marginVertical: 8
  },
  pageTitle2: {
    color: '#4CAF50',
    fontSize: 22,
    fontWeight: '700',
    marginVertical: 8
  },
  footerText: {
    color: '#202020',
    fontSize: 12,
    fontWeight: '600'
  },
  pickerStyle: {
    width: '500',
    height: '40',
    fontSize: 18,
    fontColor: '#101010',
    color: '#101010'
  },
  checkboxInput: {
    textAlign: 'left'
  },
  advtBannerBgColor: {
    flex: 1,
    backgroundColor: 'gray'
  },
  buttonStyle: {
    backgroundColor:'#4CAF50',
    marginVertical: 8
  },
  buttonText: {
    fontSize: 14,
    fontFamily: 'Arial',
    color: '#ffffff',
    fontWeight: '200'
  },
  tableHeaderBgColor: {
    flex: 1,
    backgroundColor: '#AAE7B2'
  },
  tableHeaderText: {
    fontSize: 14,
    fontFamily: 'Arial',
    color: '#000000',
    fontWeight: '200'
  },
  tableCellsText: {
    fontSize: 12,
    fontFamily: 'Arial',
    color: 'gray',
    fontWeight: '100'
  }
});

export { styles }