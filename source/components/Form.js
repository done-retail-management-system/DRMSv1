import React, {Fragment} from 'react';
import {
  //SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';

const Logo = () => {
  return (
  	<View style = {styles.container}>
	     <TextInput style={styles.inputBox}
         underlineColorAndriod='#c7c7c7'
         placeholder="Username" 
         placeholderTextColor = "black"
         />

        <TextInput style={styles.inputBox} 
          underlineColorAndriod='#c7c7c7'
          placeholder="Passphrase" 
          placeholderTextColor = "black"
          secureTextEntry={true}
          />
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableOpacity>
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
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#000000',
    marginVertical: 10
  },

  buttonText:{
    fontSize:16,
    fontWeight: '500',
    color: "black",
    textAlign: 'center'
  },

  button:{
    width:300,
    backgroundColor: '#FC3D39',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 16
  }
});

export default Logo;