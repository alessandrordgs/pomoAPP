import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
export default function TimerButton(props){
   return(
    <TouchableOpacity style={styles.timers} onPress={props.press}>
    <Text>{props.Timer}:00</Text>
  </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
    timers:{
        width:60,
        backgroundColor:"#E6AA6E",
        height:40,
        borderRadius:10,
        alignItems:"center",
        justifyContent:'center'
      }
})