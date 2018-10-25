import React from 'react';
import { StyleSheet, Text, View,YellowBox } from 'react-native';
import { createBottomTabNavigator,createTabNavigator,createStackNavigator } from 'react-navigation';
import HomeScreen from '../Components1/HomeScreen';
import ExploreScreen from '../Components1/ExploreScreen';
import MessageScreen from '../Components1/MessageScreen';
import Article from '../Components2/Article';
import Multimedia from '../Components2/Multimedia';
import PostHere from '../Components2/PostHere';
import SearchScreen from '../Components1/SearchScreen';
import UserScreen from '../Components1/UserScreen'
import Icon from 'react-native-vector-icons/FontAwesome';
import NotificationScreen from '../Components1/NotificationScreen';

import Mygallery from '../Components5/Mygallery';
import Myarticle from '../Components5/Myarticle';
// export const NewsFeedStack =createStackNavigator({

//    Multimedia:{
//     screen: Multimedia,
//     navigationOptions :{
//       header: null, 

//     }
//    },
//    Following:{
//     screen: Multimedia,
//     navigationOptions : {
//       header: null, 

//     }
//    },
//    State:{
//     screen: State
//    },
//    Country:{
//     screen: Country
//    },
//    Trending:{
//     screen: Trending
//    }

// })

export const UserStack = createStackNavigator({
  User:{
    screen:UserScreen,
    },
  Mygallery:{
    screen:Mygallery,

    
  },
  Myarticle:{
    screen:Myarticle,
    
  }
})


export const MediaStack = createStackNavigator({

    Home:{
      screen: HomeScreen
    },
    Article:{
      screen: Article
    }, 
    Multimedia:{
      screen: Multimedia 
    },
    PostHere:{
      screen:PostHere
    }
  
   

})



export const Tabs = createBottomTabNavigator(
    {

   
      Home: { 
        screen:MediaStack,
          navigationOptions: {
          tabBarLabel: 'Home',
       tabBarIcon: ({tintColor}) => <Icon name="home" size={25} color={tintColor} />,
        },
        },
      

         Explorer: { 
      screen:ExploreScreen,
        navigationOptions: {
        tabBarLabel: 'Explore',
     tabBarIcon: ({tintColor}) => <Icon name="compass" size={25} color={tintColor} />,
      },
      },


         Search: { 
        screen:SearchScreen,
          navigationOptions: {
          tabBarLabel: 'Search',
       tabBarIcon: ({tintColor}) => <Icon name="search" size={23} color={tintColor} />,
        },
        },
        Message: { 
          screen:MessageScreen,
            navigationOptions: {
            tabBarLabel: 'Message',
            tabBarIcon: ({tintColor}) => <Icon name="envelope" size={23} color={tintColor} />,
          },
          },

        Notification:{
          screen: NotificationScreen,
          navigationOptions: {
            tabBarLabel: 'Notification',
            tabBarIcon: ({tintColor}) => <Icon name="bell" size={22} color={tintColor}/>,
         },
         },
   

       
        User: { 
        screen:UserStack,
          navigationOptions: {
          tabBarLabel: 'User',
          tabBarIcon: ({tintColor}) => <Icon name="user" size={25} color={tintColor} />,
        },
        },
  

  },


      {
        
        tabBarPosition: 'bottom',
        tabBarOptions: {
          activeTintColor: '#5f27cd',
          inactiveTintColor: '#b2bec3',
           showLabel: false,
           style:{
            backgroundColor: '#fff',
            borderTopWidth: 1,
            borderTopColor: '#e2e2e2'
           }
        }
     }

)
