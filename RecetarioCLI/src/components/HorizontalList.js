import React from 'react';
import {ScrollView, StyleSheet, View, Text, Image} from 'react-native';
import TrendingRecipe from './TrendingRecipe';

export default class HorizontalList extends React.Component {
    render(){
        return(
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.component}>
                    <Text style={styles.text}>TRENDING</Text>
                    <View style={styles.listContainer}>
                        <ScrollView horizontal = {true}>
                            <TrendingRecipe 
                            imageUri={require('../img/pizza.jpg')} 
                            name = 'Napolitan Pizza'/>
                            <TrendingRecipe 
                            imageUri={require('../img/ceral.jpg')} 
                            name = 'Cereal'/>
                            <TrendingRecipe 
                            imageUri={require('../img/pancake.jpeg')} 
                            name = 'Pancakes'/>
                            <TrendingRecipe 
                            imageUri={require('../img/sandwich.jpg')} 
                            name = 'Classic Sandwich'/>
                        </ScrollView>
                    </View>
                    <Text style={styles.text}>RECENT</Text>
                    <View style ={styles.listContainer}>
                        <ScrollView horizontal = {true}>
                            <TrendingRecipe 
                            imageUri={require('../img/pizza.jpg')} 
                            name = 'Napolitan Pizza'/>
                            <TrendingRecipe 
                            imageUri={require('../img/ceral.jpg')} 
                            name = 'Cereal'/>
                            <TrendingRecipe 
                            imageUri={require('../img/pancake.jpeg')} 
                            name = 'Pancakes'/>
                            <TrendingRecipe 
                            imageUri={require('../img/sandwich.jpg')} 
                            name = 'Classic Sandwich'/>
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    component: {
        flex: 1,
        paddingHorizontal: 10       
    },  
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: '5%',
        width: '100%'
    },
    listContainer:{
        height: 200,
        marginTop: '5%'
    },
    text:{
        color:'#CC1C63',
        fontSize: 24,
        width: '80%'
    }
});