import React from 'react';
import { StyleSheet,  View ,Image,Dimensions,ScrollView,ActivityIndicator} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';


let HEIGHT_MIN = Dimensions.get('window').height;
let WIDTH_MIN = Dimensions.get('window').width;

export default class TrendingArticle extends React.Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Card style={{flex:0}}>
            <CardItem>
              <Left>
                <Thumbnail circle source={require('../user.png')} style={{height: 60 ,width:60}}/>
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                
                <Text>
                  FABs (Floating Action Buttons) are used for a special type of promoted action. They are distinguished by a circled icon floating above the UI in a fixed position and have special motion behaviors. When clicked, it may contain more related actions.
                      Replacing Component: React Native
                </Text>
              </Body>
            </CardItem>
            <CardItem style={{height: HEIGHT_MIN/15}}>
            	<Left style={{flex:1, justifyContent:'space-around'}}>
            	<View style={{backgroundColor:'transparent',flexDirection: 'row' ,justifyContent:'center',alignItems:'center'}}>
            		<Button transparent >
            			<Icon name='md-thumbs-up' size={20} style={{paddingLeft:5}}/>
            			
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
            			<Icon name='md-thumbs-down' size={20} style={{paddingLeft:5}}/>
            			
            		</Button>
            		<Text>20</Text>
            	</View>
            	</Left>
            </CardItem>
          </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});