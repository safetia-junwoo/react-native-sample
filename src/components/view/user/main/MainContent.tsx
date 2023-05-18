import React, {useEffect, useState} from 'react';
import {View, TouchableHighlight, Image, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';

const MainContent = ({details, showCourseDetail}) => {
  const c1 = require('../../../../assets/sample/c1.jpg');
  const c2 = require('../../../../assets/sample/c2.jpg');
  const c3 = require('../../../../assets/sample/c3.jpg');
  const g1 = require('../../../../assets/sample/g1.jpg');
  const g2 = require('../../../../assets/sample/g2.jpg');
  const g3 = require('../../../../assets/sample/g3.jpg');

  const images = {
    c1,
    c2,
    c3,
    g1,
    g2,
    g3,
  };
  const [slideImages, setSlideImages] = useState([]);

  useEffect(() => {
    if (details && details.length > 0) {
      details.forEach(item => {
        setSlideImages(prevSlide => [
          ...prevSlide,
          'https://placeimg.com/150/150/any',
        ]);
      });
    }
  }, []);

  return (
    <View style={styles.container}>
      <Swiper style={styles.wrapper} showsPagination={true}>
        {slideImages.map((slide, index) => (
          <TouchableHighlight
            style={styles.imageContainer}
            key={index}
            onPress={showCourseDetail}>
            <Image style={styles.image} source={{uri: slide}} />
          </TouchableHighlight>
        ))}
      </Swiper>
    </View>
  );
};

MainContent.defaultProps = {
  detailCourses: [],
};

const styles = StyleSheet.create({
  container: {
    height: 300,
  },
  imageContainer: {
    height: 290,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default MainContent;
