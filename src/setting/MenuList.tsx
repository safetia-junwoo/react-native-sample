import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import GuideMainScreen from '../screens/guide/GuideMainScreen';
import UserMainScreen from '../screens/user/UserMainScreen';

// import GuideRegisterScreen from '../screens/guide/GuideRegisterScreen';
// import UserCourseDetailScreen from '../screens/user/CourseDetailScreen';
// import UserScheduleScreen from '../screens/user/ScheduleScreen';
// import UserProfileScreen from '../screens/user/ProfileScreen';
// import ChooseRoleScreen from '../screens/ChooseRoleScreen';
// import UserMainScreen from '../screens/user/MainScreen';
// import SearchMainScreen from '../screens/user/SearchMainScreen';
// import CourseRegisterScreen from '../screens/guide/CourseRegisterScreen';

const MENU_LIST = [
  {
    name: 'Login',
    component: LoginScreen,
    options: {title: '구석', headerShown: false},
  },

  {
    name: 'Home',
    component: HomeScreen,
    options: {title: '구석', headerShown: false},
  },
  // user
  {
    name: 'UserMain',
    component: UserMainScreen,
    options: {title: '구석 정보', headerShown: false},
  },
  //   {
  //     name: 'UserCourseDetail',
  //     component: UserCourseDetailScreen,
  //     options: {title: 'Course Detail', headerShown: false},
  //   },
  //   {
  //     name: 'UserSchedule',
  //     component: UserScheduleScreen,
  //     options: {title: 'Setting Schedule', headerShown: false},
  //   },
  //   {
  //     name: 'UserProfile',
  //     component: UserProfileScreen,
  //     options: {
  //       title: 'User Profile',
  //       headerShown: false,
  //     },
  //   },
  //   {
  //     name: 'ChooseRole',
  //     component: ChooseRoleScreen,
  //     options: {
  //       title: 'Choose Role',
  //       headerShown: false,
  //     },
  //   },
  //   // Search
  //   {
  //     name: 'SearchMain',
  //     component: SearchMainScreen,
  //     options: {title: 'Search', headerShown: false},
  //   },
  // Guide
  {
    name: 'GuideMain',
    component: GuideMainScreen,
    options: {title: '가이드', headerShown: false},
  },
  //   {
  //     name: 'GuideRegister',
  //     component: GuideRegisterScreen,
  //     options: {title: '가이드', headerShown: false},
  //   },
  //   // course
  //   {
  //     name: 'CourseRegister',
  //     component: CourseRegisterScreen,
  //     options: {title: 'Course Register', headerShown: false},
  //   },
];

export default MENU_LIST;
