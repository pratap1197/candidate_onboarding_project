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
         style={{marginLeft:15,marginRight:105,width:180,height:26,fontSize:14,color:'#000000'}}
         
         >   Educational Qualification</Text>
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

            <Text
            style={{width:178,height:22,marginLeft:15,fontSize:14,marginTop:19}}
            >  Board or university name *</Text>

        
              <Dropdown
              placeholder='united nation university'
               style={{marginLeft:15,width:219,height:41,marginTop:6,borderRadius:10,borderWidth:1,borderColor:"#808080",fontSize:14}}
        
        data={data}
        onChangeText={(value)=> {
          console.log(value)
     
          }}
     

      />
      <View
      style={{flexDirection:'row',marginTop:10}}
      >  

       <Text
       style={{marginLeft:15,width:126,height:22,fontSize:14}}
       
       >  Course or degree * </Text>
       <Text
       style={{marginLeft:16,width:59,height:22,fontSize:14}}
       >   Stream * </Text>

      </View>
      <View  style={{flexDirection:'row',marginTop:5}}>
      
        
      

     <Dropdown
        style={{marginLeft:15,width:85,height:35,borderRadius:10,borderWidth:1,borderColor:"#808080",fontSize:12}}
        placeholder='BE'

     data={data1}
     onChangeText={(value)=> {
      console.log(value)
 
      }}
 
     
     />

<Dropdown
        style={{marginLeft:57,width:149,height:35,borderRadius:10,borderWidth:1,borderColor:"#808080",fontSize:12}}
        placeholder='computer science'

     data={data2}
     onChangeText={(value)=> {
     console.log(value)

     }}
     
     />

</View>

<Text
style={{marginLeft:14,width:95,height:22,fontSize:14,marginTop:28}}
>  Passing year * </Text>
       
       <View
       style={{flexDirection:'row',marginTop:18}}

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
                    marginLeft: 15,
                    borderRadius:10,
                     width:89,
                     height:35
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
                    marginLeft: 26,
                    borderRadius:10,
                     width:89,
                     height:35
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
                }}
                
              />


       </View>

    <View
    style={{flexDirection:'row',marginTop:26}}
    
    >
  <Text  style={{marginLeft:15,width:86,height:22,fontSize:14}}  >  Percentage *  </Text>
   <Text   style={{marginLeft:56,width:39,height:22,fontSize:14}}  > Unit * </Text>  

    </View>

   <View  style={{flexDirection:'row',marginTop:9}}   >

     <TextInput style={{marginLeft:15,width:89,height:35,borderWidth:1,borderRadius:10,borderColor:'#808080',textAlign:'center'}}  placeholder='95' >

     </TextInput>

     <Dropdown
        style={{marginLeft:56,width:89,height:35,borderRadius:10,borderWidth:1,borderColor:"#808080",fontSize:12}}
        placeholder='unit'

     data={data3}
     onChangeText={(value)=> {
     console.log(value)

     }}
     
     />


   </View>


   <View style={{marginTop:40,flexDirection:'row'}} >   

   <TouchableOpacity
        style={{marginLeft:25,width:122,height:33,backgroundColor:'#808080',borderRadius:10}}
      
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

      
      marginTop: 10,
    },

})
export default Education;
