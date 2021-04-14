import React, {useState} from 'react';  
import {StyleSheet, Text, TextInput, Button, View,Image,Dimensions} from 'react-native';

 const Hook_useStateScreen = props => {
   
 return (  
        <View style={styles.container}>  
       
       <Text>Hook useStateScreen</Text>
         
        </View>  
    );  
}


const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
         flexDirection: 'column',
        justifyContent: 'center',  
        alignItems: 'center'  
    },  


});  

export default Hook_useStateScreen;


