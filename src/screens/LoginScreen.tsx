import React, {useEffect} from 'react';
import {View, Text, ImageBackground} from 'react-native';

const bgImage = require('../assets/images/bg1.png');
// const bgImage = require('../assets/images/bg2.png');

const LoginScreen = (
  {
    //   route,
    //   navigation,
    //   API,
    //   fetchData,
    //   setUser,
    //   setUserToken,
    //   setGuide,
    //   setNavigation,
    //   setRoute,
    //   setSearchHistory,
  },
) => {
  const tempLogin = async () => {
    console.log('temp login!!');
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
  };

  useEffect(() => {
    // 주석 처리
    // checkLogin();
    tempLogin();
  }, []);

  return (
    <View>
      <ImageBackground source={bgImage} resizeMode="cover">
        <View>
          <Text>Goosuk</Text>
          <Text>Wherever you want to go</Text>
        </View>
        <View>
          {/* <GoogleSigninButton
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={signIn}
          /> */}
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
