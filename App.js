import React from 'react';
import { StyleSheet, Text, View,YellowBox } from 'react-native';
import {Tabs} from './Config/router'



export default class App extends React.Component {
  constructor(){
      super();
      YellowBox.ignoreWarnings(
 
      ['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
      
    ]); 

    }
  
  render() {
    return (
      <Tabs/>
    );
  }
}

