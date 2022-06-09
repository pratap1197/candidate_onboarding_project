import * as React from 'react';
import { Button, View, Text ,TextInput,Image,TouchableOpacity,StyleSheet} from 'react-native';
import { Card } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown-v2'
import DatePicker from 'react-native-datepicker';
import { FAB,  } from 'react-native-paper';
import { Icon } from 'react-native-vector-icons/Icon';


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Form } from 'react-native-validator-form';

 const  Education=({ navigation })=> {
  const [date, setDate] = React.useState('');
  const [date2, setDate2] = React.useState('');
  const [universityname,setuniversityname]=React.useState('');
  const [course,setcourse]=React.useState('');
  const [stream,setstream]=React.useState('');
  const [startyear,setstartyear]=React.useState('');
  const [endyear,setendyear]=React.useState('');
  const [percentage,setpercentage]=React.useState('');
  const [unit,setunit]=React.useState('');


  const [state,setstate]=React.useState('')
  let data = [{
    value: 'Maharashtra state board',
  }, {
    value: 'cbsc',
  }, {
    value: 'harward',
  }];

  let data1 = [{
    value: 'BE',
  }, {
    value: 'BSc',
  }, {
    value: 'BCA',
  }];

  let data2 = [{
    value: 'computer science',
  }, {
    value: 'civil',
  }, {
    value: 'EnTc',
  }];

  let data3 = [{
    value: 'percentage',
  }, {
    value: 'cgpa',
  }, {
    value: 'marks',
  }];


const handle=()=>{
  navigation.navigate('Projectdetails')

}

  return (
    <>
    <View style={styles.backcontainer}>
  

    </View>
    <Form onSubmit={handle} >
    <Card style={styles.maincontainer}>
         <View style={{flexDirection:'row'}}>  
         <Text
         style={{marginLeft:wp('5%'),fontSize:hp('1.6%'),color:'#000000'}}
         
         >Educational Qualification</Text>
       <TouchableOpacity
       style={{width:30,height:30,borderRadius:25,marginRight:20,borderColor:'#A64CBD',marginLeft:wp('30%')}}
       activeOpacity={0.7}
       
       
              >
                 <Image
    style={{backgroundColor:'#A64CBD'}}
   source={require('/Users/macbook/Reactnative/native/onbordingnew/src/component/images/add.png')}

   />
  
         
       </TouchableOpacity>


           
            </View>

            <Text
            style={{height:22,marginLeft:wp('5%'),fontSize:hp('1.6%'),marginTop:19}}
            >Board or university name *</Text>

        
              <Dropdown
              placeholder='united nation university'
               style={{marginLeft:wp('5%'),width:wp('50%'),height:hp('4%'),marginTop:hp('0.6%'),borderRadius:10,borderWidth:1,borderColor:"#808080",fontSize:14}}
        
        data={data}
        onChangeText={(value)=> {
          console.log(value)
            setuniversityname(value)
     
          }}
     

      />
      <View
      style={{flexDirection:'row',marginTop:hp('3%')}}
      >  


      <View style={{flexDirection:'column',marginLeft:wp('5%')}}>   
      <Text
       style={{height:22,fontSize:hp('1.6%')}}
       
       >Course or degree * </Text>
           <Dropdown
        style={{width:wp('21%'),height:hp('4%'),borderRadius:10,borderWidth:1,borderColor:"#808080",fontSize:12,marginTop:hp('0.6%')}}
        placeholder='BE'

     data={data1}
     onChangeText={(value)=> {
      console.log(value)
      setcourse(value)
 
      }}
 
     
     />
        
          </View>

          <View style={{flexDirection:'column',marginLeft:wp('8%')}}>  
          <Text
       style={{height:22,fontSize:hp('1.6%')}}
       >Stream * </Text>


<Dropdown
        style={{width:wp('33%'),height:hp('4%'),borderRadius:10,borderWidth:1,borderColor:"#808080",fontSize:12,marginTop:hp('0.6%')}}
        placeholder='computer science'

     data={data2}
     onChangeText={(value)=> {
     console.log(value)
     setstream(value)

     }}
     
     />

            
              </View>
          

      </View>
   

<Text
style={{marginLeft:wp('5%'),height:22,fontSize:hp('1.6%'),marginTop:hp('3%')}}
>Passing year * </Text>
       
       <View
       style={{flexDirection:'row',marginTop:hp('0.6%')}}

       >   
  <DatePicker
                
                style={styles.datePickerStyle}
                date={date} // Initial date from state
                mode="date" // The enum of date, datetime and time
                placeholder="Year from"
                format="DD-MM-YYYY"
                minDate="01-01-2000"
                maxDate="01-01-2022"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                
                
                customStyles={{
      
                  dateInput: {
                    marginLeft: wp('5%'),
                    borderRadius:10,
                     width:89,
                     height:hp('4%')
                  },
      
                  dateIcon: {
                    //display: 'none',
                    
                    left: 7,
                    top: 0,
                    width:20,
                    height:20,
                    marginLeft: 0,
                  },
                }}
                onDateChange={(date) => {
                  setDate(date);
                  setstartyear(date)
                }}
                
              />
      <DatePicker
                
                style={styles.datePickerStyle}
                date={date2} // Initial date from state
                mode="date" // The enum of date, datetime and time
                placeholder="Year To"
                format="DD-MM-YYYY"
                minDate="01-01-2000"
                maxDate="01-01-2022"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                
                
                customStyles={{
      
                  dateInput: {
                    marginLeft: wp('9%'),
                    borderRadius:10,
                     width:89,
                     height:hp('4%')
                  },
      
                  dateIcon: {
                    //display: 'none',
                    
                    left: 7,
                    top: 0,
                    width:20,
                    height:20,
                    marginLeft: 0,
                  },
                }}
                onDateChange={(date2) => {
                  setDate2(date2);
                  setendyear(date2);
                }}
                
              />


       </View>

    <View
    style={{flexDirection:'row',marginTop:hp('3%')}}
    
    >

      <View style={{flexDirection:'column',marginLeft:wp('5%')}}> 
      <Text  style={{height:22,fontSize:hp('1.6%')}}  >Percentage *  </Text>
      <TextInput 
         onChangeText={(value)=>{

          setpercentage(value)
         }}
      
      style={{width:wp('21%'),height:hp('4%'),borderWidth:1,borderRadius:10,borderColor:'#808080',textAlign:'center',marginTop:hp('0.6%')}}  placeholder='95' >

</TextInput>

          </View>

          <View  style={{flexDirection:'column',marginLeft:wp('18%')}}>   
          <Text   style={{height:22,fontSize:hp('1.6%')}}  > Unit * </Text>  
          <Dropdown
        style={{width:wp('15%'),height:hp('4%'),borderRadius:10,borderWidth:1,borderColor:"#808080",fontSize:12,marginTop:hp('0.6%')}}
        placeholder='unit'

     data={data3}
     onChangeText={(value)=> {
       setunit(value)
     console.log(value)

     }}
     
     />


          </View>

  
    </View>



   <View style={{marginTop:40,flexDirection:'row'}} >   

   <TouchableOpacity
        style={{marginLeft:wp('5%'),width:wp('30%'),height:hp('4%'),backgroundColor:'#808080',borderRadius:10}}
      
      >
        <Text style={{fontSize:15,width:64,height:26,alignContent:'center',alignSelf:'center',marginTop:5}}>Previous</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{marginLeft:wp('9%'),width:wp('30%'),height:hp('4%'),backgroundColor:'#808080',borderRadius:10}}
      onPress={handle}
      >
        <Text style={{fontSize:15,width:64,height:26,alignContent:'center',alignSelf:'center',marginTop:5,textAlign:'center'}}>Next</Text>
      </TouchableOpacity>


   </View>



    </Card>
    </Form>
    </>
  )
}

const styles=StyleSheet.create({
    backcontainer:{
       position:'absolute',
       left:0,
       right:0,
       top:0,
       height:hp('50%'),
       backgroundColor:"#4B2A82",
       width:wp('100%'),
       transform : [ { scaleX : 1/0.9} ],                                   
      borderBottomStartRadius :100,
     borderBottomEndRadius : 100,



    },
    maincontainer:{
      flex:1,
     left:25,
     right:25,
     top:35,
     backgroundColor:'transparent',
     position:'absolute'
    
     //alignSelf:'flex-start',
     

    },
    datePickerStyle: {

      
      
    },

})
export default Education;
