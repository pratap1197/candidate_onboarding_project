import * as React from 'react';
import { Button, View, Text ,TextInput,Image,TouchableOpacity,StyleSheet} from 'react-native';
import { Card } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Form from 'react-native-validator-form/lib/Form';
import { useValidation } from 'react-native-form-validator';
import { ValidationRules } from 'react-native-validator-form';

import {Dimensions} from 'react-native';


import { DatePickerIOSBase } from 'react-native';

import {BackdropContext, DatePicker} from 'react-native-propel-kit';



 const Employment=({ navigation })=> {
   const [companyname,setcompanyname]=React.useState('');
   const [location,setlocation]=React.useState('');
   const [designation,setdesignation]=React.useState('');
   const [description,setdescription]=React.useState('');



  const [date, setDate] = React.useState(new Date());
  const [date2,setdate2]=React.useState(new Date());
  const {width, height} = Dimensions.get('window');
 
         




   
   const { validate, isFieldInError, getErrorsInField, getErrorMessages,isFormValid } =
   useValidation({
     state: { companyname, location, designation, description,date,date2 },
   });
 

   const handle=()=>{
    validate({
      companyname: {required: true },
      location: { required: true },
      designation: {required: true },
      date: { date: 'YYYY-MM-DD' },
      description:{required:true},
      date2:{date:'YYYY-MM-DD'}
    //  role:{require:true}
      
    });
    console.log("width of screen  "+width)
    console.log("width of height is  "+height)
   }


  return (
    <>
      <View>
          <View style={styles.backcontainer}>


          </View>
      <Card style={styles.maincontainer}>
      <Form onSubmit={handle}>
     {/* <Text style={{marginLeft:15,width:117,height:26,fontSize:16,color:'#000000'}}>Project Details</Text> */}
     <View style={{flexDirection:'row'}}>  
         <Text
         style={{marginLeft:wp('5%'),marginRight:105,width:180,height:26,fontSize:wp('3.7%'),color:'#000000'}}
         
         >Employment Details</Text>
       <TouchableOpacity
       style={{width:30,height:30,borderRadius:25,marginRight:20,borderColor:'#A64CBD',marginLeft:0}}
       activeOpacity={0.7}
       
       
              >
                 <Image
    style={{backgroundColor:'#A64CBD'}}
   source={require('/Users/macbook/Reactnative/native/onbordingnew/src/component/images/add.png')}

   />
  
         
       </TouchableOpacity>


           
            </View>


     <Text style={{marginLeft:wp('5%'),width:73,height:22,fontSize:14,marginTop:4,color:'#7037CE'}}>Experience</Text>

     <Text style={{marginLeft:wp('5%'),marginTop:3,width:154,height:22,fontSize:14}}>Company name *</Text>

     <TextInput 
           
     style={{marginLeft:wp('5%'),width:wp('55%'),height:35,borderRadius:10,borderWidth:1,borderColor:'#767474',marginTop:6,paddingLeft:15}}  placeholder={'Digitalflake solution pvt.itd'} 
     
     onChangeText={()=>{
       
        

     }}
     >
      
     </TextInput>
     {isFieldInError('companyname') &&
        getErrorsInField('companyname').map(errorMessage => (
          <Text style={{color:'#ff0000',marginLeft:wp('5%')}}>{errorMessage}</Text>
        ))}


     <Text  style={{marginLeft:wp('5%'),marginTop:9,width:139,height:22,fontSize:14}}>Location *</Text>
     <TextInput  style={{marginLeft:wp('5%'),width:wp('55%'),height:35,borderRadius:10,borderWidth:1,borderColor:'#767474',marginTop:6,paddingLeft:15}}  placeholder={' pune'}  >
     </TextInput>
     {isFieldInError('location') &&
        getErrorsInField('location').map(errorMessage => (
          <Text style={{color:'#ff0000',marginLeft:wp('5%')}}>{errorMessage}</Text>
        ))}

          <View style={{flexDirection:'row'}}> 
                <View style={{flexDirection:'column'}}>  
                <Text  style={{width:108,height:22,fontSize:14,marginTop:12,flexDirection:'row',marginLeft:wp('5%')}}  >Start date *</Text>
                <View  >    
                <DatePicker 
                style={{height:wp('8.4%'),paddingLeft:15,fontSize:14,borderWidth:1,borderColor:'#767474',borderRadius:10,width:wp('25%'),marginTop:wp('2.4%'),fontSize:wp('3.6%'),paddingTop:wp('1%'),marginLeft:wp('5%')}}
                
                title="Pick a date"    value={date}   
      onChange={setDate }
      
    
       />
    </View>
               
                  
                    </View>




                   <View style={{flexDirection:'column'}} >  
                   <Text  style={{marginLeft:wp('20%'),width:108,height:22,fontSize:14,marginTop:12,flexDirection:'row'}}  >End date *</Text>
                    
                   <View  >    
      <DatePicker 
      style={{height:wp('8.4%'),paddingLeft:15,fontSize:14,borderWidth:1,borderColor:'#767474',borderRadius:10,width:wp('25%'),marginTop:wp('2.4%'),fontSize:wp('3.6%'),paddingTop:wp('1%'),marginLeft:wp('20%')}}
      title="Pick a date"    value={date2}   
      onChange={setdate2 }
      
    
       />
      

</View>

                     
                     
                       </View>
                 
                
                                </View>

                                <View style={{flexDirection:'row'}}>   

                              



                </View>


      
<Text   style={{marginLeft:wp('5%'),marginTop:15,width:87,height:22,fontSize:14}}>
Designation *
</Text>

<TextInput  style={{marginLeft:wp('5%'),width:wp('55%'),height:35,borderRadius:10,borderWidth:1,borderColor:'#767474',marginTop:6}}  placeholder={'  Angular developer'}  >
     </TextInput>
     {isFieldInError('designation') &&
        getErrorsInField('designation').map(errorMessage => (
          <Text style={{color:'#ff0000',marginLeft:wp('5%')}}>{errorMessage}</Text>
        ))}



   <Text style={{marginLeft:wp('5%'),marginTop:10,width:87,height:22}} >Description *</Text>
   <TextInput  style={{marginLeft:wp('5%'),width:wp('55%'),height:35,borderRadius:10,borderWidth:1,borderColor:'#767474',marginTop:6}}  placeholder={'  coder'}  >
     </TextInput>
     {isFieldInError('description') &&
        getErrorsInField('description').map(errorMessage => (
          <Text style={{color:'#ff0000',marginLeft:wp('5%')}}>{errorMessage}</Text>
        ))}


     {/* <View  style={{marginTop:50}} >  </View> */}

     <View style={{marginTop:30,flexDirection:'row'}} >   

   <TouchableOpacity
        style={{marginLeft:wp('5%'),width:122,height:33,backgroundColor:'#808080',borderRadius:10}}
      
      >
        <Text style={{fontSize:15,width:64,height:26,alignContent:'center',alignSelf:'center',marginTop:5}}>Previous</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{marginLeft:25,width:122,height:33,backgroundColor:'#808080',borderRadius:10}}
      onPress={handle}
      >
        <Text style={{fontSize:15,width:64,height:26,alignContent:'center',alignSelf:'center',marginTop:5}}>Next</Text>
      </TouchableOpacity>


   </View>


      </Form>

      </Card>


      </View>

    </>
  )
}
const styles=StyleSheet.create({
                    backcontainer:{
                        position:'absolute',
                     left:0,
                     top:0,
                     right:0,
                     backgroundColor:'#4B2A82',
                      width:wp('100%'),
                      height:hp('60%'),
                      transform : [ { scaleX : 1/0.9} ],                                   
                      borderBottomStartRadius :100,
                     borderBottomEndRadius : 100,
                

                    } ,
                    maincontainer:{
                       left:24,
                       right:24,
                       marginTop:40,
                       backgroundColor:'transparent',
                       position:'absolute',


                    } 



})
export default Employment
