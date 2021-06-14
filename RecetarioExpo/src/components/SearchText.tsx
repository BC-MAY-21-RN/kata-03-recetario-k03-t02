import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';


export default function SearchText() {
  return (
    <View style={styles.container}> 
        <View style={styles.content}>
            <Icon 
                color= '#fff'
                name='search'
            />
            <TextInput 
                style={styles.text} 
                placeholder="What do you want to eat?"
                placeholderTextColor='#ffffffbc'
            >
            </TextInput>
            <Icon 
                color= '#fff'
                name='mic'
            />
        </View>
    </View>
  );
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
    backgroundColor: '#2c2c2c',
    borderRadius: 10,
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
    marginBottom: 5,
    padding: 5,
    width: '90%',
  },
  text:{
    color: '#FFF',
    width: '80%',
  }
});