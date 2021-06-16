import React from 'react';
import { StyleSheet, View, SafeAreaView, Platform, StatusBar, ScrollView} from 'react-native';
import ScrollableView from '../components/ScrollableView';
import SearchText from '../components/SearchText';
import data from '../data';
import recentData from '../data/recentData'
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Detail: { title: string };
};

type DetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Detail'
>;

type Props = {
  navigation: DetailScreenNavigationProp;
};

export default function MainScreen({ navigation }) {
    return (
      <SafeAreaView style={{flex:1,paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
        <View style={styles.container}>
          <SearchText />
          <ScrollableView title="TRENDING" data={data}/>
          <ScrollableView title="RECENT" data={recentData} big={true}/>
        </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#000',
      flex: 1,
      justifyContent: 'flex-start',
      paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
  });