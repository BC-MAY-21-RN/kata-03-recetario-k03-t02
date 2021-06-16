import React from 'react';
import { StyleSheet, View, SafeAreaView, Platform, StatusBar, ScrollView, Button} from 'react-native';
import ScrollableView from '../components/ScrollableView';
import SearchText from '../components/SearchText';
import data from '../data';
import recentData from '../data/recentData'

import Recipe from '../types/Recipe';
import HomeScreenNavigationProp from '../types/HomeScreenNavigationProp';
import HomeScreenRouteProp from '../types/HomeScreenRouteProp';

type Props = {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
};

const MainScreen: React.FC<Props> = ({ navigation, route } : Props) =>{
    const handleDetails = (
      title : string,
      img: any,
      recipe: Recipe) => {
      navigation.navigate('Detail',{title,img,recipe})
    }

    return (
      <SafeAreaView style={{flex:1,paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
        <View style={styles.container}>
          <SearchText />
          <ScrollableView 
            title="TRENDING" 
            data={data} 
            handleDetails={handleDetails}
          />
          <ScrollableView 
            title="RECENT" 
            data={recentData} 
            big={true} 
            handleDetails={handleDetails}
          />
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

export default MainScreen;