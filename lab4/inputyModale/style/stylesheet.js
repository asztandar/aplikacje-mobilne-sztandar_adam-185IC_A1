import React from 'react';
import { StyleSheet, Dimensions  } from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingBottom: 20,
        backgroundColor: '#43be8d',
        flexDirection: 'column',
      },
      image:{
        width: window.width,
        resizeMode: 'contain'
      },
    headers:{
        paddingLeft: 5,
        paddingRight: 5,
    },

    colorHeader1:{
        backgroundColor: '#e8fecd'
    },

    
    textInputContainer:{
        backgroundColor: '#9cc5c5',
        paddingTop: 30,
        paddingLeft: 5,
        paddingRight: 5,
        height: '100%',
    },
    textInputHeader:{
        borderBottomWidth:1,
        borderStyle: 'dotted',
        padding: 10,
    },
    textCenter:{
        textAlign: 'center',
    },
    textInputWrapperContent:{
        display: 'flex',
        flexDirection: 'column',
    },
    textInputExample:{
        marginTop: 6,
        marginBottom: 6,
        borderWidth: 1,
        borderStyle: 'dashed',
        paddingTop: 3,
        paddingBottom: 3,
    },
    textInput:{
        marginTop:3,
        marginBottom: 3,
        borderWidth: 2,
        height: 'auto',
    },
    containerSelect:{
        backgroundColor: '#9cc5c5',
        paddingTop: 30,
        paddingLeft: 5,
        paddingRight: 5,
        height: '100%',
    },
    selectHeader:{
        borderBottomWidth:1,
        borderStyle: 'dotted',
        padding: 10,
    },
    selectWrapper:{
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
    },
    picker:{
        height: 50,
        width: 150,
    },
    pickerView:{
        borderWidth: 1,
        borderColor: 'green',
        marginTop: 5,
    },
    switchContent:{
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 40,

    },


    viewModalContent: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "blue",
        padding: 35,
        alignItems: "center",
        
      },
      button: {
        padding: 10,
        elevation: 2
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      toCenter:{
        justifyContent:"center",
        alignItems: 'center',
        marginTop: 'auto',
        marginBottom: 'auto'
      },

  });

  export default styles;