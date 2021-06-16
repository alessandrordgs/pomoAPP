import React from "react"
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
export default function Modal(props){
    return(
        <View style={styles.overlay}>
            <View  style={styles.modal}>
                <Text style={styles.modalText}>Parabéns você concluiu um ciclo </Text>
            <TouchableOpacity onPress={props.press} style={styles.button}>
                <Text style={styles.buttonText}>Fazer outro</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    overlay:{
        width:'100%',
        height:'100%',
        backgroundColor:"rgba(0, 0, 0, 0.3)",
        alignItems:'center',
        justifyContent:"center",
        position:'absolute'
    },
    modal:{
        backgroundColor:"#fff",
        width:300,
        height:200,
        borderRadius:10,
        alignItems:'center',
        justifyContent:"center",
     },
     modalText:{
         fontSize:18,
         fontWeight:"bold",
         marginTop:20
     },
     button:{
         backgroundColor:'#4C2B99',
         width:150,
         height:40,
         alignItems:'center',
         justifyContent:"center",
         marginTop:20,
         borderRadius:8
     },
     buttonText: {
        fontSize: 16,
        color: '#fff',
      },
   
})