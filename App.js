import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Home from './src/screens/Home';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function App() {
  return (
    <>
      <Home />
      <StatusBar style="auto" translucent={false} backgroundColor="rgba(0, 0, 0, .05)" />
    </>
  );
}
