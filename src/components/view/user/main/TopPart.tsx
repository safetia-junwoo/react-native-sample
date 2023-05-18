import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const TopPart = ({course, showCourseDetail}) => {
  console.log(course, 'course');
  const {title, areaCode, type, like, guide, price} = course;
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <View style={styles.top}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.bottom}>
          <View style={styles.bottomItem}>
            {/* <Icon name="map-marker" size={12} color="#333" /> */}
            <Text style={styles.bottomLocation}>{areaCode}</Text>
            <Text style={styles.divider}>|</Text>
            <Text>{type}</Text>
          </View>

          <View style={styles.manage}>
            {/* <Icon
              name="heart-outline"
              size={15}
              color="#333"
              style={styles.icon}
            />
            <Icon
              name="share-variant"
              size={15}
              color="#333"
              style={styles.icon}
            /> */}
          </View>
        </View>
      </View>
    </View>
  );
};

TopPart.defaultProps = {
  course: {},
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: 15,
  },
  bottom: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bottomLocation: {
    marginLeft: 5,
    marginRight: 10,
  },
  divider: {
    marginRight: 10,
  },
  info: {
    flex: 9,
  },
  manage: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 5,
  },
});

export default TopPart;
