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



const Login = () => {
  return (
   	 <View style = {styles.container}>
   	 	<Text>Login text</Text>
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