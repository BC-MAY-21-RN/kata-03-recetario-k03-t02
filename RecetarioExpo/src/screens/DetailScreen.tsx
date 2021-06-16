import React from 'react';
import { StyleSheet, View, SafeAreaView, Platform, StatusBar, ScrollView, Text} from 'react-native';

export default function DetailScreen() {
    return (
      <SafeAreaView style={{flex:1,paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
        <View style={styles.container}>
          <Text style={{color:'#fff'}}>Hi Detail</Text>
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