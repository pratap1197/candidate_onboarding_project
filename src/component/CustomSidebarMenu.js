import * as React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  ScrollView,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Button,

} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
    AppRegistry,



    TextInput,
    
    
    Pressable
  } from 'react-native';
  import { useSafeArea } from 'react-native-safe-area-context';
  import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};



 
const CustomSidebarMenu = (props) => {
const [state,setState]=React.useState({      filepath: {
  data: '',
  uri: ''
},
fileData: '',
fileUri: ''
})
const [image1,setimage1 ]=React.useState("/Users/macbook/Reactnative/native/onbordingnew/src/component/images/Vector.png")
  
  const [edit,setedit]=React.useState(false)
  const insets = useSafeArea();


//var im=  '/Users/macbook/Reactnative/native/onbordingnew/src/component/images/Vector.png'





  return (
    <SafeAreaView style={{flex: 1,  }}>
       <ScrollView>


       <Pressable

onPress={() => {   
          props.navigation.toggleDrawer();
            setedit(false);
          }
}
>
<Image
   style={{width:30,height:30,marginRight:wp('5%'),alignSelf:'flex-end'}}
source={require('/Users/macbook/Reactnative/native/onbordingnew/src/component/images/cross.png')}
/>
</Pressable>
              <View  style={{marginTop:hp('1%'), alignSelf:'center' , }} >

  <View  style={{}} >
    <Pressable>
      
    <Image
    style={{alignSelf:'center',tintColor:'#C4C4C4',width:65,marginTop:12,height:65}}
    source={require('/Users/macbook/Reactnative/native/onbordingnew/src/component/images/Vector.png')}
    />

        
    </Pressable>

    <Pressable onPress={()=>{
        

    }} style={{position:'absolute',marginTop:60}}>
    <Image source={require('/Users/macbook/Reactnative/native/onbordingnew/src/component/images/camera.png')}  
    
    style={{width:20, height:20,marginLeft:145,marginTop:0,position:'absolute'}}
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

     <Text style={{fontSize:16,marginLeft:40}}>Name   :</Text> 
     <TextInput
     editable={edit}
       style={{borderBottomColor:'#C4C4C4',borderBottomWidth:1,fontSize:16,height:22,marginLeft:5,marginRight:wp('5%'),width:wp('30%')}}
     >   </TextInput>


        </View>
        <View style={{flexDirection:'row',marginTop:10}}> 
        <Text style={{fontSize:16,marginLeft:40}} >Mo. No : </Text>
        <TextInput  editable={edit} style={{height:22,width:wp('30%'),borderBottomColor:'#C4C4C4',borderBottomWidth:1,marginLeft:5}}>   </TextInput>


        </View >

        <View style={{flexDirection:'row',marginTop:10,marginRight:0}}>
          <Text  style={{fontSize:16,marginLeft:40,}}>Email    :</Text>

          <TextInput
          editable={edit}
          style={{height:22,borderBottomWidth:1,borderBottomColor:'#C4C4C4',fontSize:16,marginRight:20,width:wp('30%'),marginLeft:5}}
          >   </TextInput>
          




        </View>

        <TextInput  editable={edit} style={{marginLeft:15,borderBottomWidth:1,borderBottomColor:'#C4C4C4',height:35,marginRight:20}}>   </TextInput>

           
            
             

               <DrawerContentScrollView style={{marginTop:0}} {...props}>


               <View style={{flexDirection:'row',borderWidth:1,borderColor:'#C4C4C4',marginLeft:10,marginTop:24,height:45,marginRight:10,marginBottom:10}}> 
  <Image style={{marginLeft:10,marginTop:10,}} source={require('/Users/macbook/Reactnative/native/onbordingnew/src/component/images/starouter.png')}>   
  
    
    
       </Image>

          <Text    style={{marginLeft:10,marginTop:10,fontSize:16}} > Setting  </Text>
                   
                   

               </View>



               <View style={{flexDirection:'row',borderWidth:1,borderColor:'#C4C4C4',marginLeft:10,marginTop:0,height:45,marginRight:10,marginBottom:10}}> 
  <Image style={{marginLeft:10,marginTop:10,}} source={require('/Users/macbook/Reactnative/native/onbordingnew/src/component/images/notify.png')}>   
  
    
    
       </Image>

          <Text    style={{marginLeft:10,marginTop:10,fontSize:16}} > Notification  </Text>
                   
                   

               </View>


               <View style={{flexDirection:'row',borderWidth:1,borderColor:'#C4C4C4',marginLeft:10,marginTop:0,height:45,marginRight:10}}> 
  <Image style={{marginLeft:10,marginTop:10,}} source={require('/Users/macbook/Reactnative/native/onbordingnew/src/component/images/security.png')}>   
  
    
    
       </Image>

          <Text    style={{marginLeft:10,marginTop:10,fontSize:16,marginBottom:10}} > Privacy & Security  </Text>
                   
                   

               </View>



        <DrawerItemList {...props} />

       
      </DrawerContentScrollView>


               <TouchableOpacity
              onPress={()=>{props.navigation.navigate('Home')}}
               style={{backgroundColor:'#7037CE',width:167,height:45,alignSelf:'center',borderRadius:10}}
               > 
              <Text style={{fontSize:18,alignSelf:'center',marginTop:10,color:'#FFFFFF'}} >LOG OUT</Text>

               </TouchableOpacity>

    
             </View>
</View>

               

      </ScrollView>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 55,
    height: 55,
    borderRadius: 100 / 2,
    color:'black',
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  images: {
    width: 150,
    height: 150,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 3
  },

});
 
export default CustomSidebarMenu;