import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'


const counterApp = () => {
  const [counter,setCounter]=useState(0)
  return (
    <View>
      <ScrollView>
        <Text style={styles.heading}>Counter App With Functional Component</Text>
      <Text style={styles.counter}>{counter}</Text>
      <View style={styles.button_group}>
        <TouchableOpacity
        style={[styles.add]}
        onPress={()=>{
          setCounter(counter+1)
          
        }}>
          <Text style={styles.commonText}>+1</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={[styles.reset]}
        onPress={()=>{
          setCounter(0)
        }}>
          <Text style={styles.commonText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={[styles.commonButton,styles.substract]}
        onPress={()=>{
          setCounter(counter-1);
        }}>
          <Text style={styles.commonText}>-1</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  )
}
const styles=StyleSheet.create({
  textStyle:{
    color:'red',
  },
  button_group:{
    width:"100%",
    display:'flex',
    alignItems:"center"
  },
  counter:{
    fontSize:80,
    textAlign:'center',
    width:"100%",
    padding:20,
    marginTop:60,
    marginBottom:30,
    color:'black'
  },
  commonButton:{
    alignItems:'center'
  },
  commonText:{
    backgroundColor:'black',
    fontSize:30,
    textAlign:'center',
    width:"100%",
    padding:20,
    marginBottom:10,
    color:'#fff'
  },
  add:{
    width:150
  },
  reset:{
    width:150
  },
  substract:{
    width:150
  },
  heading:{
    textAlign:'center',
    fontSize:20,
    color:"black",
    padding:20,
  }
})

export default counterApp