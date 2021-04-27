import React from 'react';
import {
  ScrollView,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import List from './list.js';
import styles from "../style/stylesheet";


const DATA = [
    { id: 1, message: 'Obsługa scrollView1' },
    { id: 2, message: 'Obsługa scrollView2' },
    { id: 3, message: 'Obsługa TouchableOpacity' },
    { id: 4, message: 'Obsługa TouchableHighlight' },
    { id: 5, message: 'Implementacja Swipeable' },
  ];

class Swipe extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <List data={DATA} />
    );
  }
}
export default Swipe;
