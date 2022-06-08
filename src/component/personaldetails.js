import * as React from 'react';
import { useState } from 'react';
import { Form, TextValidator } from 'react-native-validator-form';
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { LogBox } from 'react-native';
import { Appcontext } from '../App';
import DatePicker from 'react-native-datepicker';
import DateTimePicker from '@react-native-community/datetimepicker';

import RadioButtonRN from 'radio-buttons-react-native';
//import Icon from 'react-native-vector-icons';

import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';



import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { Button, View, Text, TextInput,Image,TouchableOpacity } from 'react-native';
import { Card, makeStyles, Icon } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { useValidation } from 'react-native-form-validator';
import { ValidationRules } from 'react-native-validator-form';

import { createIconSetFromFontello } from 'react-native-vector-icons';
const Personaldetails = ({ navigation }) => {
  const [date, setDate] = React.useState(new Date);
  const [usermobileerror,setusermobileerror]=React.useState(false);
  const [isvalid, setisvalid]=React.useState(false);

   const [state,setState]=React.useState(new Date())
  
  const [altermobile,setaltermobile]=React.useState('');
  const [altermobileerror,setaltermobileerror]=React.useState('')
  const [firstname,setfirstname]=React.useState('');
  const [lastname,setlastname]=React.useState('');
  const [adhar,setadhar]=React.useState('');
  const [adharname,setadharname]=React.useState(''); 
  const [gender,setGender]=React.useState('Male')




  const { validate, isFieldInError, getErrorsInField, getErrorMessages,isFormValid } =
  useValidation({
    state: { firstname, lastname, gender, date,altermobile,adharname },
  });

  const radioProps = [
    { label: 'Male', value: 'Male' },
    {label: 'Female', value: 'Female' },
    {label:'Other',value:'Other'}
  ];
      const [buttoncolor,setbuttoncolor]=useState('#696969');
    //const[disabled,setdisabled]=useState(true)
    const [checked, setChecked] = React.useState('first');
    const data = [
      {
        label: 'Male'
       },
       {
        label: 'Female'
       },
       {
         label:'Other'
       }
      ];

      const handle=()=>{

        validate({
          firstname: {  required: true},
          lastname: { required: true },
          gender: {required: true },
          date: { date: 'YYYY-MM-DD' },
          altermobile:{required:true,minlength:12, maxlength:12},
          adharname:{required:true }
        //  role:{require:true}
          
        });

        if(isFormValid()===true)
        {
          navigation.navigate('Contact')

        }
       

      } 



      
    return (
        
    <>
    <View style={page.backcontainer}>  

    

     </View >
      <Form
      onSubmit={handle}
        

       >
     <View style={{marginTop:50,borderRadius:10}}>
     <Card style={page.cardstyle}>
        <Text style={{marginLeft:15,fontSize:16,marginTop:24,marginRight:181,color:'#000000',height:26,width:128, }}>Personal details</Text>
          
          <Text  style={{height:22,width:120,fontSize:14,left:15,top:23,color:'#060606',marginBottom:20}} >Candidate name * </Text>
        <View style={{flexDirection:'row',marginTop:0,}} >
            <View style={{flexDirection:'column'}}> 
            <TextInput
            style={{left:15,marginTop:5,height:35,width:135,borderColor:'#808080',borderRadius:10,borderWidth:1}}
             value={firstname}
            placeholder="    firstname"
             onChangeText={(newtext)=>{
               
              setfirstname(newtext)
              validate({firstname:{required:true}})
            }

            }
            >

            </TextInput  >
            {isFieldInError('firstname') &&
        getErrorsInField('firstname').map(errorMessage => (
          <Text style={{color:'#ff0000',marginTop:5,marginLeft:15,width:135,}} >{errorMessage}</Text>
        ))}

          
              
              
                 </View>
           

         <View style={{flexDirection:'column',marginLeft:50}}>   
         <TextInput
            placeholder='   lastname'
            value={lastname}
            style={{width:135,height:35,borderColor:'#767474',borderRadius:10,borderWidth:1,marginTop:5}}
           onChangeText={(newtext)=>{setlastname(newtext)
            validate({lastname:{required:true}})
          }}
            >  
            
            </TextInput>
           
            {isFieldInError('lastname') &&
        getErrorsInField('lastname').map(errorMessage => (
          <Text style={{color:'#ff0000',marginTop:5,width:135}} >{errorMessage}</Text>
        ))}

           
               </View>

            
           

        </View>

        <View style={{flexDirection:'row'}}>   
       


        </View>
          <Text style={{left:14,marginTop:20}} > Gender * </Text>
               
        

          <View style={{ marginTop: 10 ,flexDirection:'row',marginBottom:20}}>
                <RadioForm
                  buttonColor={'gray'}
                  formHorizontal={true}
                  buttonSize={12}
                  radioStyle={{paddingTop:10,marginLeft:15}}
                  selectedButtonColor="#000000"
                  radio_props={radioProps}
                  initial={0}
                  
                  animation={false}
                  onPress={(value) =>{
                    console.log(value)
                    setGender(value)}}
                />
                 {isFieldInError('gender') &&
        getErrorsInField('gender').map(errorMessage => (
          <Text style={{color:'#ff0000'}} >{errorMessage}</Text>
        ))}

              </View>
              <Text
              style={{marginTop:10,marginLeft:15,marginRight:213,width:100,height:22,fontSize:14}}
              > Date of Birth *</Text>
              <View style={{marginTop:5,marginLeft:0}}>
                

                 <DatePicker
                
          style={page.datePickerStyle}
          date={date} // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-1900"
          maxDate="01-01-2019"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          
          
          customStyles={{

            dateInput: {
              marginLeft: 15,
              borderRadius:10
            },

            dateIcon: {
              //display: 'none',
              
              left: 15,
              top: 0,
              marginLeft: 0,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
          
        />
         {isFieldInError('date') &&
        getErrorsInField('date').map(errorMessage => (
          <Text style={{color:'#ff0000'}} >{errorMessage}</Text>
        ))}

              {/* <DateTimePicker 
        value={ date }
        mode='default'
        display='default'
        onChange={ date => setState({ date }) } /> */}



              </View>

      <Text 
      
      style={{marginTop:25,fontSize:14}}
      >     Aadhar no *</Text>
        <TextInput
            error={usermobileerror}
            style={{left:15,marginTop:5,height:35,width:226,borderColor:'#808080',borderRadius:10,borderWidth:1}}
             value={altermobile}
             
            placeholder="101112131415"
             onChangeText={(newtext)=>{  
                 setaltermobile(newtext);
                 validate({altermobile:{required:true}})
               console.log(newtext)
               console.log(altermobile)

              const reg = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i; 
              if (reg.test(newtext) === false  || newtext.length < 12   || newtext.length >12  ) {
                  console.log(altermobile+" in false condition")
                  
                  setaltermobileerror("please enter valid mobile number")
                  setusermobileerror(true)
                 // alert("it is not valid email")
                
              } else {
                 console.log(newtext+"in true condition")
                  setusermobileerror(false)
                 setaltermobileerror("")
                
              }
             // console.log(userError)
        
                

             }

            }
            >

            </TextInput  >
            {isFieldInError('altermobile') &&
        getErrorsInField('altermobile').map(errorMessage => (
          <Text style={{color:'#ff0000',marginLeft:15}} >{errorMessage}</Text>
        ))}

            <Text  style={{marginLeft:15,marginTop:5,color:'#ff0000',display:usermobileerror ? 'flex': 'none' }} > {altermobileerror}  </Text>


      <Text
      style={{marginLeft:15,marginTop:18,fontSize:14}}
      
      >   Name as per aadhaar *</Text>

    <TextInput
    value={adharname}
    onChangeText={(newtext)=>{
      
      setadharname(newtext)
      validate({adharname:{required:true}})
      
    }}
    placeholder='pratap bhimrao ekorge'
    style={{marginLeft:15,marginTop:5,width:226,height:35,borderWidth:1,borderRadius:10,borderColor:'#808080'}}
    >


    </TextInput>
    {isFieldInError('adharname') &&
        getErrorsInField('adharname').map(errorMessage => (
          <Text style={{color:'#ff0000',marginLeft:15}} >{errorMessage}</Text>
        ))}

              

              
              

    
    


           <View  style={{       backgroundColor:isFormValid() ? '#7037CE' : buttoncolor,
                                 flex:0,
                                 marginLeft:69,
                                 marginRight:69,
                                 marginTop:29,
                                 height:45,
                                 
                                 borderRadius:10,
                                 width:167,
                                 alignSelf:'center'
                                 
     }}>
           <TouchableOpacity
        
       // disabled={disabled}
       onPress={handle}
        
      >
                      <Text style={page.buttonText}>{"Next"}</Text>
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
                                                                        


    });

  export default Personaldetails