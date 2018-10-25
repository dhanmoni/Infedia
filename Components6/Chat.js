import React, { Component } from 'react'
import {View,Dimensions,ScrollView,ActivityIndicator,Image} from 'react-native'
import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Item } from 'native-base';

let HEIGHT_MIN = Dimensions.get('window').height;
let WIDTH_MIN = Dimensions.get('window').width;
export default class Chat extends Component {


    constructor(props){
        super(props);
        this.state={
            isLoading: true,
            error: null,
            dataSource: []
        }
      }
    
    
        componentDidMount(){
        return fetch('https://randomuser.me/api?results=10')
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

      renderSectionOne(){
        let thumbnail = this.state.dataSource.map((image, index)=>{
            return <View key= {index}>
                   <Image source={{uri: image.picture.thumbnail}} 
                    style={{height: 40 ,width:40,borderWidth: 1,borderColor: '#dfdbdb',borderRadius: 20}}/>
                   </View>
        });
    
       let names = this.state.dataSource.map((item, index)=>{
            return <View key= {index} style={{backgroundColor:'transparent',width:(WIDTH_MIN),alignItems:'flex-start',}}>
                <Text style={{color: 'black'}}>{item.name.first} {item.name.last}</Text>
            </View>
        })


        return  this.state.dataSource.map((item, index)=>{
                        return(
                            <View key= {index} style={{ height: (HEIGHT_MIN/10)}}>
                                <Container>
                                  <Content>
                                    <List>
                                        <ListItem avatar>
                                        <Left >
                                         {thumbnail[index]}
                                        </Left>
                                        <Body>
                                            {names[index]}
                                            <Text note>Hey what's up?</Text>
                                        </Body>
                                        <Right>
                                            <Text note>3:43 pm</Text>
                                        </Right>
                                        </ListItem>
                                    </List>
                                </Content>
                            </Container>
    
    
                            </View>
                        )
                    })	
                
      }


      
     
      renderSection=()=>{
        return(
                <View style={{flex:1  }}>
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
   return(
    <View style={{flex:1}}>
    <ScrollView>
      {this.renderSection()}
    </ScrollView>
    </View>
   )
   
}
}