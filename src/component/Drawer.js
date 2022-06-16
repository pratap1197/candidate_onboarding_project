
import 'react-native-gesture-handler';
import Personaldetails from './personaldetails';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from './Dashboard';
import Profilemainpage from './Profilemainpage';
import Userimage from './Userimage';
import CustomSidebarMenu from './CustomSidebarMenu';
import Navigationbar from './Navigationbar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Drawer = createDrawerNavigator();
import {
    AppRegistry,
    StyleSheet,
    Text,Image,
    View, 
    TextInput,
    TouchableOpacity,
    Alert, Modal,
    Pressable,
    Button
  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';




  const Homescreen1=({ navigation })=>{
      return(
          <>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >   
              

              <Text style={{fontSize:30}}>   this is homescreen</Text>
              <Text>    hi india is my country</Text>
              <Button  onPress={() => {navigation.navigate('Profilescreen1')
            
            navigation.openDrawer()

            }} title="Go to notifications" />

          </View>
          </>
      )
  }



  const Profilescreen1=({ navigation })=>{

       return(
           <>
           <SafeAreaView style={{flexx:1}}> 
           <Navigationbar/>

             <Text style={{marginTop:100}}>  this is profilescreen</Text>  
             <Button onPress={() => navigation.goBack()} title="Go " />

           </SafeAreaView>
           </>
       )
  }
  
 const  Drawer1=({ navigation })=> {


  const NavigationDrawerStructure = (props) => {
    //Structure for the navigatin Drawer
    const toggleDrawer = () => {
      //Props to open/close the drawer
      props.navigationProps.toggleDrawer();
    };

    
  }  
  return (
    
    
    
     
     <Drawer.Navigator   
            
     drawerPosition="right"
     

     screenOptions={{
       
      headerShown: false,
      drawerPosition: 'right',
      
    
      
    }}
  
     
     drawerContentOptions={{
       
    }}
    // Here we are setting our custom sidebar menu 
    useLegacyImplementation
    drawerContent={(props) => <CustomSidebarMenu {...props} />}
    

    
    >

        
        

       <Drawer.Screen  name="Profilemainpage" component={Profilemainpage }/>
       <Drawer.Screen name="Profilescreen1" component={Profilescreen1  }/>
       
     </Drawer.Navigator>
     


     

    
      
    
  )
}
export default Drawer1;
