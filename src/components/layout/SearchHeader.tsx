import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSafeArea} from 'react-native-safe-area-view';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
Icon.loadFont();

const isIOS = Platform.OS == 'ios';
const HEADER_HEIGHT = isIOS ? 44 : 0;

const SearchHeader = ({onSearchInput, resetWord, searchWord, doSearch}) => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };
  const insets = useSafeArea();

  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      keyboardVerticalOffset={insets.top + HEADER_HEIGHT}
      behavior={isIOS ? 'padding' : undefined}>
      <View style={[styles.container]}>
        <View style={styles.left}>
          <Text>
            <Icon name="chevron-left" size={30} color="#333" onPress={goBack} />
          </Text>
        </View>
        <View style={styles.right}>
          <TextInput
            style={styles.input}
            onChangeText={onSearchInput}
            value={searchWord}
            placeholder="Search keyword..."
            onSubmitEditing={doSearch}
          />
          {searchWord.length > 0 ? (
            <Icon
              style={isIOS ? styles.delete : styles.deleteAndroid}
              name="close-circle"
              size={15}
              color="#333"
              onPress={resetWord}
            />
          ) : (
            <></>
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

SearchHeader.defaultProps = {
  doSearch: () => console.log('search!'),
  resetWord: () => console.log('reset'),
  onSearchInput: val => console.log(val),
  searchWord: '',
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: HEADER_HEIGHT,
  },
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  right: {
    marginLeft: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    width: '89%',
  },
  delete: {},
  deleteAndroid: {},
});

export default SearchHeader;
