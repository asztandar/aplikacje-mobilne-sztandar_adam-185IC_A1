import React from 'react';
import bottomNavigation from "./components/navigation.js"

export default function App() {
  return (
    <AppContainer />
  );
}

const AppContainer = createAppContainer(bottomNavigation);


