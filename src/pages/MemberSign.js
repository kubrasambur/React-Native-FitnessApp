import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
  NativeBaseProvider,
  Button,
  VStack,
  Pressable,
  Input,
} from 'native-base';

const MemberSign = ({navigation}) => {
  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userMail, setUserMail] = useState(null);

  function handleSubmit() {
    const user = {
      userName,
      userSurname,
      userAge,
      userMail,
    };
    {/* ! ile aşağıdaki alanların null olup olmadığını kontrol ediyoruz 
         bu alanların initial değerleri null olduğu için ! ile bu değerlerden herhangi biri
         null ise ekrana alert mesajı verilir*/}
    if (!userName || !userSurname || !userAge || !userMail) {
      alert('Please enter missing informations');
    } else {
      navigation.navigate("MemberResultScreen",{user})
    }
    

    console.log(user);
  }

  return (
    <NativeBaseProvider>
      <VStack style={styles.container}>
        <Input
          marginY={3}
          marginX={2}
          shadow={2}
          _light={{
            bg: 'coolGray.100',
          }}
          _dark={{
            bg: 'coolGray.800',
          }}
          placeholder="Üyenin ismini giriniz..."
          onChangeText={setUserName}
        />
        <Input
          marginX={2}
          marginBottom={3}
          shadow={2}
          _light={{
            bg: 'coolGray.100',
          }}
          _dark={{
            bg: 'coolGray.800',
          }}
          placeholder="Üyenin soyismini giriniz..."
          onChangeText={setUserSurname}
        />
        <Input
          marginX={2}
          shadow={2}
          marginBottom={3}
          _light={{
            bg: 'coolGray.100',
          }}
          _dark={{
            bg: 'coolGray.800',
          }}
          placeholder="Üyenin yaşını giriniz..."
          onChangeText={setUserAge}
        />
        <Input
          marginX={2}
          shadow={2}
          marginBottom={3}
          _light={{
            bg: 'coolGray.100',
          }}
          _dark={{
            bg: 'coolGray.800',
          }}
          placeholder="Üyenin Email adresini giriniz..."
          onChangeText={setUserMail}
        />
        <Pressable>
          {() => {
            return (
              <Button style={styles.button} onPress={handleSubmit}>
                Kaydı Tamamla
              </Button>
            );
          }}
        </Pressable>
      </VStack>
    </NativeBaseProvider>
  );
};

export default MemberSign;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginHorizontal: 8,
  },
});
