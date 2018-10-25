import React from 'react';
import { StyleSheet, View, Text,Image,ScrollView, TextInput,Dimensions,FlatList,Platform,ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {List, ListItem} from 'react-native-elements';

export default class NotificationScreen extends React.Component {

		constructor(){
	    super();
	    this.state ={
	    	isLoading: true,
			data: [],
			page: 0,
			loading: false,
	    }  
	  }

	  componentWillMount(){
	  	this.fetchdata()
	  }

	  fetchdata = async () =>{
	  		 
			  const response= await	fetch(`https://randomuser.me/api?results=15&seed=h&page=${this.state.page}`);
			  const json = await response.json();
			  this.setState({data: json.results, isLoading:false},
			  	
			  	)


	  }


	  

 
  render() {

  	if (this.state.isLoading) {
  		return(
  			<View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
  				<ActivityIndicator size='large' color='#9636ea'/>
  			</View>
  			)
  	}

    return (
     <View style={{flex:1}}>



     	 {/*****************************HEADER**************************/}


	        <View style={{flex:1,backgroundColor:'#f00000',flexDirection: 'row',borderBottomWidth:1, borderBottomColor: '#a0a0a0', }}>

		           <LinearGradient start={{x: 0, y: 0.5}} end={{x: 1, y: 0.5}} colors={['#9636EA', '#30c1ff']} style={{width: 100 + '%', height: 100 +'%'}}>

		              <View style={{flexDirection:'row', alignItems:'center',width: 100 + '%', height: 100 +'%',alignSelf: 'center'}}>
		                  
		                  <Text style={{color:'white',flex:1 ,textAlign: 'center',fontSize: 26 ,backgroundColor: 'transparent',fontFamily:'Rufina-Bold'}}>Notification</Text>
		              </View>

		           </LinearGradient>
	 	   </View>


	 	    <View style={{flex:10,}}>
 
				<View	style={{flex:1,}}>		              
					<ScrollView style={{flex:1,}}>
						<List >
    		      <FlatList
				  data={this.state.data}
				  keyExtractor= {(item, index)=>  index.toString()} 
				  renderItem={({item}) => 
                            <ListItem
						        roundAvatar

						        avatar={ { uri: item.picture.thumbnail }}
						        subtitleStyle={{}}
						       subtitle={
						       	<View style={{flexDirection:'row',flexWrap:'wrap',paddingLeft: 10}}>
						       	   <Text style={{backgroundColor:'transparent',alignSelf:'flex-start',fontWeight: '500',color:'black',fontSize:15, }}>
						       		{`${item.name.first} ${item.name.last} `}
						       	   </Text>
						       	   <Text style={{backgroundColor:'transparent',fontWeight:'200',color:'black',fontSize:15,}}>
						       	   	started following you
						       	   </Text>
						       	</View>
						       	
						       }
						      
						        containerStyle={{borderBottomWidth:0,}}
					           hideChevron

					      />

                     }
					/>
				   </List>
						
					</ScrollView>
				</View>						
          
           </View>
     </View>
    );
  }
}

