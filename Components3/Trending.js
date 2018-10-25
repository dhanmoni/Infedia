import React from 'react';
import { StyleSheet, Text, View ,Image,Dimensions,ScrollView,ActivityIndicator } from 'react-native';

import {   Content, Card, CardItem, Thumbnail,  Button, Left, Body,Right } from 'native-base';

import Icon from 'react-native-vector-icons/Ionicons';



let HEIGHT_MIN = Dimensions.get('window').height;
let WIDTH_MIN = Dimensions.get('window').width;



export default class Trending extends React.Component {

	static navigationOptions = {
      header: null, 

    }
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


  	let pics = this.state.dataSource.map((item, index)=>{
  		return <View key = {index}>
  			<Image source={{uri: item.picture.large}} 
  			style={{height: HEIGHT_MIN/3 ,width: WIDTH_MIN/2}}/>
  		</View>
  	})

  	let thumbnail = this.state.dataSource.map((image, index)=>{
    	return <View key= {index}>
    		   <Image source={{uri: image.picture.thumbnail}} 
    		    style={{height: 40 ,width:40,borderWidth: 1,borderColor: '#dfdbdb',borderRadius: 20}}/>
    	       </View>
    });

   let names = this.state.dataSource.map((item, index)=>{
    	return <View key= {index} style={{backgroundColor:'transparent',width:(WIDTH_MIN/ 4),alignItems:'flex-start',}}>
    		<Text style={{color: 'black'}}>{item.name.first}</Text>
    	</View>
    })
  	
  	return  this.state.dataSource.map((image, index)=> {
  				return(
  						<View key ={index} style={{width: (WIDTH_MIN/ 2) , height: (HEIGHT_MIN/2)}}>


  							<Card>
								<CardItem>
									<Left>
						    {thumbnail[index]}
						    <Body>
						      {names[index]}
				                  
				                </Body>
				              </Left>

				              <Right>
				              	<Icon type="Ionicons" name="md-heart-outline" size={24} />
				              </Right>
  								</CardItem>
  							    <CardItem cardBody style={{height:(HEIGHT_MIN/3),width:null}}>
					              
					              
					             {pics[index]}
						              
	              
                
                                  
					             
                        </CardItem>


                        <CardItem style={{height: HEIGHT_MIN/15}}>
            	<Left style={{flex:1, justifyContent:'space-between'}}>
            	<View style={{backgroundColor:'transparent',flexDirection: 'row' ,justifyContent:'center',alignItems:'center'}}>
            		<Button transparent >
            			<Icon name='md-thumbs-up' size={20} style={{paddingLeft:5}}/>
            			
            		</Button>

            		<Text>1.5k</Text>
            	</View>
            	
            	<View style={{backgroundColor:'transparent',flexDirection: 'row',justifyContent:'center',alignItems:'center' }}>

            		<Button transparent >
            			<Icon name='md-thumbs-down' size={20} style={{paddingLeft:5}}/>
            			
            		</Button>
            		<Text>20</Text>
            	</View>
            	</Left>
            </CardItem>

  							</Card>



  							
  						</View>
  					)
  			})
  		
  }

  renderSection=()=>{
  	return(
  			<View style={{flex:1,flexDirection:'row', flexWrap: 'wrap'  }}>
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

