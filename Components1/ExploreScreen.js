import React from 'react';
import { StyleSheet, Text, View,Dimensions,ScrollView,Image } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

var { height, width } = Dimensions.get('window');

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
    require('../image9.jpeg'),
     require('../image8.jpeg'),
     require('../image7.jpeg'),
     require('../image6.jpeg'),
     require('../user.png'),
     require('../image5.jpg'),
    require('../image4.jpeg'),
    require('../tesla2.jpg'),
   
    
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

