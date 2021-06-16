const images = [
    require('../assets/images/spaguetti.jpg'),
    require('../assets/images/vegetarian_pie.jpg'),
    require('../assets/images/vegetarian_toast.jpg'),
];

const data = [
    {
        title: 'Spaguetti',
        src: images[0],
        recipe :{
            diners : 3,
            ingredients : [
                {'small avocado':'1/2'},
                {'teaspoon fresh lemon juice':'1/2'},
                {'teaspoon Kosher salt':'1/8'},
                {'teaspoon freshly ground black pepper':'1/8'},
                {'slice whole grain bread, toasted':'1 oz.'},
                {'teaspoon extra-virgin olive oil':'1/2.'},
            ]
        },
    },
    {
        title: 'Vegetarian Pie',
        src: images[1],
        recipe :{
            diners : 3,
            ingredients : [
                {'small avocado':'1/2'},
                {'teaspoon fresh lemon juice':'1/2'},
                {'teaspoon Kosher salt':'1/8'},
                {'teaspoon freshly ground black pepper':'1/8'},
                {'slice whole grain bread, toasted':'1 oz.'},
                {'teaspoon extra-virgin olive oil':'1/2.'},
            ]
        },
    },
    {
        title: 'Vegetarian Toast',
        src: images[2],
        recipe :{
            diners : 3,
            ingredients : [
                {'small avocado':'1/2'},
                {'teaspoon fresh lemon juice':'1/2'},
                {'teaspoon Kosher salt':'1/8'},
                {'teaspoon freshly ground black pepper':'1/8'},
                {'slice whole grain bread, toasted':'1 oz.'},
                {'teaspoon extra-virgin olive oil':'1/2.'},
            ]
        },
    },
];

export default data;