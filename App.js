/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,

} from 'react-native';


import ListWrapper from './app/ListWrapper';


const App: () => React$Node = () => {
  return (
    <>
      <ListWrapper></ListWrapper>
    </>
  );
};


export default App;
