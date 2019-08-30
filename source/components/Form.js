import React, {Fragment} from 'react';
import {
  //SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput
} from 'react-native';

const Logo = () => {
  return (
  	<View style = {styles.container}>
	     <TextInput style={styles.inputBox} underlineColorAndriod='#c7c7c7' placeholder="Username"/>
	  </View>
  );
};

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  },

  inputBox: {
    width:300,
    backgroundColor: '#c7c7c7',
    borderRadius: 25


  }
});

export default Logo;