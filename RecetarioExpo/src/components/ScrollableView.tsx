import React from 'react';
import { StyleSheet, ScrollView,View,Text} from 'react-native';
import FoodItem from '../components/FoodItem';

type food = {
    title: string;
    src: string;
}

export type Props = {
    data: Array<food>;
    title: string;
    big?: boolean
};

const ScrollableView: React.FC<Props> = ({
    data,
    title,
    big = false
  })  => {
        return (
            <View>
                <Text style={styles.tile}>{title}</Text>
                <ScrollView
                    horizontal={true}  
                >
                    {
                        data.map(food => (
                            <FoodItem 
                                key={food.title}
                                title={food.title}
                                img={food.src}
                                bigCard={big}
                            />
                        ))
                    }
                </ScrollView>
            </View>
        );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 0,
    },
    tile:{
        color: '#b938af',
        fontSize: 17
    }
  });

  export default ScrollableView;