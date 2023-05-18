import React from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import BasicHeader from './BasicHeader';
import ForBottom from './ForBottom';
interface LayoutProps {
  children: any;
}
const Layout = ({children}: LayoutProps) => {
  return (
    <View style={styles.wrapper}>
      <BasicHeader />
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
  contentWrapper: {
    padding: 5,
  },
});

export default Layout;
