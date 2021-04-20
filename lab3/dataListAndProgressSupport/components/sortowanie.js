import React from 'react';  
import {Text, View} from 'react-native';

import styles from "../style/stylesheet"
 const Sortowanie = props => {
   
 return (  
        <View style={styles.containerSortowanie}>  
       
       <View style={styles.headerSortowanie}>
           <Text>
               <Text style={styles.bold}>Sortowanie i filtrowanie danych</Text>
           </Text>
       </View>
         
        </View>  
    );  
}



export default Sortowanie;


