const mongoose = require('mongoose');

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/bookpoint');
}

const bookSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true,  // required is not null in sql
        maxLength: 20,
    },
    author: {
        type: String,
    },
    price: {
        type:Number,
        min:[1, "Price is Too Low"]
    },
    discount: {
        type: Number,
        default: 10,
    },
    category : {
        type: String,
        enum: ["fiction", "non-fiction"],   //if passed this array value then it passes or gives error
    },
    genre:[String],
});

const Book = mongoose.model("Book", bookSchema);
Book.findByIdAndUpdate("667065522b65d7aef9f88e17" , {price: 250}, {runValidators: true}).then((res)=>{console.log(res)}).catch((err)=>{console.log(err.errors.price.properties.message)})

// let book1 = new Book({
//     title : "Mathematices XII",
//     author: "RD Sharama",
//     price : 1200,
// })

// let book2 = new Book({title:"How to kill a MockingBird", author: "Harper Lee" , price: 850});

// let book3 = new Book({title:"Gone girl",  price: 399});


// let book4 = new Book({
//         title : "Marvel comics",
//         author: "Stan Lee",
//         price : 500,
//         category: "fiction",
// });

// book4.save().then((res)=>{console.log(res)});

// let book5 = new Book({
//     title : "Marvel comics v2",
//     author: "Stan Lee",
//     price : 32,
//     genre: ["comics", "SuperHero", "fiction"]
// });

// book5.save().then((res)=>{console.log(res)});

    
// book3.save().then((res)=>{console.log(res)});
// book2.save().then((res)=>{console.log(res)});

//book1.save().then((res)=>{console.log(res)});