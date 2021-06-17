import React from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import RecipeItem from './RecipeItem';

export default class HorizontalList extends React.Component {
    render(){
        return(
        <View>
            <Text style={styles.text}>{this.props.tittle}</Text>
            <ScrollView
            horizontal = {true}
            showsHorizontalScrollIndicator = {false}>
                <RecipeItem 
                imageUri={require('../img/pizza.jpg')} 
                name = 'Napolitan Pizza' 
                big = {this.props.big}/>
                <RecipeItem 
                imageUri={require('../img/ceral.jpg')} 
                name = 'Cereal'
                big = {this.props.big}/>
                <RecipeItem 
                imageUri={require('../img/pancake.jpeg')} 
                name = 'Pancakes'
                big = {this.props.big}/>
                <RecipeItem 
                imageUri={require('../img/sandwich.jpg')} 
                name = 'Classic Sandwich'
                big = {this.props.big}/>
            </ScrollView>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    text:{
        color:'#CC1C63',
        fontSize: 24,
        paddingTop: 20
    }
});