//import React from 'react';
import React, {Fragment} from 'react';
import {
  //SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Logo from'../components/Logo';


const Login = () => {
  return (
   	 <View style = {styles.container}>
   	 	<Logo/>
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

export default Login;