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

    //scroll1
    containerScroll1:{
        display: 'flex',
        flex:1,
        flexDirection:'column',
        backgroundColor: '#d0d9d1',

    },
    headerScroll1:{
        textAlign:'center',
        paddingTop: 30,
        paddingBottom: 4,
        borderBottomWidth: 4,
        backgroundColor:'#2596be',
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
    containerScroll2:{
        backgroundColor:'#c6bcc7',
        paddingTop:30,

    },
    headerScroll2:{
        textAlign:'center',
    },
    wrapperLeniweLadowanie:{
        backgroundColor:'#b1a6e8'
    },

    //
    wysrodkuj:{
        
        alignItems:'center',
        justifyContent:'center',
    },
    image:{
        width: window.width-20,
        resizeMode: 'contain',
        marginBottom: 5,
        height: 400,

      },
    scrollView:{
        backgroundColor:'#fff',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 90,
    },
    scrollViewContent:{
        alignItems:'center'
    },
    hymnTitle:{
        textAlign:'center',
        fontSize: 27,
        color:'#000',
        borderBottomWidth: 4,
    },
    contentScroll2:{
        padding: 2,
        backgroundColor:'#fff',
        justifyContent:'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 290,


    },
    contentScroll2Scroll:{
        width: '80%',
        marginLeft:'auto',
        marginRight: 'auto',
        marginBottom: 90,
        
    },
    scrollview2:{
        marginBottom: 90,
    },
    containerTouch:{
        //backgroundColor:'#c4b4c7',
        flexDirection: 'column',
        
    },
    headerTouch:{
        paddingTop:50,
        backgroundColor: '#3d3593',

    },
    whiteColor:{
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    },
    touchableWrapper:{
        width: 400,
        height: 300,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    touchableOpacityButton:{
        backgroundColor: '#1fad59',
        borderWidth: 1,
        borderRadius: 50,
        width: 400,
        height: 150,
    },
    touchableOpacityText:{
        textAlign: 'center',
        fontSize: 40,
        color: '#41bfd4',

    },
    touchableHighlightButton:{
        backgroundColor: '#41bfd4',
        borderWidth: 1,
        borderRadius: 50,
        width: 400,
        height: 150,
        paddingTop:33,
    },
    touchableHighlightText:{
        textAlign: 'center',
        fontSize: 40,
        color: 'white',

    },
    containerSwipe: {
        flex: 1,
        alignItems: "stretch"
        },
        headerSwipe: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        backgroundColor: "black",
        color: "#05db6a"
        },
        item: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#F3F3F3"
        }
        
    
  });

  export default styles;