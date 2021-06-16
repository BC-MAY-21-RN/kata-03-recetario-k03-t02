import React from 'react';
import { StyleSheet, View, Image, Text,TouchableHighlight } from 'react-native';
import Recipe from '../types/Recipe';

export type Props = {
    bigCard?: boolean;
    title: string;
    img: any;
    recepie: Recipe;
    handleDetails: Function;
};

const FoodItem: React.FC<Props> = ({
    bigCard = false,
    title,
    img,
    recepie,
    handleDetails
  })  => {
    return (
        <View 
            style={bigCard 
                    ? stylesBig.foodItemConatainer 
                    : styles.foodItemConatainer
                    }
                  
        >
            <TouchableHighlight onPress={() => handleDetails(title,img,recepie)}>
                <View>
                    <Image
                        style={bigCard 
                            ? stylesBig.img 
                            : styles.img}
                        source={img}
                    />
                    <Text style={bigCard 
                                ? stylesBig.text 
                                : styles.text
                    }>
                    {title}
                    </Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    foodItemConatainer: {
        margin: 10,
        width: 115,
    },
    img: {
        borderRadius: 5,
        height: 125,
        width: '100%',
    },
    text:{
        color: '#fff',
        fontSize: 12
    },
});

const stylesBig = StyleSheet.create({
    foodItemConatainer: {
        ...styles.foodItemConatainer,
        width: 145,
    },
    img: {
        ...styles.img,
        height: 185,
    },
    text:{
        ...styles.text,
        fontSize: 14,
    },
});

export default FoodItem;

