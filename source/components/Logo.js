import React, {Component} from 'react';
import {
  //SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';


export default class Logo extends Component<{}>{
  render(){
  	return (
  	<View style = {styles.container}>
	 <Image style={{width:150, height:150}} source={require('./logo.png')}/>
	 <Text style = {styles.logoText}>Welcome to Done Retail</Text>
	</View>
  )
  } 
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent:'flex-end',
    alignItems: 'center',
  },
  logoText:{
  	fontSize:20,
  	color: '#c7c7c7',
  	fontWeight: 'bold',
  }
});

//export default Logo;