import React from 'react';  
import {Text, View, Image} from 'react-native';

import styles from "../style/stylesheet"
 const RestParametersScreen = props => {
   
 return (  
        <View style={styles.containerRest}>  
       
       <View style={styles.headerRest}>
            <Text>
            Zapis ten umożliwia zbieranie w jedną zmienną (będącą tablicą) wielu parametrów przekazywanych do funkcji:
            </Text>
       </View>
       <View>
           <Image source={require('../assets/1.png')} style={styles.image}/>
       </View>
         
        </View>  
    );  
}



export default RestParametersScreen;


