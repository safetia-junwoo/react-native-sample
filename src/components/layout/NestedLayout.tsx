import React, {useState, useE} from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import BasicHeader from './BasicHeader';
import ForBottom from './ForBottom';
const NestedLayout = ({children}) => {
  return (
    <View style={styles.wrapper}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.contentWrapper}>{children}</View>
          <ForBottom />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    flex: 1,
  },
  contentWrapper: {},
});

export default NestedLayout;
