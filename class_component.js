import { Text, StyleSheet, View,ScrollView,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class App extends Component {
    state={
      count:0
    }
  
  render() {
    return (
      <View>
      <ScrollView>
        <Text style={styles.heading}>Counter App With class Component</Text>
      <Text style={styles.counter}>{this.state.count}</Text>
      <View style={styles.button_group}>
        <TouchableOpacity
        style={[styles.add]}
        onPress={()=>{
         this.setState({
          count:this.state.count+1
         })
        }}>
          <Text style={styles.commonText}>+1</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={[styles.reset]}
        onPress={()=>{
          this.setState({
            count:0
           })
        }}>
          <Text style={styles.commonText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={[styles.commonButton,styles.substract]}
        onPress={()=>{
          this.setState({
            count:this.state.count-1
           })
        }}>
          <Text style={styles.commonText}>-1</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
    )
  }
}

const styles = StyleSheet.create({
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