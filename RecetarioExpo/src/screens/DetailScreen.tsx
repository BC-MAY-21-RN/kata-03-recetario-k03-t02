import React from 'react';
import { StyleSheet, View, SafeAreaView, Platform, StatusBar, ScrollView, Text, Button, Image} from 'react-native';

import DetailScreenNavigationProp from '../types/DetailScreenNavigationProp';
import DetailScreenRouteProp from '../types/DetailScreenRouteProp';

type Props = {
  route: DetailScreenRouteProp;
  navigation: DetailScreenNavigationProp;
};

const DetailScreen: React.FC<Props> = ({ navigation, route }) =>{
  const { title, recipe, img } = route.params;
  return (
    <SafeAreaView style={{flex:1,paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <Text style={{color:'#fff'}}>{title}</Text>
        <Text style={{color:'#fff'}}>{recipe.diners}</Text>
        <Image source={img}/>
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

export default DetailScreen;