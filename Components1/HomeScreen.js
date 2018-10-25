import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView,Dimensions } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Article from '../Components2/Article';
import Multimedia from '../Components2/Multimedia';

import {  Tab, Tabs, ScrollableTab } from 'native-base';
import Country from '../Components3/Country';
import Following from '../Components3/Following';
import State from '../Components3/State';
import Trending from '../Components3/Trending';

let HEIGHT_MIN = Dimensions.get('window').height/16;
let WIDTH_MIN = Dimensions.get('window').width;
let HEIGHT_OF_BAR = HEIGHT_MIN/ 8;
let IMG_WIDTH= WIDTH_MIN/4.4;
let IMG_HEIGHT= WIDTH_MIN/4.4;
let IMG_RADIUS = IMG_HEIGHT/2.2
export default class HomeScreen extends React.Component {


  _menu = null;
 
  setMenuRef = ref => {
    this._menu = ref;
  };
 
  hideMenu = () => {
    this._menu.hide();
  };
 
  showMenu = () => {
    this._menu.show();
  };

  navigateToArticle = () =>{
    this.props.navigation.navigate('Article');
    this._menu.hide();
  }
  navigateToMultimedia = () =>{
    this.props.navigation.navigate('Multimedia');
    this._menu.hide();
  }

		static navigationOptions = {
			header: null, 

		}


  render() {
    return (

    	//whole body
      <View style={{flex:1}}>

      
        {/*******************HEADER***************************/}
        <View style={{flex:1}}>
        <View style={{flex:1,backgroundColor:'transparent',flexDirection: 'row',borderBottomWidth:1, borderBottomColor: '#9636EA'}}>

           <LinearGradient  colors={['#9636EA', '#30c1ff']} style={{width: 100 + '%', height: 100 +'%',}} start={{x: 0, y: 0.5}} end={{x: 1, y: 0.5}}>
              <View style={{flexDirection:'row', alignItems:'center',width: 100 + '%', height: 100 +'%',alignSelf: 'center'}}>
                  
                  <Text style={{color:'white',flex:1 ,textAlign: 'center',fontSize: 32 ,backgroundColor: 'transparent',fontFamily:'Rufina-Bold'}}>Infedia</Text>
                  
                  <Menu
                      ref={this.setMenuRef}
                      button={<Icon onPress={this.showMenu} name='ellipsis-v' size={24} style={{paddingRight:15,color:'white'}}/>}
                    >
                      <MenuItem textStyle={{color:'black' ,fontFamily:'Rufina-Regular',fontSize: 16,}} onPress= {this.navigateToArticle}>Articles</MenuItem>
                      <MenuItem textStyle={{color:'black', fontFamily:'Rufina-Regular',fontSize: 16,}} onPress= {this.navigateToMultimedia}>Photos & Videos</MenuItem>
                      
                     
                    </Menu>
              </View>

           </LinearGradient>
	 	    </View>
</View>
  
    {/*****************CONTENT******************************/}
       <View style={{flex:10,backgroundColor:'white', }}>
        

          {/*****************UserInformation*******************/}
  <View style={{flex:1}}>
{/**/}<ScrollView style={{flex:1}}>
  <View style={{flex:1}}>
          <View style={{flex: 1,padding:20, backgroundColor:'#fff', borderBottomColor:'#9636EA', borderBottomWidth:2,elevation:5, flexDirection:'row',}}>
          	
          			 <View style={{backgroundColor: '#fff',flex: 3,alignItems:'center',justifyContent:  'center',}}
                 >

          			 			<Image source={require('../mypic.jpg')} 
          					style={{ width: IMG_WIDTH,height:IMG_HEIGHT, position: 'absolute',borderRadius: IMG_RADIUS,borderWidth:2, borderColor:'white'}} 
          			 />

          			 </View>
          			 <View style={{backgroundColor: 'transparent',flex: 4,}}>

          			 <View style={{flex:1, flexDirection:'column', alignSelf: 'flex-start',flexWrap: "wrap", justifyContent:  'center',}}>
          			 	
          			 		<Text style={{fontSize:21,fontFamily:'Rufina-Bold',color:'#000',flexWrap: "wrap"}}>User Name</Text>
          			 		<Text style={{fontSize:18,fontFamily:'Rufina-Bold', color:'#000',flexWrap: "wrap"}}>Place, State, Country</Text>
          			 		<Text style={{fontSize:15,fontFamily:'ElMessiri-Regular',color:'#000',flexWrap: "wrap"}}>Follower: 1010</Text>
          			 		<Text style={{fontSize:15,fontFamily:'ElMessiri-Regular',color:'#000',flexWrap: "wrap"}}>Following: 670</Text>

          			 </View>
          			 		
          			 </View>	
          	

          </View>


          {/*****************NEWS FEED************************/}

          <View style={{flex: 1.5, backgroundColor:'#fff',marginTop: 10}}>
          	

                <TouchableOpacity onPress={()=>this.props.navigation.navigate('PostHere')}>
                <View style={{width:100+'%', backgroundColor:'transparent',marginBottom: 10,padding: 10,borderWidth:1,borderColor:'#9636EA',borderRadius:100 }}>
                  <Text style={{marginLeft: 20,fontFamily:'Rufina-Regular',fontSize: 16,color:'#2d3436'}}>Post something here!</Text>
                </View>
                </TouchableOpacity>

                 <View style={{borderBottomColor:'#9636EA', borderBottomWidth:2}}>
                 </View>

                   <View style={{flex:10,backgroundColor:'white'}}>
           
                  <Tabs
                      tabBarUnderlineStyle={{ backgroundColor:'#5a1298', height: HEIGHT_OF_BAR }} tabContainerStyle={{ height: HEIGHT_MIN }}
                      >
                    <Tab 
                        heading="Following"
                        tabStyle={{backgroundColor: '#30c1ff'}}
                        textStyle={{color: '#fff'}}
                        activeTabStyle={{backgroundColor:'#30c1ff'}}
                        activeTextStyle={{ color:'#fff' }}
                        textStyle={{ color:'#EEF8F7' }}>
                      <Following />
                    </Tab>
                    <Tab
                        heading="State"
                        tabStyle={{backgroundColor: '#30c1ff'}} 
                        textStyle={{color: '#fff'}} 
                        activeTabStyle={{backgroundColor:'#30c1ff'}} 
                        activeTextStyle={{ color:'#fff' }} 
                        textStyle={{ color:'#EEF8F7' }}>
                      <State/>
                    </Tab>
                    <Tab 
                        heading="Country" 
                        tabStyle={{backgroundColor: '#30c1ff'}} 
                        textStyle={{color: '#fff'}} 
                        activeTabStyle={{backgroundColor:'#30c1ff'}} 
                        activeTextStyle={{ color:'#fff' }} 
                        textStyle={{ color:'#EEF8F7' }}>
                      <Country />
                    </Tab>
                    <Tab 
                        heading="Trending" 
                        tabStyle={{backgroundColor: '#30c1ff'}} 
                        textStyle={{color: '#fff'}} 
                        activeTabStyle={{backgroundColor:'#30c1ff'}} 
                        activeTextStyle={{ color:'#fff' }} 
                        textStyle={{ color:'#EEF8F7' }}>
                      <Trending />
                    </Tab>
                  </Tabs>
                 
                  
            </View>
          </View>
          </View>
          </ScrollView>
       </View> 
       </View>
    {/***********************FOOTER**********************/}    
      </View>

   
  );
  }
}


