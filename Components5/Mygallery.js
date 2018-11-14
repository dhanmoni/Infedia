import React from 'react';
import { StyleSheet, Text, View ,Image,Dimensions,ScrollView,ActivityIndicator} from 'react-native';
import {   Content, Card, CardItem, Thumbnail,  Button, Left, Body,Right } from 'native-base';
//import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
let HEIGHT_MIN = Dimensions.get('window').height;
let WIDTH_MIN = Dimensions.get('window').width;

var image = [
  
     require('../images/user.png'),
    require('../images/image1.jpg'),
    require('../images/mypic.jpg'),
   
    require('../images/audi.jpg'),
    
    require('../images/user.png'),
   ]



export default class Mygallery extends React.Component {

  
    static navigationOptions = {
      header : null
    }

  


constructor(props){
    super(props);
    this.state={
      
    }
  }


   
 




 renderSectionOne() {


    

        return image.map((image, index) => {
            return (
                <View key={index}>
                    

                    
        <View>
      
        <Card style={{flex: 1}}>
            <CardItem style={{height:HEIGHT_MIN/7}}>
              <Left>
                <Thumbnail circle source={require('../images/user.png')} style={{height: 60 ,width:60}}/>
                <Body>
                  <Text style={{fontSize: 18,color:'black'}}>User Name</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>

              

            </CardItem>
            <CardItem>
              <Body>
              <Text style={{paddingLeft: 10,paddingBottom: 5}}>
                    Caption Goes Here!
              </Text>
              <Image source={image} style={{height: 300, width:100+'%',borderRadius: 4 }}/>
                
                
                
              </Body>
            </CardItem>
            <CardItem style={{height: HEIGHT_MIN/15}}>
              <Left style={{flex:1, justifyContent:'space-around'}}>
              <View style={{backgroundColor:'transparent',flexDirection: 'row' ,justifyContent:'center',alignItems:'center'}}>
                <Button transparent >
                  <Icon name='md-thumbs-up' size={22} style={{paddingLeft:5}}/>
                  
                </Button>

                <Text>1.5k</Text>
              </View>
              <View style={{backgroundColor:'transparent',flexDirection: 'row',justifyContent:'center',alignItems:'center' }}>

                <Button transparent > 
                  <Icon name='md-chatboxes' size={22} style={{paddingLeft:5}}/>
                  
                </Button>
                <Text>300</Text>
                </View>
              <View style={{backgroundColor:'transparent',flexDirection: 'row',justifyContent:'center',alignItems:'center' }}>

                <Button transparent >
                  <Icon name='md-thumbs-down' size={22} style={{paddingLeft:5}}/>
                  
                </Button>
                <Text>20</Text>
              </View>
              </Left>
            </CardItem>
            
          </Card>





          

         

      </View>
      

                </View>
            )
        })

    }


    renderSection=()=>{
      return(
          <View style={{flex:1, }}>
             {this.renderSectionOne()}
          </View>
        )
    }














  
  render() {
    
    return (
      <View style={{flex:1}}>



        <View style={{flex:1,backgroundColor:'transparent',flexDirection: 'row',borderBottomWidth:0, borderBottomColor: 'transparent', }}>


           <LinearGradient colors={['#9636EA', '#30c1ff']} style={{width: 100 + '%', height: 100 +'%'}} start={{x: 0, y: 0.5}} end={{x: 1, y: 0.5}}>
              <View style={{flexDirection:'row', alignItems:'center',width: 100 + '%', height: 100 +'%',}} >
                  <Icon name='md-arrow-back' size={24}  style={{paddingLeft: 8,color:'white' }}
                    onPress={()=>this.props.navigation.navigate('User')
                }
                    
                  />
                  
                  <Text style={{color:'white',flex:1 ,textAlign: 'left' ,paddingLeft: 28,fontSize: 24 ,backgroundColor: 'transparent',fontFamily:'Rufina-Bold'}}>Gallery</Text>
                  <Icon name='md-apps' size= {25} style={{color:'white',marginLeft:WIDTH_MIN/2.2,marginRight:10}}/>
                  
              </View>
           </LinearGradient>

        </View>


     <View style={{flex:10}}>
          <ScrollView style={{flex:1}}>
            
            {this.renderSection()}
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
});