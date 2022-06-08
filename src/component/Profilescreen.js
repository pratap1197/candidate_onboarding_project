
import { Button, View, Text ,TextInput,Image,TouchableOpacity} from 'react-native';
import * as React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AsyncStorage } from 'react-native';
import { Appcontext } from '../App';

//import React, { useRef } from 'react'

import { Card, makeStyles } from 'react-native-elements';
import { StyleSheet } from 'react-native';
const ProfileScreen = ({ navigation}) => {
  const{ sendotp }= React.useContext(Appcontext)
  const[otp1, setotp1]=React.useState("");
  const[otp2, setotp2]=React.useState("");
  const[otp3, setotp3]=React.useState("");
  const[otp4, setotp4]=React.useState("");
  const[otp,setotp]=React.useState("");
  const ref_input1=React.useState();
  const ref_input2 = React.useRef();
const ref_input3 = React.useRef();
const ref_input4=React.useRef();
const ref_input5=React.useRef();
 var otpsample=0;


   const submitfun=async()=>{
     console.log("submit fun of varifyscreen")
    try {
      const token = await AsyncStorage.getItem('token');
      const customer_id=await AsyncStorage.getItem('customer_id');
      const mobile=await AsyncStorage.getItem('mobile');
      console.log("token "+token+" "+" customer_id"+ " "+customer_id+" "+ "mobile"+" "+ mobile+" otp is" + " "+ otp)
      
      var dataToSend = {'mobile':mobile,'token':token,'otp':otp,'customer_id':customer_id};
      //making data to send on server
      var formBody = [];
      for (var key in dataToSend) {
        var encodedKey = encodeURIComponent(key);
        var encodedValue = encodeURIComponent(dataToSend[key]);
        formBody.push(encodedKey + '=' + encodedValue);
      }
      formBody = formBody.join('&');
  
     

    const response = fetch('https://beta.garageworks.in/customerapi/verifyotp',{
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
     //alert(JSON.stringify(responseJson));
     console.log(responseJson);
    // console.log(responseJso)
    console.log(responseJson.status)
    if(responseJson.status===true)
    {
      navigation.navigate('Personaldetails')

    } 
     
  
   })
   //If response is not in json then in error
   .catch((error) => {
     alert(JSON.stringify(error));
     console.error(error);
   });
    







    } catch (error) {
      console.log(error)
    }
     

   }
      const resendfun=()=>{

             sendotp()
      

      }
     const handleKeyPress=({ nativeEvent: { key: keyValue } })=> {
        if (keyValue === 'Backspace') {
           // this.refs.ref_input3.focus()
            ref_input3.current.focus()
        }
    }



    return (    <>
      <View style={page.backcontainer}>  

      <Image
          style={{marginTop:75,marginLeft:113,marginRight:113,marginBottom:40,height:100,alignSelf:'center'}}
          source={require('/Users/macbook/Reactnative/native/onbordingnew/src/component/images/Df.png')}
        />
  
       </View>
       <View style={{marginTop:200,borderRadius:25}}>
       <Card style={page.cardstyle}>
          <Text style={{fontSize:16,marginTop:56,marginBottom:15,width:128,height:26,alignSelf:'center'}}>Verification Code</Text>
          <Text style={{fontSize:12,marginLeft:79,marginRight:79,alignContent:'center',justifyContent:'center',marginBottom:37,color:'#767474'}}>OTP has been sent to your mobile
number, Please verify
           </Text>
          <View style={page.otps}>  
              <TextInput
              textAlign='center'
              maxLength={1}
              style={page.mobileinput}
              autoFocus={true}
              returnKeyType="next"

              value={otp1}
               onChangeText={(newtext)=>{
                 
                
                setotp1(newtext)
                ref_input2.current.focus()
               
              }}
              ref={ref_input1}
              >
  
              </TextInput>
              <TextInput
              maxLength={1}
              style={page.mobileinput}
              textAlign='center'

              returnKeyType="next"
              onKeyPress={({nativeEvent:{key:keyValue}})=>{

                if(keyValue==='Backspace')
                {
                  ref_input1.current.focus();
                }
              }}
              value={otp2}
               onChangeText={(newtext)=>{
                 
                
                setotp2(newtext)
                ref_input3.current.focus()
              
              }}
              ref={ref_input2}

              >
  
              </TextInput>
              <TextInput
              maxLength={1}
               textAlign='center'
               onKeyPress={({ nativeEvent: { key: keyValue }})=>{
                if (keyValue === 'Backspace') {
                  // this.refs.ref_input3.focus()
                   ref_input2.current.focus()
               }
       

               }}
              style={page.mobileinput}
              returnKeyType="next"

              value={otp3}
              
               onChangeText={(newtext)=>{
                 
                
                
                setotp3(newtext)
                ref_input4.current.focus()
              }}
              ref={ref_input3}
              >
  
              </TextInput>
              <TextInput
              maxLength={1}
               textAlign='center'
               returnKeyType="next"

              style={{           borderRadius:10,
                height:50,
               borderWidth:1,
              width:40,
             borderColor:'#C4C4C4 ',
               
               marginLeft:20,
               marginRight:29,
               marginBottom:9
     }}
              
              value={otp4}
              onKeyPress={handleKeyPress}
               onChangeText={(newtext)=>{
                 
                
                setotp4(newtext)
                otpsample=otp1+otp2+otp3+newtext
                console.log("otp4  is "+newtext)
              console.log(" otp is "+otpsample)
              setotp(otpsample)
             
              

              }}
               ref={ref_input4}
              >
  
              </TextInput>
          </View>


           

          {console.log("otp is"+otp)}


          <View  style={page.container2}   >
             <TouchableOpacity
             

          
          color={"#fffaf0"}
          onPress={
            resendfun

          }
        >

<Text style={page.buttonText2}>{"Resend otp"}</Text>
        </TouchableOpacity>
  
                  </View>


             <View  style={page.container1}   >
             <TouchableOpacity
             

          
          color={"#000000"}
          onPress={
            submitfun

          }
        >

<Text style={page.buttonText}>{"Verify"}</Text>
        </TouchableOpacity>
  
                  </View>
               
          </Card>
  
          </View>
       
      
       </>
         
  
  );
  };

  const page=StyleSheet.create({
    container1:{
        backgroundColor:'#7037CE',
   flex:0,
   marginLeft:69,
   marginRight:69,
   marginTop:20,
   height:45,
   width:167,
   borderRadius:10,
   alignSelf:'center'
   

           },
           container2:{
            backgroundColor:'#FFFFFF',
       flex:0,
       marginLeft:69,
       marginRight:69,
       marginTop:20,
       height:45,
       width:167,
       borderRadius:10,
       alignSelf:'center'
       
    
               },
    
           mobileinput:{
               flexDirection:'row',

           borderRadius:10,
           height:50,
          borderWidth:1,
         width:40,
        borderColor:'#C4C4C4 ',
          
          marginLeft:20,
          marginRight:19,
          marginBottom:9

           },
           otps:{
            flexDirection:'row',
            alignItems:'center',
            alignSelf:'center',


           },
           cardstyle:{
            
            flex:1,
            paddingBottom: 200,
            backgroundColor: 'transparent',
           
           marginTop:-300,
            position:'absolute',
           
            alignSelf:'flex-end',
            
            
            

           },
           backcontainer:{
             position: 'absolute',

             top: 0,
             left: 0,
             right: 0,
             overflow: 'hidden',
             alignSelf: 'center',
             transform : [ { scaleX : 1/0.9} ],                                   
             borderBottomStartRadius :100,
             borderBottomEndRadius : 100,
             backgroundColor: '#4B2A82',
             height: hp('50%'),
               
               width: wp('100%')   // 80% of width device screen
               
         
                                                  },
                            tinyLogo:{
                              
                              marginTop:20,
                             padding:40,
                             
                             marginLeft:20,
                             marginRight:20,
                             alignContent:'center',
                             height:140
                              
                            },
                            buttonText:{
                              color:'#FFFFFF',
                              fontSize:16,
                              marginLeft:70,
                              marginRight:56,
                              marginTop:10,
                              marginBottom:8,

                              },   
                              buttonText2:{
                                color:'#7037CE',
                                fontSize:16,
                               marginLeft:40,
                                marginTop:10,
                                marginBottom:8,
  
                                }                      
                     



});

  
  export default ProfileScreen