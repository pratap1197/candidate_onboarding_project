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
import { NavigationBar } from 'navigationbar-react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

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
  

const  Navigationbar=({navigation})=> {

    const [modalVisible, setModalVisible] = React.useState(false);
    const [edit,setedit]=React.useState(false)
  
  return (
    <SafeAreaView style={{flex:1}}>
         <NavigationBar 
        
        componentLeft     = { () =>  <ComponentLeft />   }
        componentCenter   = { () =>  <ComponentCenter /> }
        componentRight    = { () =>  <ComponentRight   navigation={navigation}/>  }
        navigationBarStyle= {{ backgroundColor: '#5D1198',height:80 }}
        statusBarStyle    = {{ barStyle: 'light-content', backgroundColor: '#5D1198' }}
      />

        
        </SafeAreaView>
  )
}
export default Navigationbar;
