import React from 'react';  
import {Text, View} from 'react-native';

import styles from "../style/stylesheet"
 const SpreadOperatorScreen = props => {
   
 return (  
        <View style={styles.container}>  
            <View style={styles.headers, styles.colorHeader1}>
                <Text>
                Składnia rozwinięcia (ang. spread syntax) pozwala na rozwinięcie iterowalnego wyrażenia, takiego jak wyrażenie tablicowe lub ciąg znaków, tam gdzie oczekiwanych jest zero lub więcej argumentów (dla wywołań funkcji) lub elementów (dla literałów tablicowych). Pozwala również na rozwinięcie wyrażeń obiektowych w miejscach, gdzie oczekiwanych jest zero lub więcej par klucz-wartość (dla literałów obiektowych).
                </Text>
            </View>
         
        </View>  
    );  
}




export default SpreadOperatorScreen;


