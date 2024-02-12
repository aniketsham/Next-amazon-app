import bcrypt from 'bcryptjs'
const data={
    users:[
        {
            name:'aniket',
            email:'anikets2408@gmail.com',
            password:bcrypt.hashSync('12345'),
            isAdmin:true,

        },
        {
            name:'aniketS',
            email:'anikets2048@gmail.com',
            password:bcrypt.hashSync('123456'),
            isAdmin:false,

        }
    ],
    products:[
        {
        name:'Free tshirt',
        slug:'free-tshirt',
        image:'/images/shirt1.jpeg',
        banner:'/images/banner1.jpg',
        price:70,
        brand:'Nike',
        description:'a popular tshirt',
        rating:4.5,
        isFeatured:true,
        numReview:8,
        countInStock:20,

        },
        {
            name:'Fit tshirt',
            slug:'fit-tshirt',
            image:'/images/shirt2.jpeg',
            banner:'/images/banner2.jpg',
            price:100,
            brand:'puma',
            description:'a popular fit tshirt',
            rating:4,
            isFeatured:true,
            numReview:8,
            countInStock:20,
    
            }
    ]
}

export default data