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

    //rest

    containerRest:{
        flex: 1,
        paddingTop: 50,
        paddingRight: 0,
        paddingBottom: 20,
        paddingLeft: 0,
        backgroundColor: '#aaa8f2',
        flexDirection: 'column'
    },
    headerRest:{
        backgroundColor: '#b4f2f3',
        fontSize: 10,
    },

    //useState

    containerUseState:{
        flex: 1,
        paddingTop: 50,
        paddingRight: 0,
        paddingBottom: 20,
        paddingLeft: 0,
        backgroundColor: '#fefbc5',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerUseState:{
        backgroundColor: '#e9e983',
        fontSize: 20,
        color: '#887585',
    },
    bold:{
        fontWeight:'bold'
    }
  });

  export default styles;