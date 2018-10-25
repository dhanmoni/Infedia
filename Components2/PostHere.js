import React from 'react';
import { StyleSheet, Text, View ,Image,Dimensions,ScrollView,ActivityIndicator,TextInput} from 'react-native';

//import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
let HEIGHT_MIN = Dimensions.get('window').height;
let WIDTH_MIN = Dimensions.get('window').width;


var images = [
    require('../image1.jpg'),
    require('../image3.jpg'),
    require('../audi.jpg'),
    require('../image10.jpeg'),
     require('../image9.jpeg'),
     require('../image8.jpeg'),
     require('../image7.jpeg'),
     require('../image6.jpeg'),
     require('../user.png'),
     require('../image5.jpg'),
    require('../image4.jpeg'),
    require('../tesla2.jpg'),
     require('../image1.jpg'),
   
    
   
    
]



export default class PostHere extends React.Component {

     static navigationOptions = {
			header: null, 

		}
	 
  constructor(props){
    super(props);
    this.state={

    }
  }


 renderSectionOne() {
        return images.map((image, index) => {
            return (
                <View key={index} style={[{ width: WIDTH_MIN / 3 }, { height: WIDTH_MIN / 3 }, { marginBottom: 2 }, index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }]}>
                    <Image style={{
                        flex: 1,
                        alignSelf: 'stretch',
                        width: undefined,
                        height: undefined,

                    }}
                        source={image}>
                    </Image>

                </View>
            )
        })

    }


    renderSection=()=>{
    	return(
    			<View style={{flex:1, flexDirection:'row',flexWrap:'wrap'}}>
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
                  <Icon name='chevron-left' size={20}  style={{paddingLeft: 5,color:'white' }}
                    onPress={()=>this.props.navigation.navigate('Home')
                }
                    
                  />
                  
                  <Text style={{color:'white',flex:1 ,textAlign: 'left' ,paddingLeft: 22,fontSize: 24 ,backgroundColor: 'transparent',fontFamily:'Rufina-Bold'}}>Create Post</Text>
                  <Text  style={{paddingRight: 15,color:'white',fontSize:18,fontFamily:'Radley-Regular'}}>Share</Text>
              </View>
           </LinearGradient>

        </View>

      	<View style={{flex:10}}>

      		<View style={{flex:1,borderBottomWidth:1,borderBottomColor:'#636e72'}}>
      			<ScrollView>
      				<View>
      					<TextInput placeholder='Write Something Here...' style={styles.textInput} underlineColorAndroid='transparent' multiline={true}/>
      				</View>
      			</ScrollView>
      		</View>
      		<View style={{flex:1}}>
      			<ScrollView>
      				
      					{this.renderSection()}
      				
      			</ScrollView>
      		</View>

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
  textInput:{
  	fontSize:19,
  	width:WIDTH_MIN-10,
  	marginHorizontal: 5,
  	

  }
});