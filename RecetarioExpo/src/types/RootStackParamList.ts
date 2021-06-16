import Recipe from './Recipe'

type RootStackParamList = {
    Home: undefined;
    Detail: {   
            title: string; 
            img: any;
            recipe: Recipe;
    };
};

export default RootStackParamList;