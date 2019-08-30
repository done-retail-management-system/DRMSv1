/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  //SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';



import Login from './source/pages/Login';
//import Forgot from './source/pages/Forgot';


const App = () => {
  return (
    <View style={styles.container}>
    <StatusBar backgroundColor="#c7c7c7" barStyle="light-content" />
    <Login/>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container : {
    backgroundColor: '#fafafa',
    flex: 1, flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});


export default App;
