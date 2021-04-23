import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');


const styles = StyleSheet.create({
    containerHome: {
        flex: 1,
        paddingTop: 50,
        paddingBottom: 20,
        backgroundColor: '#cbd8fe',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:'center',
      },
    headerHome:{
        borderStyle: 'solid',
        borderWidth: 3,
        borderColor: '#494949',
        borderRadius: 20,
        fontWeight: 'bold',
        padding: 5,

    },
    boldText:{
        fontWeight: 'bold',
    },

    //sortowanie
    containerSortowanie:{
        display: 'flex',
        flex:1,
        flexDirection:'column',
        backgroundColor: '#d0d9d1',

    },
    headerSortowanie:{
        textAlign:'center',
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 4,
        borderBottomWidth: 4,
    },
    buttonWrapper:{
        paddingLeft: 5,
        paddingRight: 5,
        flexDirection:'row',
        justifyContent: 'space-around',
        flexGrow: 5,
        width: 300,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop:10,
        
    },
    marginRgiht:{
        marginRight: 5,
        backgroundColor: '#000'
    },

    buttonSortowanie:{
        marginVertical: 5,
    },
    numbersWrapper:{
        borderWidth:2,
        flexDirection: 'row',
        borderTopWidth: 0,
        borderBottomWidth:0,

        height: window.height - 170,

    },
    centered:{
        textAlign:'center',
    },
    numbersRandom:{
        
        width: '50%',
        borderTopWidth: 0,
        borderWidth:1,
        borderBottomWidth:0,
        marginTop:5,
    },


    //leniwe
    containerLeniweLadowanie:{
        backgroundColor:'#c6bcc7',
        paddingTop:30,

    },
    headerLeniweLadowanie:{

    },
    wrapperLeniweLadowanie:{
        backgroundColor:'#b1a6e8'
    },

    //
    containerStep:{
        flex:1,
        backgroundColor: '#a6c6a4' ,
        paddingTop: 30,
        
    },
    headerStep:{
        borderWidth: 2,
        borderColor: '#cbd595',
        backgroundColor: '#55a38e',
        height: '90%',

    },
    wysrodkuj:{
        
        alignItems:'center',
        justifyContent:'center',
    },
  });

  export default styles;