import React from 'react';
import { StyleSheet, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import SearchText from '../components/SearchBar';

export default class MainScreen extends React.Component {
    render(){
    return (
      <SafeAreaView style={{flex:1,paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
      <View style={styles.container}>
          <SearchText />
        </View>
      </SafeAreaView>
    );
  }
}
  
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: '#000',
      flex: 1,
      justifyContent: 'flex-start',
      paddingTop: 10,
    },
  });