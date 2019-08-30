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

const Forgot = () => {
  return (
   	 <View style = {styles.container}>
   	 	<Logo/>
      <Form />
        <View style = {styles.forgotPass}>
            <Text style={styles.forgotText}>Forgot Sign In Details? </Text>
            <Text style = {styles.link}>Click Here</Text>
        </View>
   	 </View>
  );
};

const styles = StyleSheet.create({
  container : {
    backgroundColor: '#fafafa',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  forgotPass: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  forgotText:{
    fontSize: 16
  },

  link:{
    fontSize: 16,
    color: '#FC3D39',
    fontWeight: 'bold'
  }
});

export default Login;