import * as React from 'react';
import { useState } from 'react';
import { Form, TextValidator } from 'react-native-validator-form';
import axios from 'axios';
import { AsyncStorage, Keyboard } from 'react-native';
import { LogBox } from 'react-native';
import { Appcontext } from '../App';
import DatePicker from 'react-native-datepicker';
import { Platform } from 'react-native';

import RadioButtonRN from 'radio-buttons-react-native';
//import Icon from 'react-native-vector-icons';

import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';



import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { Button, View, Text, TextInput,Image,TouchableOpacity, } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import { Card, makeStyles, Icon } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { useValidation } from 'react-native-form-validator';
import { ValidationRules } from 'react-native-validator-form';

import { createIconSetFromFontello } from 'react-native-vector-icons';
const Contact = ({ navigation }) => {
  const [userError, setUserError] = React.useState(false);
  const [usermobileerror,setusermobileerror]=React.useState(false);


  
  const [alternate_mobile_number,setalternate_mobile_number]=React.useState(0);
  const [alternate_mobile_numbererror,setalternate_mobile_numbererror]=React.useState('')
  const [emailerror,setemailerror]=React.useState();
  const [isSelected, setSelection] = React.useState(false);
  const [currentad,setcurrentad]=React.useState('');
  const [paramad,setparamad]=React.useState("") 
  
  const [email,setemail]=React.useState(""); 
    const [buttoncolor,setbuttoncolor]=useState('#696969');
    const[disabled,setdisabled]=useState(true)
const handle=()=>{
 // navigation.navigate('Education');

  validate({
    email: {  required: true,email:true},
    alternate_mobile_number: { required: true,numbers:true,minlength:10, maxlength:10 },
    gender: {required: true },
    currentad: { required:true },
    paramad:{required:true},
    
  //  role:{require:true}
    
  });

  if(isFormValid()===true)
  {
    navigation.navigate('Education')

  }

}

const { validate, isFieldInError, getErrorsInField, getErrorMessages,isFormValid } =
  useValidation({
    state: { email, alternate_mobile_number, currentad, paramad },
  });
    
    
      
    return (
        
    <>
    <View style={page.backcontainer}>  

    

     </View >
      <Form
        onSubmit={handle}

       >
     <View style={{marginTop:15,borderRadius:10}}>
     <Card style={page.cardstyle}>
        <Text style={{marginLeft:wp('5%'),fontSize:16,marginTop:24,marginBottom:15,color:'#000000',height:26, }}>Contact Information</Text>
          
          <Text  style={{height:22,width:120,fontSize:14,marginLeft:wp('5%'),top:0,color:'#060606'}} >Email * </Text>
        <View style={{}} >
            
            <TextInput
            error={userError}
            style={{left:wp('5%'),marginTop:wp('0.6%'),height:hp('4%'),width:wp('58%'),borderColor:'#808080',borderRadius:10,borderWidth:1,paddingLeft:15}}
             value={email}
             keyboardType="email-address"
            placeholder="abc@gnail.com"
             onChangeText={(newtext)=>{  
               setemail(newtext);
               validate({email:{ required: true,email:true}})

              const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/; 
              if (reg.test(email) === false ) {
                  console.log(email+" in false condition")
                  setUserError(true)
                  setemailerror("please enter valid email")
                  
                 // alert("it is not valid email")
                
              } else {
                 console.log(email+"in true condition")
                 setUserError(false)
                 setemailerror("")
                
              }
              console.log(userError)
        
                

             }

            }
            >

            </TextInput  >
            {isFieldInError('email') &&
        getErrorsInField('email').map(errorMessage => (
          <Text style={{color:'#ff0000',marginTop:5,marginLeft:wp('5%'),width:210}} >{errorMessage}</Text>
        ))}


    



                   </View>
                   {/* <Text   style={{marginLeft:15,marginTop:5,color:'#ff0000',fontSize:10,display:userError ? 'flex' : 'none'}}>  { emailerror}</Text> */}

                 
                   <Text
                   
                   style={{width:142,height:22,marginLeft:wp('5%'),marginTop:hp('3%'),fontSize:14}}
                   
                   >Alternate mobile no *</Text>

<TextInput
            error={usermobileerror}
            style={{left:wp('5%'),marginTop:wp('0.6%'),height:hp('4%'),width:wp('58%'),borderColor:'#808080',borderRadius:10,borderWidth:1,paddingLeft:15}}
             value={alternate_mobile_number}
             
            placeholder="9022923275"
             onChangeText={(newtext)=>{  
                 setalternate_mobile_number(newtext);
                 validate({alternate_mobile_number:{numbers:true,required:true}})
               console.log(newtext)
               console.log(alternate_mobile_number)

              const reg = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i; 
              if (reg.test(newtext) === false  || newtext.length < 10   || newtext.length >10  ) {
                  console.log(alternate_mobile_number+" in false condition")
                  
                  setalternate_mobile_numbererror("please enter valid mobile number")
                  setusermobileerror(true)
                 // alert("it is not valid email")
                
              } else {
                 console.log(newtext+"in true condition")
                  setusermobileerror(false)
                 setalternate_mobile_numbererror("")
                
              }
              console.log(userError)
        
              validate({newtext:{numbers:true,required:true,minlength:10,maxlength:10}})

             }

            }
            >

            </TextInput  >
            {isFieldInError('alternate_mobile_number') &&
        getErrorsInField('alternate_mobile_number').map(errorMessage => (
          <Text style={{color:'#ff0000',marginTop:5,marginLeft:wp('5%'),width:210}} >{errorMessage}</Text>
        ))}
            {/* <Text  style={{marginLeft:15,marginTop:5,color:'#ff0000',display:usermobileerror ? 'flex': 'none' }} > {alternate_mobile_numbererror}  </Text> */}

       <Text
       style={{width:118,height:22,marginLeft:wp('5%'),marginTop:hp('3%'),fontSize:14}}
       >Current address *</Text>

       <TextInput
       multiline={true}
       placeholder='   prakash floor mills, rahatani phata kalewadi pune'
       value={currentad}
       onChangeText={(newtext)=>{
           setcurrentad(newtext)
           validate({currentad:{required:true}})
       }}
       style={{width:wp('58%'),height:hp('8%'),marginLeft:wp('5%'),marginTop:wp('0.6%'),borderRadius:10,borderWidth:1,borderColor:'#808080',paddingLeft:15}}
       >

       </TextInput>
       {isFieldInError('currentad') &&
        getErrorsInField('currentad').map(errorMessage => (
          <Text style={{color:'#ff0000',marginTop:5,marginLeft:wp('5%'),}} >{errorMessage}</Text>
        ))}
       <View style={page.checkboxContainer}>
       

        <CheckBox
          // {Platform.OS===ios ? boxType={'square'} :   }
          value={isSelected}
          // boxType={'square'}

          onValueChange={(value)=>{
             console.log("current address is"+currentad)
            setSelection(value)
            if(isSelected===false)
            {
                setparamad(currentad)
            }else{
                setparamad(paramad)
            }
            console.log(value)
          }
        }
          style={page.checkbox}
        />
        <Text style={{width:135,height:19,fontSize:12,marginLeft:10,color:'#7037CE',marginTop:5}}>same address as above</Text>
      </View>
      <Text
      style={{marginLeft:wp('5%'),width:141,height:22,fontSize:14,marginTop:hp('2%')}}
      
      >Permanent address *</Text>

       <TextInput
       multiline={true}
            value={paramad}
              placeholder='prakash floor mills, rahatani phata kalewadi pune'
              onChangeText={(newtext)=>{
                  setparamad(newtext)
                console.log(" param address textfield onchange "+alternate_mobile_number) 
                validate({paramad:{required:true}})

              }}

       style={{width:wp('58%'),height:hp('8%'),marginLeft:wp('5%'),marginTop:wp('0.6%'),borderRadius:10,borderWidth:1,borderColor:'#808080',paddingLeft:15}}
       
       >


       </TextInput>
       {isFieldInError('paramad') &&
        getErrorsInField('paramad').map(errorMessage => (
          <Text style={{color:'#ff0000',marginTop:5,marginLeft:wp('5%'),}} >{errorMessage}</Text>
        ))}

        
<View style={{marginTop:40,flexDirection:'row'}} >   

<TouchableOpacity
     style={{marginLeft:wp('5%'),width:122,height:33,backgroundColor:'#808080',borderRadius:10}}
   
   >
     <Text style={{fontSize:15,width:64,height:26,alignContent:'center',alignSelf:'center',marginTop:5}}>Previous</Text>
   </TouchableOpacity>
   <TouchableOpacity
     style={{marginLeft:25,width:122,height:33,backgroundColor:isFormValid()? '#7037CE' : '#808080',borderRadius:10}}
   onPress={handle}
   >
     <Text style={{fontSize:15,width:64,height:26,alignContent:'center',alignSelf:'center',marginTop:5,textAlign:'center'}}>Next</Text>
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
                                        flexDirection:'column',

                                    borderRadius:10,
                                    textAlign:'center',
                                    height:50,
                                   borderWidth:1,
                                
                                   
                                   
                                   marginLeft:29,
                                   marginRight:29,
                                   marginBottom:9

                                    },
                                    cardstyle:{
                                     
                                     flex:1,


                                     backgroundColor: 'transparent',
                                    borderRadius:15,
                                    marginTop:-212,
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
                                      height: hp('55%'),
                                        
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

                                                     },
                                                     datePickerStyle: {
                                                      width: 200,
                                                      marginTop: 10,
                                                    },
                                                    checkboxContainer: {
                                                        flexDirection: "row",
                                                      
                                                        marginTop:hp('2%'),
                                                      },
                                                      checkbox: {
                                                        marginLeft:wp('5%'),
                                                        
                                                        
                                                        transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }]
                                                        
                                                        
                                                      },
                                                    
                                                                        


    });

  export default Contact