import React from 'react';  
import {Text, View, ScrollView, Button} from 'react-native';

import styles from "../style/stylesheet"
 
let liczbyRandom = [];
let sorted = [];
let klikniety = false;

function onPressHandle(){
    klikniety = true;
}

function GenerateNumbers(){
    for(let i=0;i<100;i++){
        liczbyRandom.push(Math.floor(Math.random()* 1000))
        console.log(liczbyRandom[i])
        sorted = liczbyRandom;
    }
    
}
function compareNumbers(a, b) {
    return a - b
 }

function sortuj(){
    sorted.sort(compareNumbers)
    console.log({sorted})
}



const Sortowanie = props => {
   GenerateNumbers();
   sortuj();
 return (  
        <View style={styles.containerSortowanie}>  
       
       <View style={styles.headerSortowanie}>
           <Text>
               <Text style={styles.bold}>Sortowanie i filtrowanie danych</Text>
           </Text>
           
       </View>
       <ScrollView>
           {liczbyRandom.map(liczba => {return (
               <Text>{liczba},</Text>
           )})}
       <Text>Posortowane:</Text>
       {sorted.map(liczba => {return (
               <Text>{liczba},</Text>
           )})}
       </ScrollView>
         
        </View>  
    );  
}



export default Sortowanie;


