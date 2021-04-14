import React from 'react';  
import {Text, View} from 'react-native';

import styles from "../style/stylesheet"
 const Hook_useStateScreen = props => {
   
 return (  
        <View style={styles.containerUseState}>  
       
       <View style={styles.headerUseState}>
           <Text>
               <Text style={styles.bold}>Czym jest hook?</Text>
               <Text> 
                   Hook jest specjalną funkcją, która pozwala „zahaczyć się” w wewnętrzne mechanizmy Reacta. Na przykład useState jest hookiem, który pozwala korzystać ze stanu w komponencie funkcyjnym. W kolejnych rozdziałach poznamy inne hooki.
                   </Text> 
           </Text>
       </View>
         
        </View>  
    );  
}



export default Hook_useStateScreen;


