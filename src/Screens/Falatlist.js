
//**** concept of FlatList  ****//

import React from 'react';
import{
  Text,FlatList,StyleSheet, TouchableOpacity
}from 'react-native';

const Flatlist =()=>{
  const users=[
    {name:'mahammad',id:"1",age:'25'},
    {name:'suhel',id:'2',age:'26'},
    {name:'manu',id:'3',age:'25'},
    {name:'imran',id:'4',age:'26'}

  ]
  return(
    <FlatList 
    keyExtractor={users=>users.name}
    data={users}
    renderItem={({item})=>{
     return(
       <TouchableOpacity onPress={()=>{alert(item.id)}}>
       <Text style={styles.list}>
         {item.name} - age {item.age}
       </Text>
       </TouchableOpacity>
     )
    } }/>
  )
}
const styles= StyleSheet.create({
  list:{
    height:40,
    backgroundColor:'#000080',
    marginTop:10,
    alignItems:'center',
    fontSize:20,
    color:'white'

  }

})
export default Flatlist;