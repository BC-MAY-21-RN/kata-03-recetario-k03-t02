import React from 'react';
import {TextInput, StyleSheet, View, Platform, StatusBar} from 'react-native';
import { Icon } from 'react-native-elements';

export default class SearchBar extends React.Component {
  render(){
    return(
        <View style={styles.container}>
          <View style={styles.content}>
          <Icon 
                style={styles.icon} 
                name = 'search' 
                color = 'white'/>
            <TextInput 
                style={styles.text} 
                placeholder="What do you want to eat?"
                placeholderTextColor='#ffffffbc'
            />
            <Icon 
                style={styles.icon} 
                color= '#fff'
                name='mic'
            />
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  content:{
    backgroundColor: '#343435',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: Platform.OS == 'android' ? 30 : null,
    padding: 5,
    width: '90%',
  },
  icon:{
    paddingTop: 7
  },
  text:{
    color: '#FFF',
    width: '80%',
    marginTop: -5
  }
});
