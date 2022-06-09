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
  
  const [adharno,setadharno]=React.useState('');
  const [adharnoerror,setadharnoerror]=React.useState('')
  const [firstname,setfirstname]=React.useState('');
  const [lastname,setlastname]=React.useState('');
  const [adhar,setadhar]=React.useState('');
  const [adharname,setadharname]=React.useState(''); 
  const [gender,setGender]=React.useState('Male')




  const { validate, isFieldInError, getErrorsInField, getErrorMessages,isFormValid } =
  useValidation({
    state: { firstname, lastname, gender, date,adharno,adharname },
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
          adharno:{required:true,minlength:12, maxlength:12},
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
        <Text style={{marginLeft:wp('5%'),fontSize:16,marginTop:24,marginRight:181,color:'#000000',height:26,width:128, }}>Personal details</Text>
          <View> 
          <Text  style={{height:22,fontSize:hp('1.6%'),marginLeft:wp('5%'),top:23,color:'#060606',}} >Candidate name * </Text>

              </View>
               <View style={{flexDirection:'row',marginTop:hp('3%'),}} >
            <View style={{flexDirection:'column'}}> 
            <TextInput
            style={{marginLeft:wp('5%'),height:hp('4%'),width:wp('33%'),borderColor:'#808080',borderRadius:10,borderWidth:1,paddingLeft:15}}
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
          <Text style={{color:'#ff0000',marginTop:5,marginLeft:wp('5%'),width:135,}} >{errorMessage}</Text>
        ))}

          
              
              
                 </View>
           

         <View style={{flexDirection:'column',marginLeft:wp('10%')}}>   
         <TextInput
            placeholder='   lastname'
            value={lastname}
            style={{width:wp('33%'),height:hp('4%'),borderColor:'#767474',borderRadius:10,borderWidth:1,paddingLeft:15}}
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
          <Text style={{marginLeft:wp('5%'),marginTop:hp('3%'),fontSize:hp('1.6%')}} >Gender * </Text>
               
        

          <View style={{ marginTop: hp('0.9%') ,flexDirection:'row',}}>
                <RadioForm
                  buttonColor={'gray'}
                  formHorizontal={true}
                  buttonSize={12}
                  radioStyle={{marginLeft:wp('5%')}}
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
          <Text style={{color:'#ff0000',marginLeft:wp('5%')}} >{errorMessage}</Text>
        ))}

              </View>
              <Text
              style={{marginTop:hp('3%'),marginLeft:wp('5%'),fontSize:hp('1.6%')}}
              >Date of Birth *</Text>
              <View style={{marginTop:0,}}>
                

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
            
              marginLeft: wp('5%'),
              borderRadius:10,
              paddingLeft:15,
              height:hp('4%'),
              marginTop:hp('0.9%')
              
            },

            dateIcon: {
              //display: 'none',
              
              left: wp('5%'),
              top: 0,
              marginLeft: 15,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
          
        />
         {isFieldInError('date') &&
        getErrorsInField('date').map(errorMessage => (
          <Text style={{color:'#ff0000',marginLeft:wp('5%')}} >{errorMessage}</Text>
        ))}

              {/* <DateTimePicker 
        value={ date }
        mode='default'
        display='default'
        onChange={ date => setState({ date }) } /> */}



              </View>

      <Text 
      
      style={{marginTop:hp('3%'),fontSize:hp('1.6%'),marginLeft:wp('5%')}}
      >Aadhar no *</Text>
        <TextInput
            error={usermobileerror}
            style={{left:wp('5%'),marginTop:hp('0.9%'),height:hp('4%'),width:wp('57%'),borderColor:'#808080',borderRadius:10,borderWidth:1,paddingLeft:15}}
             value={adharno}
             
            placeholder="101112131415"
             onChangeText={(newtext)=>{  
                 setadharno(newtext);
                 validate({adharno:{required:true}})
               console.log(newtext)
               console.log(adharno)

              const reg = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i; 
              if (reg.test(newtext) === false  || newtext.length < 12   || newtext.length >12  ) {
                  console.log(adharno+" in false condition")
                  
                  setadharnoerror("please enter valid adhar number")
                  setusermobileerror(true)
                 // alert("it is not valid email")
                
              } else {
                 console.log(newtext+"in true condition")
                  setusermobileerror(false)
                 setadharnoerror("")
                
              }
             // console.log(userError)
        
                

             }

            }
            >

            </TextInput  >
            {isFieldInError('adharno') &&
        getErrorsInField('adharno').map(errorMessage => (
          <Text style={{color:'#ff0000',marginLeft:wp('5%')}} >{errorMessage}</Text>
        ))}

            <Text  style={{marginLeft:wp('5%'),marginTop:5,color:'#ff0000',display:usermobileerror ? 'flex': 'none' }} > {adharnoerror}  </Text>


      <Text
      style={{marginLeft:wp('5%'),marginTop:hp('3%'),fontSize:hp('1.6%')}}
      
      >Name as per aadhaar *</Text>

    <TextInput
    value={adharname}
    onChangeText={(newtext)=>{
      
      setadharname(newtext)
      validate({adharname:{required:true}})
      
    }}
    placeholder='pratap bhimrao ekorge'
    style={{marginLeft:wp('5%'),marginTop:hp('0.9%'),width:wp('57%'),height:35,borderWidth:1,borderRadius:10,borderColor:'#808080',paddingLeft:15}}
    >


    </TextInput>
    {isFieldInError('adharname') &&
        getErrorsInField('adharname').map(errorMessage => (
          <Text style={{color:'#ff0000',marginLeft:wp('5%')}} >{errorMessage}</Text>
        ))}

              

              
              

    
    


           <View  style={{       backgroundColor:isFormValid() ? '#7037CE' : buttoncolor,
                                 flex:0,
                                 marginLeft:wp('5%'),
                               //  marginRight:69,
                                 marginTop:29,
                                 height:hp('5%'),
                                 
                                 borderRadius:10,
                                 width:wp('50%'),
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
                                                      width:wp('44%'),
                                                      marginTop: 0,
                                                      
                                                    },
                                                                        


    });

  export default Personaldetails