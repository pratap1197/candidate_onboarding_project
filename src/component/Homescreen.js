import * as React from 'react';
import { useState } from 'react';
import { Form, TextValidator } from 'react-native-validator-form';
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { LogBox } from 'react-native';
import { Appcontext } from '../App';


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { Button, View, Text, TextInput,Image,TouchableOpacity } from 'react-native';
import { Card, makeStyles } from 'react-native-elements';
import { StyleSheet } from 'react-native';
const HomeScreen = ({ navigation }) => {
  const{ mobile,setmobile,sendotp }= React.useContext(Appcontext)

  //const {mobile}=React.useContext(Appcontext)
        const [buttoncolor,setbuttoncolor]=useState('#696969');
    const[disabled,setdisabled]=useState(true)
    const handle=async()=>{
    
     // var data={"mobile":'9022923275'}
      
      console.log("in submit method")
      navigation.navigate('Projectdetails')

       sendotp(navigation)
     console.log("after sendotp")
       
    
       //console.log(JSON.stringify(data1))
     
        //console.log(content)

    }
    
  
         

    
    const onchangemethod=(newtext)=>{
         console.log(newtext)
         var isvalid = mobilevalidate(newtext)
         console.log(isvalid);
         if(isvalid===true)
         {
           setmobile(mobile)
           setbuttoncolor("#7037CE")
           setdisabled(false)
           

         }
         else{
           setbuttoncolor('#696969')
           setdisabled(true)
         }
      if(newtext.length<10)
      {
       setmobile(newtext);

      }else if(newtext.length===10){
        setmobile(newtext);

      }
      else{
        setmobile(mobile);
      }
     
    }
   const  mobilevalidate=(text)=>{
      const reg = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
      if (reg.test(mobile) === false  || text.length<10) {
          console.log(mobile+" in false condition")
        return false;
      } else {
         console.log(mobile+"in true condition")
        return true;
      }
    }
  

    return (
        
    <>
    <View style={page.backcontainer}>  

    <Image
        style={{marginTop:100,marginBottom:40,height:97,alignSelf:'center',width:191}}
        source={require('/Users/macbook/Reactnative/native/onbordingnew/src/component/images/Df.png')}
      />

     </View >
      <Form
        onSubmit={handle}

       >
     <View style={{marginTop:250,borderRadius:25}}>
     <Card style={page.cardstyle}>
        <Text style={{fontSize:16,marginTop:56,marginBottom:15,color:'#000000',width:122,height:26,alignSelf:'center'}}>Enter Mobile No</Text>

        <View>
            <TextInput
            style={page.mobileinput}


            value={mobile}
             onChangeText={(newtext)=>{  onchangemethod(newtext)}

            }
            >

            </TextInput>
        </View>
        <Text style={{fontSize:12,color:'#767474',width:147,height:38,alignSelf:'center'}}>We will send you one time password (OTP)
         </Text>
           <View  style={{       backgroundColor:buttoncolor,
                                 flex:0,
                                 
                                
                                 marginTop:50,
                                 height:45,
                                 width:167,
                                 alignSelf:'center',
                                 
                                 
                                 borderRadius:10,
     }}>
           <TouchableOpacity
        
        disabled={disabled}
        
        onPress={handle
                 }
      >
                      <Text style={page.buttonText}>{"Log In"}</Text>
      </TouchableOpacity>

                </View>

        </Card>

        </View>
     
      </Form>
    
     </>
       


    );
};
    const page=StyleSheet.create({
                            //  container1:{
                            //      backgroundColor:buttoncolor,
                                 
                                 
                            // flex:0,
                            // marginLeft:69,
                            // marginRight:69,
                            // marginTop:20,
                            // height:45,
                            
                            // borderRadius:10,
                            
                            

                            //         },
                                    mobileinput:{
                                        

                                    borderRadius:10,
                                    textAlign:'center',
                                    height:43,
                                   borderWidth:2,
                                   marginBottom:9,
                                   width:246,
                                   alignSelf:'center',
                                   borderColor:'#9F9F9F'
                                   

                                    },
                                    cardstyle:{
                                     
                                     flex:1,


                                     backgroundColor: 'transparent',
                                    
                                    marginTop:0,
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
                                                       

                                                      padding:40,
                                                      
                                                      marginLeft:20,
                                                      marginRight:20,
                                                      alignContent:'center',
                                                      height:80
                                                       
                                                     },
                                                     buttonText:{
                                                     color:'#FFFFFF',
                                                     fontSize:16,
                                                     marginLeft:70,
                                                     marginRight:56,
                                                     marginTop:10,
                                                     marginBottom:8,
                                                     alignSelf:'center',
                                                     width:54,
                                                     height:29,

                                                     }                      


    });

  export default HomeScreen