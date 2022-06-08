import * as React from 'react';
import { Button, View, Text ,TextInput,Image,TouchableOpacity,StyleSheet} from 'react-native';
import { Card } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Form from 'react-native-validator-form/lib/Form';
import { useValidation } from 'react-native-form-validator';

import { DatePickerIOSBase } from 'react-native';

import {BackdropContext, DatePicker} from 'react-native-propel-kit';
import { ValidationRules } from 'react-native-validator-form';



 const Projectdetails=({ navigation })=> {
  const [date, setDate] = React.useState(new Date());
  const [date2,setdate2]=React.useState('');
  const [title,settitle]=React.useState('');
  const [desc,setdesc]=React.useState('');
  const [technology,settechnology]=React.useState('');
  const [role,setrole]=React.useState('');
  const handle=()=>{
    validate({
      title: {  required: true,minlength:2 },
      desc: { required: true },
      technology: {required: true },
      date: { date: 'YYYY-MM-DD' },
      role:{required:true}
    //  role:{require:true}
      
    });
console.log(isFieldInError)
console.log(getErrorsInField)
   if(isFormValid()===true)

   {
    navigation.navigate('Employment')

   }
      }
  const { validate, isFieldInError, getErrorsInField, getErrorMessages,isFormValid } =
  useValidation({
    state: { title, desc, technology, role },
  });


  return (
    <>
      <View>
          <View style={styles.backcontainer}>


          </View>
      <Card style={styles.maincontainer}>
      <Form onSubmit={()=>{
        
         
        handle}}>
     {/* <Text style={{marginLeft:15,width:117,height:26,fontSize:16,color:'#000000'}}>Project Details</Text> */}
     <View style={{flexDirection:'row'}}>  
         <Text
         style={{marginLeft:wp('5%'),marginRight:wp('20%'),width:180,height:26,fontSize:14,color:'#000000'}}
         
         >Project Details</Text>
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


     <Text style={{marginLeft:wp('5%'),width:50,height:22,fontSize:14,marginTop:4,color:'#7037CE'}}>Fresher</Text>

     <Text style={{marginLeft:wp('5%'),marginTop:3,fontSize:wp('3.6%')}}>Academic project title *</Text>

     <TextInput   value={title} onChangeText={(newtext)=>{
       
       
       settitle({newtext})
       validate({newtext:{required:true,minlength:2}})
 
        
       
       } 
       
       
       } style={{marginLeft:wp('5%'),width:wp('50%'),height:wp('8.4%'),borderRadius:10,borderWidth:1,borderColor:'#767474',marginTop:wp('2.4%'),paddingLeft:15}}  placeholder={'smart classroom automation'}  >
      
     </TextInput>
     {isFieldInError('title') &&
        getErrorsInField('title').map(errorMessage => (
          <Text style={{color:'#ff0000',marginLeft:wp('5%')}} >{errorMessage}</Text>
        ))}


     <Text  style={{marginLeft:wp('5%'),marginTop:wp('6.4%'),width:139,height:22,fontSize:14}}>Project description *</Text>
     <TextInput value={desc}  onChangeText={(newtext)=>{setdesc(newtext)}} style={{marginLeft:wp('5%'),width:wp('50%'),height:wp('8.4%'),borderRadius:10,borderWidth:1,borderColor:'#767474',marginTop:wp('2.4%'),paddingLeft:15}}  placeholder={'this project is about smart method for handling attendance and other activities'}  >
     </TextInput>
     {isFieldInError('desc') &&
        getErrorsInField('desc').map(errorMessage => (
          <Text style={{color:'#ff0000',marginLeft:wp('5%')}}>{errorMessage}</Text>
        ))}

     <Text  style={{marginLeft:wp('5%'),width:108,height:22,fontSize:14,marginTop:wp('6.4%'),flexDirection:'row'}}  >Academic year *</Text>

        <View style={{marginLeft:wp('5%'),borderRadius:10,flexDirection:'row',paddingTop:0}} >    
      <DatePicker   style={{height:wp('8.4%'),paddingLeft:15,alignSelf:'center',fontSize:14,borderWidth:1,borderColor:'#767474',borderRadius:10,width:wp('25%'),marginTop:wp('2.4%'),fontSize:wp('3.6%'),paddingTop:wp('1%')}}  title="Pick a date"    value={date}   
      onChange={setDate }
      
    
       />
        {isFieldInError('date') &&
        getErrorsInField('date').map(errorMessage => (
          <Text style={{color:'#ff0000',marginLeft:wp('5%')}}>{errorMessage}</Text>
        ))}

       {/* <Image
       source={require('/Users/macbook/Reactnative/native/onbordingnew/src/component/images/date.png')}
       
       
       /> */}

</View>

<Text   style={{marginLeft:wp('5%'),marginTop:wp('6.4%'),width:87,height:22,fontSize:14}}>
Technology *
</Text>

<TextInput value={technology} onChangeText={(newtext)=>{settechnology(newtext)}} style={{marginLeft:wp('5%'),width:wp('50%'),height:wp('8.4%'),borderRadius:10,borderWidth:1,borderColor:'#767474',marginTop:wp('2.4%'),paddingLeft:15}}  placeholder={'  Angular'}  >
     </TextInput>
     {isFieldInError('technology') &&
        getErrorsInField('technology').map(errorMessage => (
          <Text style={{color:'#ff0000',marginLeft:wp('5%')}} >{errorMessage}</Text>
        ))}



   <Text style={{marginLeft:wp('5%'),marginTop:wp('6.4%'),width:50,height:22}} >Role *</Text>
   <TextInput  value={role}  onChangeText={setrole} style={{marginLeft:wp('5%'),width:wp('50%'),height:wp('8.4%'),borderRadius:10,borderWidth:1,borderColor:'#767474',marginTop:wp('2.4%'),paddingLeft:15}}  placeholder={'  coder'}  >
     </TextInput>
     {isFieldInError('role') &&
        getErrorsInField('role').map(errorMessage => (
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
                      height:hp('50%'),
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
export default Projectdetails
