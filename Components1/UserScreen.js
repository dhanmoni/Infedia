import React from 'react';
import { StyleSheet, Text, View,Button,Image,ScrollView,Dimensions,TouchableWithoutFeedback,ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
let HEIGHT_MIN = Dimensions.get('window').height;
let WIDTH_MIN = Dimensions.get('window').width;

let IMG_WIDTH= WIDTH_MIN/3;
let IMG_HEIGHT= WIDTH_MIN/3;
let IMG_RADIUS = IMG_HEIGHT/2

export default class User extends React.Component {

  static navigationOptions = {
      header: null, 

    }
  constructor(props){
    super(props);
    this.state={

    }
  }
  render() {
    return (
      <View style={styles.container}>
        

     

    



       <View style={{flex:1,}}>


       <LinearGradient colors={['#9636EA', '#30c1ff']} style={{width: 100 + '%', height: 100 +'%'}} 
           start={{x: 0, y: 0.5}} end={{x: 1, y: 0.5}}
           >



              <View style={{flexDirection:'row', alignItems:'center',width: 100 + '%', height: 100 +'%',alignSelf: 'center'}}>
              <Icon name='md-person-add' size={23} style={{paddingLeft:15, color:'white'}}/>
                  
                  <Text style={{color:'white',flex:1 ,textAlign: 'center',fontSize: 26 ,backgroundColor: 'transparent',fontFamily:'Rufina-Bold'}}>User</Text>
                  <Icon name='md-cog' size={24} style={{paddingRight:15,color:'white'}}/>
              </View>


           </LinearGradient>
       
       </View>

     {/********************UserInformation**************************/}

          <View style={{flex:10}}>
          <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
            
          
                <View  style={{flex:4,width:100+'%', height:100+'%',alignItems:'center',justifyContent:'center',paddingTop:10,paddingBottom: 15,borderBottomWidth:2,borderBottomColor:'#7f8c8d' }}>

                    <Image source={require('../images/mypic.jpg')} style={{ width: IMG_WIDTH,height:IMG_HEIGHT,borderRadius: IMG_RADIUS,alignSelf: 'center',borderWidth:2, borderColor:'white'}}/>
                    <View><Text style={{color:'black',fontSize:24,marginTop:10,fontFamily:'Rufina-Regular'}}>User Name</Text></View>
                         
                    <View style={{flexDirection:'row',backgroundColor:'transparent',width:WIDTH_MIN/1.1,justifyContent:'space-between',marginTop:10}}>

                      <View style={{flexDirection:'column',width:WIDTH_MIN/2.8,alignItems:'center',borderWidth:2,borderRadius:9,borderColor:'white',overflow: 'hidden'}}>
                           <View style={{borderBottomWidth:2,borderBottomColor:'white',backgroundColor:'#9636EA',width:100+'%',alignItems:'center'}}>
                               <Text style={{color:'white',fontSize:20,fontFamily:'Rufina-Regular'}}>Follower</Text>
                           </View>
                        <View style={{backgroundColor:'rgba(48, 193, 255, 1)',width:100+'%',alignItems:'center'}}>
                            <Text style={{color:'black',fontSize:17,}}>1010</Text>
                        </View>
                      </View>

                      <View style={{flexDirection:'column',width:WIDTH_MIN/2.8,alignItems:'center',borderWidth:2,borderRadius:9,borderColor:'white',overflow: 'hidden'}}>
                           <View style={{borderBottomWidth:2,borderBottomColor:'white',backgroundColor:'#9636EA',width:100+'%',alignItems:'center'}}>
                               <Text style={{color:'white',fontSize:20,fontFamily:'Rufina-Regular'}}>Following</Text>
                           </View>
                        <View style={{backgroundColor:'rgba(48, 193, 255, 1)',width:100+'%',alignItems:'center'}}>
                            <Text style={{color:'black',fontSize:17,}}>670</Text>
                        </View>
                      </View>

                    </View>
                    <View style={{marginTop:30,marginLeft: 10}}>
                    <Text style={{color:'black',fontSize:17,fontFamily:'Rufina-Regular'}}>User's name</Text>
                    <Text style={{color:'black',fontSize:16,fontFamily:'Rufina-Regular'}}>User's Email</Text>
                    <Text style={{color:'black',fontSize:16,fontFamily:'Rufina-Regular'}}>User's Location</Text>
                    <Text style={{color:'black',fontSize:16,fontFamily:'Rufina-Regular'}}>User's Personal Information that he/she provides(optional)</Text>


                    </View>

                </View>
                <View style={{flex:1}}>
                  
                </View>

                <View style={{flex: 2, backgroundColor:'#fff',marginTop: 30}}>
            

          

                <TouchableWithoutFeedback 
                        onPress={()=> this.props.navigation.navigate('Mygallery')}
                        
                >
                 <View style={{width:100+'%', backgroundColor:'transparent',marginBottom: 10,padding: 0,elevation:2,marginTop: 10, }}>
                        <LinearGradient  colors={['#9636EA', '#30c1ff']} start={{x: 0, y: 0.5}} end={{x: 1, y: 0.5}}
                        style={{borderRadius:100,}}>

                        <View style={{padding:10,}}>
                          
                          <Text  style={{marginLeft: 20,fontFamily:'Rufina-Regular',color: '#fff',fontSize: 24}}>Photos & Videos</Text>
                        </View>
                        </LinearGradient>

                     </View>
                  
                    </TouchableWithoutFeedback>



                    <TouchableWithoutFeedback 
                      onPress={()=> this.props.navigation.navigate('Myarticle')}
                    >
                    <View style={{width:100+'%', backgroundColor:'transparent',marginBottom: 10,padding: 0,elevation:2,marginTop: 10, marginBottom:20}}>
                        <LinearGradient  colors={['#9636EA', '#30c1ff']} start={{x: 0, y: 0.5}} end={{x: 1, y: 0.5}}
                        style={{borderRadius:100,elevation:6}}>

                        <View style={{padding:10,}}>
                          
                          <Text  style={{marginLeft: 20,fontFamily:'Rufina-Regular',color: '#fff',fontSize: 24}}>Articles</Text>
                        </View>
                        </LinearGradient>

                  </View>
                </TouchableWithoutFeedback>


          </View>

             </ScrollView>
          </View>

     
       
        
      </View>
    );
  }
}
 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userpic:{
    height:WIDTH_MIN/2.5,
    width: WIDTH_MIN/2.5,
    borderRadius:100,
    borderColor: 'white',
    borderWidth:2
    
  }
});