import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeBaseProvider, Box, Icon, Button} from 'native-base';

const Welcome = ({navigation}) => {
  function goToMemberSign() {
    navigation.navigate('MemberSignScreen');
  }
  return (
    <View style={styles.container}>
      <NativeBaseProvider>
        <Text style={styles.header2}>Welcome</Text>
        <Text style={styles.header}>Kebap fitness</Text>
        <Button onPress={goToMemberSign}>Üye kaydı oluştur</Button>
      </NativeBaseProvider>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginVertical:"70%",
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
    color: 'black',
  },
  header2: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
});
