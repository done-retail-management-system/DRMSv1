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
import Form from'../components/Form';

const Login = () => {
  return (
   	 <View style = {styles.container}>
   	 	<Logo/>
      <Form/>
   	 </View>
  );
};

const styles = StyleSheet.create({
  container : {
    backgroundColor: '#fafafa',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Login;