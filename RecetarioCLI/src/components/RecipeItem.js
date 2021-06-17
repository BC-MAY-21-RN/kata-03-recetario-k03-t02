import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export default class RecipeItem extends React.Component {
  render(){
    return(
        <View style={this.props.big ? stylesBig.box: styles.box}>
            <Image source = {this.props.imageUri} style = {this.props.big ? stylesBig.images: styles.images}/>
            <Text style = {this.props.big ? stylesBig.imageText: styles.imageText}>{this.props.name}</Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    box:{
        width: 140,
        paddingLeft: 10,
        marginRight: 15,
        paddingTop: 15
    },
    images:{
        borderRadius: 10,
        height: 140,
        resizeMode:'cover',
        width: '100%'
    },
    imageText:{
        color: 'white',
        fontSize: 20,
        marginTop: 5
    },

});


const stylesBig = StyleSheet.create({
    box:{
        ...styles.box,
        width: 155,
    },
    images:{
        ...styles.images,
        height: 170

    },
    imageText:{
        ...styles.imageText,
        fontSize: 22

    },

});