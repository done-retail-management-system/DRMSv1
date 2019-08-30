
import React, {Component} from 'react';
import {
  //SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';



import Routes from './source/Routes';


//import Forgot from './source/pages/Forgot';

export default class App extends Component<{}>{
  render(){
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#c7c7c7" barStyle="light-content" />
        <Routes/>
      </View> 
  )
  }  
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: '#fafafa',
    flex: 1, flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});


//export default App;
