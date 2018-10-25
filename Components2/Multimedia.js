import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,TouchableWithoutFeedback ,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import {  Tab, Tabs, ScrollableTab } from 'native-base';
import Country from '../Components3/Country';
import Following from '../Components3/Following';
import State from '../Components3/State';
import Trending from '../Components3/Trending';

let HEIGHT_MIN = Dimensions.get('window').height/24;
let WIDTH_MIN = Dimensions.get('window').width;
let HEIGHT_OF_BAR = HEIGHT_MIN/ 8;
export default class Multimedia extends React.Component {

  static navigationOptions = {
      header: null, 

    }
 
  render() {
    return (
     
        
       <View style={{flex:1}}>


        {/*********************************HEADER**********************************************/}


        <View style={{flex:1,backgroundColor:'transparent',flexDirection: 'row',borderBottomWidth:0, borderBottomColor: 'transparent', }}>


           <LinearGradient colors={['#9636EA', '#30c1ff']} style={{width: 100 + '%', height: 100 +'%'}} start={{x: 0, y: 0.5}} end={{x: 1, y: 0.5}}>
              <View style={{flexDirection:'row', alignItems:'center',width: 100 + '%', height: 100 +'%',}} >
                  <Icon name='md-arrow-back' size={25}  style={{paddingLeft: 10,color:'white' }}
                    onPress={()=>this.props.navigation.navigate('Home')
                }
                    
                  />
                  
                  <Text style={{color:'white',flex:1 ,textAlign: 'left' ,paddingLeft: 22,fontSize: 24 ,backgroundColor: 'transparent',fontFamily:'Rufina-Bold'}}>Photos & Videos</Text>
                  <Icon name='md-funnel' size={25}  style={{paddingRight: 15,color:'white'}}/>
              </View>
           </LinearGradient>

        </View>
        
 

  
           {/*****************************CONTENT*************************************************/}
       <View style={{flex:10,backgroundColor:'white'}}>


            <Tabs tabBarUnderlineStyle={{ backgroundColor:'#5a1298', height: HEIGHT_OF_BAR }} tabContainerStyle={{ height: HEIGHT_MIN }}
            >
              <Tab heading="Following"  tabStyle={{backgroundColor: '#30c1ff'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor:'#30c1ff'}} activeTextStyle={{ color:'#fff' }} textStyle={{ color:'#EEF8F7' }}>
                <Following />
              </Tab>
              <Tab heading="State" tabStyle={{backgroundColor: '#30c1ff'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor:'#30c1ff'}} activeTextStyle={{ color:'#fff' }} textStyle={{ color:'#EEF8F7' }}>
                <State/>
              </Tab>
              <Tab heading="Country" tabStyle={{backgroundColor: '#30c1ff'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor:'#30c1ff'}} activeTextStyle={{ color:'#fff' }} textStyle={{ color:'#EEF8F7' }}>
                <Country />
              </Tab>
              <Tab heading="Trending" tabStyle={{backgroundColor: '#30c1ff'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor:'#30c1ff'}} activeTextStyle={{ color:'#fff' }} textStyle={{ color:'#EEF8F7' }}>
                <Trending />
              </Tab>
          
            </Tabs>



       </View>

          

 </View>
       

    
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});