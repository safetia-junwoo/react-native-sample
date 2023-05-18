import React, {useEffect} from 'react';
import {
  Text,
  View,
  // Image,
  KeyboardAvoidingView,
  // TouchableOpacity,
} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchBar from './SearchBar';

// const isIOS = Platform.OS == 'ios';

const BasicHeader = () => {
  useEffect(() => {});

  //  const navigation = useNavigation();
  const toHome = () => {
    console.log('home');
  };
  return (
    <KeyboardAvoidingView behavior={'padding'}>
      <SafeAreaView>
        <View>
          <View>
            <Text>
              {/* <Icon
                name="chevron-left"
                size={30}
                color="#333"
                onPress={goBack}
              /> */}
            </Text>
            <Text onPress={() => toHome()}>Title</Text>
          </View>
          <View>
            <SearchBar />
          </View>
          <View>
            <Text>O</Text>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default BasicHeader;
