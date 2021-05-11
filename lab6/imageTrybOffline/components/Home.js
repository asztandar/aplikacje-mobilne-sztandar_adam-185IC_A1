import React, {useState} from 'react';  
import {StyleSheet, Text, View} from 'react-native';
import styles from "../style/stylesheet"

 const HomeScreen = props => {
   
 return (  
        <View style={styles.container}>       
            <Text>
                Aplikacja stworzona przez Adam Sztandar
            </Text>  
            <Text>
                185IC A2    
            </Text>
            <Text>
                21663    
            </Text>     
        </View>  
    );  
}



export default HomeScreen;
