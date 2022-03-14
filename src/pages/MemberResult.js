import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MemberResult = ({route}) => {
    console.log(route)
    const {user} = route.params
  return (
    <View >
      <View style={styles.container}>
      <Text style={styles.message}>REGISTRATION COMPLETED !</Text>
      </View>
      <Text style={styles.label}>Member Name:</Text>
      <Text style={styles.info}>{user.userName}</Text>
      <Text style={styles.label}>Member Surname:</Text>
      <Text style={styles.info}>{user.userSurname}</Text>
      <Text style={styles.label}>Member Age:</Text>
      <Text style={styles.info}>{user.userAge}</Text>
      <Text style={styles.label}>Member Mail:</Text>
      <Text style={styles.info}>{user.userMail}</Text>
    </View>
  )
}

export default MemberResult

const styles = StyleSheet.create({
    label :{
        fontWeight:"bold",
        fontSize:20,
        marginTop:10,
        color:"black",
        marginLeft:"16%"
    },
    message:{
        fontWeight:"bold",
        fontSize:40,
        marginVertical:30,
        color:"orange",
        borderRadius:20,
        overflow:"hidden",
    },
    container:{
        alignItems:"center",
    },
    info:{
        color:"orange",
        fontWeight:"bold",
        fontSize:20,
        marginLeft:"16%",
        marginBottom:10
    }

})