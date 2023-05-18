import {View, Text} from 'react-native';
import {SparklesIcon} from 'react-native-heroicons/solid';
import {VALUES} from '../../lib/contants';
const SearchBar = () => {
  return (
    <View>
      <SparklesIcon color={VALUES.ICON_COLOR} />
      <Text>Searc</Text>
    </View>
  );
};

export default SearchBar;
