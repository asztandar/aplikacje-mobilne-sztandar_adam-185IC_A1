import React, {Component} from 'react';
import {Image, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import styles from "../style/stylesheet";

export default class daneLeniwe extends Component {
    constructor(props){
        super(props)
    }
    render(){ 
        return (
            <ScrollView showsVerticalScrollIndicator={true} style={styles.scrollView} persistentScrollbar={true} contentContainerStyle={styles.scrollViewContent}>
                <Text>Gdynia 1:</Text>
                <Image source={require('../assets/gdynia1.jpg')}  style={styles.image} />
                <Text>Gdynia 2:</Text>
                <Image source={require('../assets/gdynia2.jpg')}  style={styles.image} />
                <Text>Gdynia 3:</Text>
                <Image source={require('../assets/gdynia3.jpg')}  style={styles.image} />
                <Text>Gdynia 4:</Text>
                <Image source={require('../assets/gdynia4.jpg')}  style={styles.image} />
                <Text>Gdynia 5:</Text>
                <Image source={require('../assets/gdynia5.jpg')}  style={styles.image} />
            </ScrollView>
        )
    };
}