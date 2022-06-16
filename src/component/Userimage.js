import React from 'react'
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
const  Userimage=({navigation})=> {
  return (
    
     <Image
            style={{alignSelf:'center',tintColor:'#C4C4C4',width:45,marginTop:12,height:45}}
            source={require('/Users/macbook/Reactnative/native/onbordingnew/src/component/images/Vector.png')}
            />


    
  )
}
export default Userimage
