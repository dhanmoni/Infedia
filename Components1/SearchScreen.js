import React, { Component } from 'react';
import { StyleSheet, View,Alert, Text,Image,ScrollView,TextInput,Dimensions,FlatList,TouchableOpacity,ActivityIndicator } from 'react-native';
import GridView from 'react-native-super-grid';
import LinearGradient from 'react-native-linear-gradient';
import {List, ListItem} from 'react-native-elements';



export default class Search extends Component {


	constructor(){
	    super();
	    this.state ={
	    	isLoading: true,
			data: []
	    }  
	  }

	  componentWillMount(){
	  	this.fetchdata()
	  }

	  fetchdata = async () =>{
			  const response= await	fetch("https://randomuser.me/api?results=10");
			  const json = await response.json();
			  this.setState({
			  	data: json.results,
			  	isLoading:false
			  })


	  }


	  renderSparator= () =>{
	  	return(
	  			<View 
	  				style={{height:1, width:'86%',backgroundColor:'#ced0ce',marginLeft:'14%'}}
	  			/>
	  		)
	  }


	onDelete= ()=>{  Alert.alert(
			  'Alert ',
			  'Are you sure to delete this item?',
			  [
			    
			    {text: 'Cancel', onPress: () => alert('Cancel Pressed')},
			    {text: 'Delete', onPress: () => alert('Deleted')},
			  ],
			  { cancelable: true }
			)
}

  render() {

  		if(this.state.isLoading){
      return(
        <View style={{flex: 1, justifyContent:'center',alignItems:'center'}}>
          <ActivityIndicator size='large' color='#9636ea'/>
        </View>
      )
    }

   return(
    <View style={{flex:1,}}>



    	<View style={{flex:1,backgroundColor:'#f00000',flexDirection: 'row', }}>

           <LinearGradient colors={['#9636EA', '#30c1ff']} style={{width: 100 + '%', height: 100 +'%'}}
           start={{x: 0, y: 0.5}} end={{x: 1, y: 0.5}}>
              <View style={{flexDirection:'row', alignItems:'center',width: 100 + '%', height: 100 +'%',alignSelf: 'center'}}>
                  
                  <Text style={{color:'white',flex:1 ,textAlign: 'center',fontSize: 26 ,backgroundColor: 'transparent',fontFamily:'Rufina-Bold'}}>Search</Text>
              </View>

           </LinearGradient>
	 	</View>





    	<View style={{flex:10,backgroundColor:'#95a5a6'}}>
    		<View style={{flex:1,flexDirection:'column'}}>

				<View style={{flex:1}}>
						<LinearGradient  start={{x: 0, y: 0.5}} end={{x: 1, y: 0.5}} colors={['#9636EA', '#30c1ff']} style={{width: 100 + '%', height: 100 +'%'}}>


						    			<View style={{flex:1,backgroundColor:'transparent',padding:5,flexDirection:'row'}}>
						    				<TextInput placeholder='Search'
						    				           placeholderTextColor='#8395a7'
						    				           underlineColorAndroid='transparent' 
						    				           autoCapitalize= 'words' 
						    				           style={styles.search}
						    				/>
						    			</View>
						</LinearGradient>
				</View>
    			<View style={{flex:9}}>
		    	 <ScrollView style={{flex:1,backgroundColor:'#fff'}} >
		    		<View style={{flexDirection:'column',flex:1}}>


				    		<View style={{backgroundColor:'#eef0f3',height:25,width:Dimensions.get('window').width,position:'absolute',alignItems:'center',justifyContent:'center',elevation: 4}}>
				    		  <Text style={{paddingLeft:0,}}>Recent Searches</Text>
				    		</View>
				    		<List containerStyle={{borderTopWidth: 0, flex:1,}}>
				    		  

				    		   <FlatList

								  data={this.state.data}
								  keyExtractor= {(item, index)=>  index.toString()} 
								  ItemSeparatorComponent={this.renderSparator}
								  renderItem={({item}) => <View style={{flex:1,flexDirection:'row'}}>
                                            <ListItem
										        roundAvatar
										        avatar={ { uri: item.picture.thumbnail }}
										        title={`${item.name.first} ${item.name.last}`}
										        subtitle={`${item.location.city},${item.location.state}`}
										        containerStyle={{borderBottomWidth:0, flex:9}}
									            hideChevron

									        />
									        <View style={{flex:1,backgroundColor:'transparent',justifyContent:'center', alignItems:'center'}}>
									           <TouchableOpacity style={{backgroundColor:'transparent',width:50+'%',height:50+'%',borderRadius:6,justifyContent:'center',alignItems:'center'}}><Text style={{color:'#000',fontSize:17,fontWeight:'300'}}
									           onPress={this.onDelete.bind(this)}
									           >X</Text></TouchableOpacity>
									        </View>
									        
									       
                                       </View>
                                     }

						/>

						   

		    		   </List>
		    		</View>
		    	 </ScrollView>
		    	 </View>
		    </View>
    	</View>

    	
    	
    	
    </View>
    )
  }
}

const styles = StyleSheet.create({
 
  search:{
  	borderRadius:5,
  	borderWidth: 1,
  	flex:1,
  	width: Dimensions.get('window').width,
  	borderColor: '#e1e2e2',
  	padding:1,
  	paddingLeft:20,
  	backgroundColor:'white',
  	fontSize: 20,
    alignItems:'center',
    marginTop: 6,
    marginBottom: 6,
    justifyContent: 'center'
  	
  	
  },
  historysearches:{
  	flex:1,
  	borderBottomWidth:1,
  	borderBottomColor: '#e3e4e5',
  	width:Dimensions.get('window').width,
  	height: 30,
  	borderRadius:3
  },
  historynames:{
  	color:'black',
  	alignItems:'center',
  	justifyContent:'center'
  }
});