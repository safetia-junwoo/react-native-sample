import React, {useEffect} from 'react';
import {View, Text, ImageBackground, SafeAreaView} from 'react-native';
import {GoogleSigninButton} from '@react-native-community/google-signin';
const bgImage = require('../assets/images/bg1.png');
// const bgImage = require('../assets/images/bg2.png');

interface LoginScreenProps {
  navigation: any;
}
const LoginScreen = ({navigation}: LoginScreenProps) => {
  const tempLogin = async () => {
    const param = {
      userName: 'Hojae Lee',
      email: 'brownljw@gmail.com',
      provider: 'google',
      providerToken: 'googleJHASDhjhAJHGgvhGJhgJHFG1',
      id: 'bronwljw',
      photo: 'https://placeimg.com/50/50/1',
    };
    // const res = await axios.post(`/auth/login`, param);
    // if (res.data.type === 'bearer') {
    //   const token = {
    //     access: res.data.accessToken,
    //     refresh: res.data.refreshToken,
    //   };
    //   await setUserToken(token);
    // }
    // await checkLogin();
    console.log(param);
    navigation.navigate('UserMain', {});
  };

  useEffect(() => {
    // 주석 처리
    // checkLogin();
    // tempLogin();
  }, []);

  return (
    <SafeAreaView className="h-full flex flex-col">
      <ImageBackground
        source={bgImage}
        resizeMode="cover"
        className="w-full h-full ">
        <View className="flex-1 flex items-center justify-center flex-col text-white">
          <Text className="text-[48px] text-white font-bold">Goosuk</Text>
          <Text className="text-white text-sm font-bold">
            Wherever you want to go
          </Text>
        </View>
        <View className="flex-1 flex flex-col justify-end items-center">
          <View className="mb-5">
            <GoogleSigninButton
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={tempLogin}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LoginScreen;
