import React from 'react';
import { StyleSheet, Text, View ,Image,Dimensions,ScrollView,ActivityIndicator} from 'react-native';
import {   Content, Card, CardItem, Thumbnail,  Button, Left, Body,Right } from 'native-base';
//import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';

let HEIGHT_MIN = Dimensions.get('window').height;
let WIDTH_MIN = Dimensions.get('window').width;

var image = [
  
	require('../images/image5.jpg'),
  require('../images/image10.jpeg'),
  require('../images/audi.jpg'),
     require('../images/image9.jpeg'),
    require('../images/image1.jpg'),
    require('../images/image3.jpg'),
    
    require('../images/image10.jpeg'),
     require('../images/image9.jpeg'),
     require('../images/image8.jpeg'),
      require('../images/image7.jpeg'),
     require('../images/image6.jpeg'),
   ]



export default class Following extends React.Component {


constructor(props){
    super(props);
    this.state={
    	isLoading: true,
    	error: null,
    	dataSource: []
    }
  }


  	componentDidMount(){
    return fetch('https://randomuser.me/api?results=20')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.results,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }
 




 renderSectionOne() {


 		let names = this.state.dataSource.map((item, index)=>{
    	return <View key= {index} style={{backgroundColor:'transparent',width:(WIDTH_MIN/ 2),alignItems:'flex-start',}}>
    		<Text style={{color: 'black',fontSize: 17}}>{item.name.first} {item.name.last}</Text>
    	</View>
    })

        return image.map((image, index) => {
            return (
                <View key={index}>
                    

                    
    		<View>
    	
    		<Card style={{flex: 1}}>
            <CardItem style={{height:HEIGHT_MIN/7}}>
              <Left>
                <Thumbnail circle source={image} style={{height: 60 ,width:60}}/>
                <Body>
                  {names[index]}
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>

              <Right>
              	<Icon type="Ionicons" name="md-heart" size={28} style={{color:'#fa2222'}}/>
              </Right>

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
  	if(this.state.isLoading){
      return(
        <View style={{flex: 1, justifyContent:'center',alignItems:'center'}}>
          <ActivityIndicator size="large" color="#9636ea" />
        </View>
      )
    }
    return (
    	<View style={{flex:1}}>

    	<ScrollView style={{flex:1}}>
						
						{this.renderSection()}
					</ScrollView>
    	
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