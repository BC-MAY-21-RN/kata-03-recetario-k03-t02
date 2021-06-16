import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import SearchText from '../components/SearchBar';
import HorizontalList from '../components/HorizontalList';

export default class MainScreen extends React.Component {

    render(){
    return (
      <SafeAreaView style={{flex: 1, /*paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 1*/}}>
      <View style={styles.container}>
          <SearchText />
          <HorizontalList />
      </View>
      </SafeAreaView>
    );
  }
}
  
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: '#282828',
      flex: 1,
      justifyContent: 'flex-start',
      paddingTop: 10,
    },
  });