import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from './RootStackParamList';

type DetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Detail'
>;

export default DetailScreenNavigationProp;