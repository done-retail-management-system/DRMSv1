import React, {Component} from 'react';
import {
  //SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import Logo from'../components/Logo';
import Form from'../components/Form';

import {Actions} from 'react-native-router-flux';

export default class Login extends Component<{}>{
  render()
  {
    return (
     <View style = {styles.container}>
     <Logo/>
      <Form type = "Login"/>
        <View style = {styles.forgotPass}>
            <Text style={styles.forgotText}>Forgot Sign In Details? </Text>
            <TouchableOpacity onPress={this.forgot}><Text style = {styles.link}>Click Here</Text></TouchableOpacity>
        </View>
     </View>
  )
  }

  forgot()
  {
    Actions.forgot_password();
  }
}

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

//export default Login;
//export default forgot;