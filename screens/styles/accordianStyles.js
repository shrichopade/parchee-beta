import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom:20,
      backgroundColor: '#F6483B'
    },
    accordion:{
      width: '90%',
      backgroundColor: '#F2F2F7',
      borderRadius: 10,
      padding:20,
      justifyContent: 'center'
    },
    accordionHeader: {
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      marginVertical: 10,
      backgroundColor: 'white',
      borderRadius: 5,
      padding:10,    
  
    },
    accordionTitle: {
      fontSize: 20, 
      fontWeight:'bold',
      fontFamily: 'Arial',
      marginBottom: 20,
      color: '#62625A'
    },
    accordionItems: {
      borderRadius: 5,
      backgroundColor:'white',
  
    },
    accordionItemValue:{
      flexDirection: 'row',
      justifyContent:"space-between",
      padding: 10,
  
    },
    accordionItemValueBadge: {
      color: '#42C382',
      padding: 5,
      fontFamily: 'Arial',
      fontWeight: 'bold'
    },
    accordionItemValueName: {
      color: '#62625A'
    }
  })
  
  export { styles }