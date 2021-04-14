import React from 'react';
import { createAppContainer } from 'react-navigation';
import {bottomNavigation} from "./components/navigation.js"

export default function App() {
  return (
    <AppContainer />
  );
}

const AppContainer = createAppContainer(bottomNavigation);


