import React from 'react';
import { StyleSheet, Text, View,Dimensions,ScrollView,Image } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

var { height, width } = Dimensions.get('window');

var images = [
    require('../images/image1.jpg'),
    require('../images/image3.jpg'),
    require('../images/audi.jpg'),
    require('../images/image10.jpeg'),
     require('../images/image9.jpeg'),
     require('../images/image8.jpeg'),
     require('../images/image7.jpeg'),
     require('../images/image6.jpeg'),
     require('../images/user.png'),
     require('../images/image5.jpg'),
    require('../images/image4.jpeg'),
    require('../images/tesla2.jpg'),
     require('../images/image1.jpg'),
    require('../images/image3.jpg'),
    require('../images/audi.jpg'),
    require('../images/image10.jpeg'),
     require('../images/image9.jpeg'),
     require('../images/image8.jpeg'),
     require('../images/image7.jpeg'),
     require('../images/image6.jpeg'),
     require('../images/user.png'),
     require('../images/image5.jpg'),
    require('../images/image4.jpeg'),
    require('../images/tesla2.jpg'), 
    require('../images/image9.jpeg'),
     require('../images/image8.jpeg'),
     require('../images/image7.jpeg'),
     require('../images/image6.jpeg'),
     require('../images/user.png'),
     require('../images/image5.jpg'),
    require('../images/image4.jpeg'),
    require('../images/tesla2.jpg'),
   
    
]


export default class Explorer extends React.Component {
  


   renderSectionOne() {
        return images.map((image, index) => {
            return (
                <View key={index} style={[{ width: (width) / 3 }, { height: (width) / 3 }, { marginBottom: 2 }, index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }]}>
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


        
      	     {/*****************************HEADER**************************/}


	        <View style={{flex:1,backgroundColor:'#f00000',flexDirection: 'row',borderBottomWidth:1, borderBottomColor: '#a0a0a0', }}>

		           <LinearGradient start={{x: 0, y: 0.5}} end={{x: 1, y: 0.5}} colors={['#9636EA', '#30c1ff']} style={{width: 100 + '%', height: 100 +'%'}}>

		              <View style={{flexDirection:'row', alignItems:'center',width: 100 + '%', height: 100 +'%',alignSelf: 'center'}}>
		                  
		                  <Text style={{color:'white',flex:1 ,textAlign: 'center',fontSize: 26 ,backgroundColor: 'transparent',fontFamily:'Rufina-Bold'}}>Explore</Text>
		              </View>

		           </LinearGradient>
	 	   </View>

	       {/****************************Content******************************/}

           <View style={{flex:10,}}>
 
								              
					<ScrollView style={{flex:1}}>
						
						{this.renderSection()}
					</ScrollView>
												
          
           </View>


      </View>
    );
  }
}

