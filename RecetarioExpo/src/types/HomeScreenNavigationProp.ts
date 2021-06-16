import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from './RootStackParamList';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

export default HomeScreenNavigationProp;