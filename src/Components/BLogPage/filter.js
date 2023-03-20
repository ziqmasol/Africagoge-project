const BlogData = [
    {
        header: 'how to have a good music listening ear',
        date : '19 Augs, 2019 - by tommy lang',
        paragraph :  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, recusandae.',
        pics: './blogpage/card_pics1.jpg',
        id: 'music is cool'

    } ,{
        header: 'the hate you give is the hate you will eventually get',
        date : '19 Augs, 2019 - by tommy lang',
        paragraph :  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, recusandae.',
        pics: './blogpage/card_pics2.jpg',
        id: 'love others'


    } , {
        header: 'the hate you give is the hate you will eventually get',
        date : '19 Augs, 2019 - by tommy lang',
        paragraph :  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, recusandae.',
        pics: './blogpage/card_pics3.jpg',
        id: 'happiness is free'


    } ,{
        header: 'the hate you give is the hate you will eventually get',
        date : '19 Augs, 2019 - by tommy lang',
        paragraph :  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, recusandae.',
        pics: './blogpage/card_pics4.jpg' ,
        id : 'we can do more'


    } ,{
        header: 'the hate you give is the hate you will eventually get',
        date : '19 Augs, 2019 - by tommy lang',
        paragraph :  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, recusandae.',
        pics: './blogpage/card_pics5.jpg',
        id: 'be kind'


    } , {
        header: 'the hate you give is the hate you will eventually get',
        date : '19 Augs, 2019 - by tommy lang',
        paragraph :  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, recusandae.',
        pics: './blogpage/card_pics6.jpg' ,
        id : 'believe'


    } ,
]




const filterObject = BlogData.filter((data,index)=>{
    if(data.hasOwnProperty('price')){

        console.log(data)
        return data
    }
})

console.log(filterObject)