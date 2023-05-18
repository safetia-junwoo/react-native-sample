import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import TopPart from './main/TopPart';
import MainContent from './main/MainContent';
import BottomPart from './main/BottomPart';

interface UserMainProps {}
const UserMain = ({}: UserMainProps) => {
  const random = Math.floor(Math.random() * 100 + 1);

  const [courses, setCourses] = useState<any>([
    {
      seq: 1, // seq
      title: 'Old Palace Tour',
      areaInfo: {
        // area (  하나씩 밖으로 )
        seq: 1,
        country: 'KR', // countryCode ,
        countryName: 'South Korea',
        district: 'Seoul', // name
      },
      price: 45000,
      hourExpectation: 2, // hours
      briefText: `It doesn't matter whether you're sitting amid the high whine of an old Mini Cooper`, // introduce
      description:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
      type: 'sightseeing', // 관람, 하이킹, 체험, 쇼핑  오프젝트형태로 변경  courseType
      status: {
        // 제외
        hold: 21,
        viewed: 335,
        review: 19,
        like: 45,
      },
      guide: {
        seq: 0,
        name: 'Seeker',
        photo: `https://randomuser.me/api/portraits/men/${random}.jpg`, // photo
        introduction: '', // guide 설명
        level: 12,
        experience: 23,
        rating: 4.5,
      },
      reviews: [
        {
          seq: 0,
          userId: 'brownljw',
          name: 'Metatron',
          photo: `https://randomuser.me/api/portraits/men/${random + 1}.jpg`,
          comment: 'It was so fascinating!!',
          level: 43,
          date: '2022-01-01',
        },
        {
          seq: 1,
          userId: 'yujaeLee',
          name: 'ESH',
          photo: `https://randomuser.me/api/portraits/men/${random + 2}.jpg`,
          comment: 'definately worth to try',
          level: 55,
          date: '2022-01-06',
        },
        {
          seq: 2,
          userId: 'namkyu',
          name: 'namgyu',
          photo: `https://randomuser.me/api/portraits/men/${random + 3}.jpg`,
          comment: 'good! very good!',
          level: 35,
          date: '2022-01-06',
        },
      ],
      courseDetails: [
        // path
        {
          id: 1, // seq
          order: 1,
          name: '경복궁', // name
          image: 'c1', // photo
          comment: '조선 왕조의 법궁', // introduce
          timeExpectation: 60, // minutes
          link: '',
          activity: ['hiking', 'magnify'], // 제거
        },
        {
          id: 2,
          order: 2,
          name: '광화문',
          image: 'c2',
          comment: '경복궁의 남쪽에 있는 정문',
          timeExpectation: 30,
          link: '',
          activity: ['hiking', 'magnify'], // 제거
        },
        {
          id: 3,
          order: 3,
          name: '숭례문',
          image: 'c3',
          comment: '국보 제1호 보러 가자',
          timeExpectation: 40,
          link: '',
          activity: ['hiking', 'magnify', 'food'], // 제거, activities
        },
      ],
    },
    {
      seq: 2,
      name: 'HOT!! Place in Seoul',
      representLocation: 'Gangnam',
      area: {
        country: 'KR',
        countryName: 'South Korea',
        district: 'Seoul',
      },
      price: 45000,
      hourExpectation: 2,
      type: 'Activity',
      like: 225,
      introduce: `With towns and villages few and far between, the coastline of northern Scotland is one of the most unspoiled areas of Europe.`,
      description:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
      guide: {
        name: 'Joy',
        photo: `https://randomuser.me/api/portraits/women/${random}.jpg`,
        level: 27,
        experience: 122,
        rating: 4.9,
      },
      courseDetails: [
        // path
        {
          id: 1, // seq
          order: 1,
          name: '경복궁', // name
          image: 'c1', // photo
          comment: '조선 왕조의 법궁', // introduce
          timeExpectation: 60, // minutes
          link: '',
          activity: ['hiking', 'magnify'], // 제거
        },
        {
          id: 2,
          order: 2,
          name: '광화문',
          image: 'c2',
          comment: '경복궁의 남쪽에 있는 정문',
          timeExpectation: 30,
          link: '',
          activity: ['hiking', 'magnify'], // 제거
        },
        {
          id: 3,
          order: 3,
          name: '숭례문',
          image: 'c3',
          comment: '국보 제1호 보러 가자',
          timeExpectation: 40,
          link: '',
          activity: ['hiking', 'magnify', 'food'], // 제거, activities
        },
      ],
      status: {
        hold: 21,
        viewed: 335,
        review: 19,
        like: 45,
      },
      reviews: [
        {
          seq: 0,
          userId: 'brownljw',
          comment: 'It was so fascinating!!',
          level: 43,
          date: '2022-01-01',
        },
        {
          seq: 1,
          userId: 'yujaeLee',
          comment: 'definately worth to try',
          level: 55,
          date: '2022-01-06',
        },
      ],
      paths: [
        {
          id: 1,
          order: 1,
          name: '아트몬스터',
          image: 'g1',
          comment: '홍콩식 수제맥주',
          timeExpectation: 60,
          link: 'g1',
          activity: ['food', 'drink'],
        },
        {
          id: 2,
          order: 2,
          name: '전통주 갤러리',
          image: 'g2',
          comment: '한국의 전통주를 맛보자',
          timeExpectation: 30,
          link: '',
          activity: ['food', 'drink'],
        },
        {
          id: 3,
          order: 3,
          name: '더앨리',
          image: 'g3',
          comment: '버블티가 한국에 상륙했다',
          timeExpectation: 40,
          link: '',
          activity: ['food', 'drink'],
        },
      ],
    },
  ]);

  //   const [courses, setCourses] = useState([
  //     {
  //       seq: 0,
  //       name: 'Temp name',
  //       maxPerson: 0, // maxPeople
  //       hours: 2, // 시간이 없음
  //       introduce: 'Hello there', // introduce & description
  //       rating: 0,
  //       price: 0,
  //       photo: 'null/images/course/default.png',
  //       guide: {
  //         seq: 1,
  //         name: 'Junwoo Lee',
  //         photo: 'https://randomuser.me/api/portraits/men/23.jpg', // guide image 필요
  //         introduce: '',
  //         level: 0, // guide level 필요
  //         rating: 4, // guide rating
  //       },
  //       good: 0,
  //       type: 'Sightseeing', // type 필요
  //       categories: [
  //         // 이거는 마스터 정보를 주는것 이중에 하나를 골라서 course에 type으로 주는 것이 맞을 듯
  //         {seq: 0, name: 'Activity'},
  //         {seq: 1, name: 'Mukbang'},
  //       ],
  //       area: {
  //         // 도시정보는 따로 관리 안해도 되는가?
  //         countryCode: null,
  //         countryName: null,
  //         name: 'Seoul',
  //         seq: 1,
  //       },
  //       activities: [
  //         {icon: 'hiking', seq: 1},
  //         {icon: 'magnify', seq: 2},
  //       ],
  //       paths: [
  //         {
  //           id: 1, // seq
  //           order: 1,
  //           name: '경복궁', // name
  //           image: 'c1', // photo
  //           comment: '조선 왕조의 법궁', // introduce
  //           timeExpectation: 60, // minutes
  //           link: '',
  //           activity: ['hiking', 'magnify'], // 제거
  //         },
  //         {
  //           id: 2,
  //           order: 2,
  //           name: '광화문',
  //           image: 'c2',
  //           comment: '경복궁의 남쪽에 있는 정문',
  //           timeExpectation: 30,
  //           link: '',
  //           activity: ['hiking', 'magnify'], // 제거
  //         },
  //         {
  //           id: 3,
  //           order: 3,
  //           name: '숭례문',
  //           image: 'c3',
  //           comment: '국보 제1호 보러 가자',
  //           timeExpectation: 40,
  //           link: '',
  //           activity: ['hiking', 'magnify', 'food'], // 제거, activities
  //         },
  //       ], // path
  //     },
  //   ]);

  const showCourseDetail = (course: any) => {
    navigation.navigate('UserCourseDetail', {course});
  };

  useEffect(() => {}, []);

  return (
    <>
      {courses.map((course: any) => (
        <View key={course.courseId} style={styles.item}>
          <TopPart
            course={course}
            showCourseDetail={() => showCourseDetail(course)}
          />
          <MainContent
            details={course.courseDetail}
            showCourseDetail={() => showCourseDetail(course)}
          />
          <BottomPart
            course={course}
            showCourseDetail={() => showCourseDetail(course)}
          />
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  forBottom: {
    height: 150,
  },
  item: {
    padding: 15,
    marginTop: 30,
    marginBottom: 30,
  },
});

export default UserMain;
