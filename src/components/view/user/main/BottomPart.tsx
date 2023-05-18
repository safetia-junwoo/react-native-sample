import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const BottomPart = ({course, showCourseDetail}) => {
  const {guide, briefText} = course;
  return (
    <TouchableOpacity style={styles.container} onPress={showCourseDetail}>
      <View>
        <View style={styles.guide}>
          <Image style={styles.profile} source={{uri: guide.photo}} />
          <Text style={styles.name}>{guide.name}</Text>
        </View>
        <View style={styles.intro}>
          <Text style={styles.introText}>{briefText}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

BottomPart.defaultProps = {
  course: {},
  showCourseDetail: () => {},
};

const styles = StyleSheet.create({
  guide: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  profile: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    borderRadius: 50,
  },
  name: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
  intro: {
    padding: 5,
  },
  introText: {
    fontWeight: '300',
    fontSize: 12,
  },
});

export default BottomPart;
