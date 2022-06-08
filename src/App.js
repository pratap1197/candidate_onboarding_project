import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './component/Homescreen';
import ProfileScreen from './component/Profilescreen';
import Personaldetails from './component/personaldetails';
import Contact from './component/contact';
import { AsyncStorage } from 'react-native';
import Education from './component/Education';
import Projectdetails from './component/Projectdetails';
import BackdropProvider from '@mgcrea/react-native-backdrop-provider';
import Employment from './component/Employment';
  export const Appcontext=React.createContext();
const Stack = createNativeStackNavigator();

function App() {
  const [mobile,setmobile]=React.useState("")

  console.log("mobile in appp js"+mobile)
   const sendotp=()=>{

    

    var dataToSend = {'mobile':mobile};
    //making data to send on server
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

   

  const response = fetch('https://beta.garageworks.in/customerapi/sendotp',{
    method: 'POST',
    headers:{
      'Content-Type': 
      'application/x-www-form-urlencoded;charset=UTF-8',
    "Access-Control-Allow-Origin":"*"
  
     },
     body:(formBody)
 })
 //console.log("respose is here"+JSON.str
 .then((response) => response.json())
 //If response is in json then in success
 .then(async(responseJson) => {
  // alert(JSON.stringify(responseJson));
   console.log(responseJson);
   console.log(responseJson.result.data.token)
   try {
    

      await AsyncStorage.setItem("token",responseJson.result.data.token)
     await  AsyncStorage.setItem("customer_id",responseJson.result.data.customer_id.toString())
   await  AsyncStorage.setItem("mobile",responseJson.result.data.mobile)
   LogBox.ignoreLogs(['Warning: Async Storage has been extracted from react-native core']);

  } catch (error) {
    console.log(error)
  }

 })
 //If response is not in json then in error
 .catch((error) => {
   alert(JSON.stringify(error));
   console.error(error);
 });
  



   }
   componentDidMount=()=>{
    LogBox.ignoreLogs(['Animated: `useNativeDriver`','componentWillReceiveProps']);    
  }
 

  return (
    <>
    <Appcontext.Provider value={{mobile,setmobile,sendotp}}>
    <BackdropProvider>  
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="Personaldetails" component={Personaldetails} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Education" component={Education} />
        <Stack.Screen name="Projectdetails" component={ Projectdetails }  />
        <Stack.Screen name="Employment" component={ Employment }  />


      </Stack.Navigator>
    </NavigationContainer>
    </BackdropProvider>
    </Appcontext.Provider>
     </>
    
  );
}

export default App;
