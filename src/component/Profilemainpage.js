import * as React  from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,Image,
  View, 
  TextInput,
  TouchableOpacity,
  Alert, Modal,
  Pressable
} from 'react-native';
import Personaldetails from './personaldetails';
import Contact from './contact';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { NavigationContainer } from '@react-navigation/native';
import { FlatGrid } from 'react-native-super-grid';
import ImageSlider from 'react-native-image-slider';

import { NavigationBar } from 'navigationbar-react-native';
import { Card } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Dashboard from './Dashboard';
import { SafeAreaView } from 'react-native-safe-area-context';

const Drawer = createDrawerNavigator();
const ComponentLeft = () => {
  return(
    <View style={{ flex: 1, alignItems: 'flex-start'}} >
       
               {/* <Text style={{ color: 'white', }}>Back Home</Text> */}
               <Image 
          source={require('/Users/macbook/Reactnative/native/onbordingnew/src/component/images/Df.png')}
          style={{ resizeMode: 'contain', width: 100, height: 80, alignSelf: 'center' }}
        />

    
    </View>
  );
};
 
const ComponentCenter = () => {
  return(
    <View style={{ flex: 1, }}>
       {/* <Image
        source={require('/Users/macbook/Reactnative/native/onbordingnew/src/component/images/Df.png')}
        style={{resizeMode: 'contain', width: 200, height: 35, alignSelf: 'center' }}
      /> */}
    </View>
  );
};
 
const ComponentRight = (props) => {
  return(
    <View style={{ flex: 1, alignItems: 'flex-end',marginRight:20 }}>
      <TouchableOpacity onPress={()=>{
        
      //  props.setModalVisible(true)
        props.navigation.toggleDrawer();
      
      }} >
        <Image
        source={require('/Users/macbook/Reactnative/native/onbordingnew/src/component/images/Vector.png')}
        />
        {/* <Text style={{ color: 'white', }}> Right </Text> */}
      </TouchableOpacity>
    </View>
  );
};
 
const Profilemainpage=({ navigation })=> {

  const [modalVisible, setModalVisible] = React.useState(false);
  const [edit,setedit]=React.useState(false)
    
  const [items, setItems] = React.useState([
    { name: 'TURQUOISE', code: '#1abc9c' },
    { name: 'EMERALD', code: '#2ecc71' },
    { name: 'PETER RIVER', code: '#3498db' },
    { name: 'AMETHYST', code: '#9b59b6' },
    { name: 'WET ASPHALT', code: '#34495e' },
    { name: 'GREEN SEA', code: '#16a085' },
    { name: 'NEPHRITIS', code: '#27ae60' },
    { name: 'BELIZE HOLE', code: '#2980b9' },
    { name: 'WISTERIA', code: '#8e44ad' },
    { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
    { name: 'SUN FLOWER', code: '#f1c40f' },
    { name: 'CARROT', code: '#e67e22' },
    { name: 'ALIZARIN', code: '#e74c3c' },
    { name: 'CLOUDS', code: '#ecf0f1' },
    { name: 'CONCRETE', code: '#95a5a6' },
    { name: 'ORANGE', code: '#f39c12' },
    { name: 'PUMPKIN', code: '#d35400' },
    { name: 'POMEGRANATE', code: '#c0392b' },
    { name: 'SILVER', code: '#bdc3c7' },
    { name: 'ASBESTOS', code: '#7f8c8d' },
  ]);

  

    return (
        <SafeAreaView style={{flex:1}}> 
      <View style={{flex:1}} >



       
              <Modal
        animationType="slide"
        transparent={true}
        style={{}}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View  style={{marginTop:hp('16%'), alignSelf:'center' ,borderWidth:1,width:wp('100%'), backgroundColor:'#FFFFFF' }} >

        <Pressable

onPress={() => {setModalVisible(!modalVisible)
           setedit(false);
          }
}
>
<Image
   style={{width:30,height:30,marginRight:wp('5%'),alignSelf:'flex-end'}}
source={require('/Users/macbook/Reactnative/native/onbordingnew/src/component/images/cross.png')}
/>
</Pressable>

          <View  style={{}} >
            <Pressable>
            <Image
            style={{alignSelf:'center',tintColor:'#C4C4C4',width:65,marginTop:12,height:65}}
            source={require('/Users/macbook/Reactnative/native/onbordingnew/src/component/images/Vector.png')}
            />


            </Pressable>
           
        <View style={{flexDirection:'row'}}> 
        <Text style={{fontSize:20,alignSelf:'center',marginTop:6,marginLeft:100}}>  My Profile</Text>  
           <Pressable onPress={()=>{setedit(true)}} >  
           <Image
            style={{alignContent:'flex-end',marginLeft:60,marginTop:6}}
        source={require('/Users/macbook/Reactnative/native/onbordingnew/src/component/images/edit.png')}
        />
       
               </Pressable>
          
            </View>

             <View  style={{flexDirection:'row',marginTop:18,marginRight:20}}   > 

             <Text style={{fontSize:16,marginLeft:15}}>Name   :</Text> 
             <TextInput
             editable={edit}
               style={{borderBottomColor:'#C4C4C4',borderBottomWidth:1,fontSize:16,height:22,marginLeft:5,marginRight:wp('5%'),width:wp('62%')}}
             >   </TextInput>
               
               
                </View>
                <View style={{flexDirection:'row',marginTop:15}}> 
                <Text style={{fontSize:16,marginLeft:15}} >Mo. No : </Text>
                <TextInput  editable={edit} style={{height:22,width:wp('62%'),borderBottomColor:'#C4C4C4',borderBottomWidth:1,marginLeft:5}}>   </TextInput>


                </View >

                <View style={{flexDirection:'row',marginTop:10,marginRight:0}}>
                  <Text  style={{fontSize:16,marginLeft:15,}}>Email    :</Text>

                  <TextInput
                  editable={edit}
                  style={{height:22,borderBottomWidth:1,borderBottomColor:'#C4C4C4',fontSize:16,marginRight:20,width:wp('63%'),marginLeft:5}}
                  >   </TextInput>
                  




                </View>

                <TextInput  editable={edit} style={{marginLeft:15,borderBottomWidth:1,borderBottomColor:'#C4C4C4',height:35,marginRight:20}}>   </TextInput>

                       <View style={{flexDirection:'row',borderWidth:1,borderColor:'#C4C4C4',marginLeft:23,marginTop:24,height:45,marginRight:20,marginBottom:10}}> 
          <Image style={{marginLeft:10,marginTop:10,}} source={require('/Users/macbook/Reactnative/native/onbordingnew/src/component/images/starouter.png')}>   
          
            
            
               </Image>

                  <Text    style={{marginLeft:10,marginTop:10,fontSize:16}} > Setting  </Text>
                           
                           

                       </View>

                       <View style={{flexDirection:'row',borderWidth:1,borderColor:'#C4C4C4',marginLeft:23,marginTop:0,height:45,marginRight:20,marginBottom:10}}> 
          <Image style={{marginLeft:10,marginTop:10,}} source={require('/Users/macbook/Reactnative/native/onbordingnew/src/component/images/notify.png')}>   
          
            
            
               </Image>

                  <Text    style={{marginLeft:10,marginTop:10,fontSize:16}} > Notification  </Text>
                           
                           

                       </View>

                       <View style={{flexDirection:'row',borderWidth:1,borderColor:'#C4C4C4',marginLeft:23,marginTop:0,height:45,marginRight:20}}> 
          <Image style={{marginLeft:10,marginTop:10,}} source={require('/Users/macbook/Reactnative/native/onbordingnew/src/component/images/security.png')}>   
          
            
            
               </Image>

                  <Text    style={{marginLeft:10,marginTop:10,fontSize:16}} > Privacy & Security  </Text>
                           
                           

                       </View>

                       <TouchableOpacity
                       style={{backgroundColor:'#7037CE',width:167,height:45,alignSelf:'center',marginTop:68,borderRadius:10}}
                       > 
                      <Text style={{fontSize:18,alignSelf:'center',marginTop:10,color:'#FFFFFF'}} >LOG OUT</Text>

                       </TouchableOpacity>

            
                     </View>
        </View>


      </Modal>

      
        <NavigationBar 
        
        componentLeft     = { () =>  <ComponentLeft />   }
        componentCenter   = { () =>  <ComponentCenter /> }
        componentRight    = { () =>  <ComponentRight setModalVisible={setModalVisible}  navigation={navigation}/>  }
        navigationBarStyle= {{ backgroundColor: '#5D1198',height:80 }}
        statusBarStyle    = {{ barStyle: 'light-content', backgroundColor: '#5D1198' }}
      />

          
           
      
    
    {/* <View  style={{marginTop:80,marginLeft:10,borderRadius:7,borderColor:'#696969',borderWidth:1,width:120,height:50,flexDirection:'row'}} > 
     
      <Image
         style={{width:25,height:25,padding:5,marginLeft:20,marginTop:10}}
         source={require('/Users/macbook/Reactnative/native/onbordingnew/src/component/images/last.png')}
      
      />
       <Text style={{marginLeft:10,width:37,height:27,marginTop:10,fontSize:18}}>Test</Text>
     
    </View> */}
       <View style={{flex:0.5,height:100}}>  
         
       <ImageSlider style={{marginTop:0,}} images={[
    'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg',
    'https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_960_720.jpg',
    'https://cdn.pixabay.com/photo/2018/04/16/16/16/sunset-3325080_960_720.jpg'
  ]}/>
     
         
         
            </View>
       
            <FlatGrid
      itemDimension={130}
      data={items}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCode}>{item.code}</Text>
        </View>
      )}
/>

       
         
     

      </View>

      </SafeAreaView>
    );
  

    


}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});
export default Profilemainpage
