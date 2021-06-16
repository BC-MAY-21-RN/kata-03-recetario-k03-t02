import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export default class TrendingRecipe extends React.Component {
  render(){
    return(
        <View style={styles.box}>
            <View style={styles.imageContainer}>
                <Image source = {this.props.imageUri} style = {styles.images}/>
            </View>
                <View style={styles.imagesTextCont}>
                <Text style = {styles.imageText}>{this.props.name}</Text>
            </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    box:{
        height: 200,
        width: 140,
        paddingLeft: 10,
        marginRight: 15
    },
    images:{
        borderRadius: 10,
        flex:1,
        height: null,
        resizeMode:'cover',
        width: null
    },
    imageContainer:{
        flex: 2
    },
    imageText:{
        color: 'white',
        fontSize: 20 
    },
    imagesTextCont:{
        color: 'white',
        flex:1,
        marginTop: 5
    }
});