import React, {Fragment} from 'react';
import {
  //SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';

const Logo = () => {
  return (
	 <Image style={{width:100, height:100}} source={require('./logo.png')}/>
  );
};

export default Logo;