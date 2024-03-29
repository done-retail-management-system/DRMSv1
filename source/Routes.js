import React, {Component} from 'react';

import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import Forgot from './pages/Forgot';
//import Dashboard from '/pages/Dashboard';

export default class Routes extends Component<{}>{
  render()
  {
  	return (
	 	<Router>
	    	<Stack key="root" hideNavBar={true}>
		      <Scene key="login" component={Login} title="Login"/>
		      <Scene key="forgot_password" component={Forgot} title="Forgot"/>
		      //<Scene key = "dashboard" component={Dashboard} title ="Dashboard"/>
	    	</Stack>
	   </Router>   
	)
  }
}

//export default Routes;

