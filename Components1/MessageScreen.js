import React, { Component } from 'react'
import { StyleSheet, Text, View,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {  Tab, Tabs, ScrollableTab } from 'native-base';
import Chat from '../Components6/Chat'

let HEIGHT_MIN = Dimensions.get('window').height/16;
let WIDTH_MIN = Dimensions.get('window').width;
let HEIGHT_OF_BAR = HEIGHT_MIN/ 8;
export default class MessageScreen extends Component {
  render() {
    return (
      <View style={{flex:1}}>
         {/*********************************HEADER**********************************************/}


        <View style={{flex:1,backgroundColor:'transparent',flexDirection: 'row',borderBottomWidth:0, borderBottomColor: 'transparent', }}>


                <LinearGradient colors={['#9636EA', '#30c1ff']} style={{width: 100 + '%', height: 100 +'%'}} start={{x: 0, y: 0.5}} end={{x: 1, y: 0.5}}>
                <View style={{flexDirection:'row', alignItems:'center',width: 100 + '%', height: 100 +'%',}}>
                   
                    
                    <Text style={{color:'white',flex:1 ,textAlign: 'left' ,paddingLeft: 22,fontSize: 24 ,backgroundColor: 'transparent',fontFamily:'Rufina-Bold'}}>Messages</Text>
                    <Icon name='search' size={23}  style={{paddingRight: 25,color:'white'}}/>
                    <Icon name='ellipsis-v' size={23}  style={{paddingRight: 15,color:'white'}}/>

                </View>
                </LinearGradient>

            </View>
            <View style={{flex:10,backgroundColor:'white'}}>
            <Tabs tabBarUnderlineStyle={{ backgroundColor:'#5a1298', height: HEIGHT_OF_BAR }} tabContainerStyle={{ height: HEIGHT_MIN }}
            >
              <Tab heading="Chat"  tabStyle={{backgroundColor: '#30c1ff'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor:'#30c1ff'}} activeTextStyle={{ color:'#fff' }} textStyle={{ color:'#EEF8F7' }}>
               <Chat/>
              </Tab>
             
              <Tab heading="Chat-Request" tabStyle={{backgroundColor: '#30c1ff'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor:'#30c1ff'}} activeTextStyle={{ color:'#fff' }} textStyle={{ color:'#EEF8F7' }}>
                        <Text>Hello</Text>   
               </Tab>
              <Tab heading="Topic-Request" tabStyle={{backgroundColor: '#30c1ff'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor:'#30c1ff'}} activeTextStyle={{ color:'#fff' }} textStyle={{ color:'#EEF8F7' }}>
                <Text>Hello</Text>
              </Tab>
          
            </Tabs>
            </View>
      </View>
    )
  }
}
