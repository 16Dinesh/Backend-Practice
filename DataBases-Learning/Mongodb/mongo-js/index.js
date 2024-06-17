const mongoose = require('mongoose');

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User" , userSchema);


//insert

// const user1 = new User({
//     name: "dinesh",
//     email: "dineshwonks@gmail.com",
//     age: 21.
// });
// user1.save();

// const user2 = new User({
//     name: "Ceaser",
//     email: "Ceaser_dogs@gmail.com",
//     age: 5.
// });

// user2.
//     save()
//     .then( (res) => {
//         console.log(res)
//     })
//     .catch((er)=>{console.log(err)});


// User.insertMany([
//     {name:"Varsha", email: "VarshaX13@gmail.com" , age: 21},
//     {name:"Brutu", email: "Brutu_dog@gmail.com" , age: 2},
//     {name:"DPR", email: "DPR16@gmail.com" , age: 0},
//     {name:"Bullbell", email: "Bullbell@gmail.com" , age: 3}
// ]).then( (res) => {console.log(res)}).catch((err)=>{console.log(err)});


// Read

// User.find({}).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})

// User.find({age: {$gt:10}}).then((res)=>{console.log(res[0].name)}).catch((err)=>{console.log(err)})

// User.findOne({age: {$gt:10}}).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})

// find by id

// User.findOne({ _id: "667020bba2316e4ecc2ac1b4"}).then((res)=> {console.log(res)}).catch((err)=>{console.log(err)});

// most used 
//User.findById({ _id: "667020bba2316e4ecc2ac1b4"}).then((res)=> {console.log(res)}).catch((err)=>{console.log(err)});


// update

//User.updateOne({name:"Bullbell"} , {age: 0}).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

// User.updateMany({ $gt: 45 }, {age: 45}).then((res) => {
//     console.log(res);
// });

// User.findOneAndUpdate({name:"Bullbell"} , {age: 21}).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

// const user121 = new User({name: "BullBull" , email: 'BullBull@email,com' , age: 21});
// user121.save().then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

// User.findOneAndUpdate({name:"BullBull"} , {age: 20}).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

// User.findOneAndUpdate({name:"BullBull"} , {age: 20} , {new: true}).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

// User.findByIdAndUpdate({_id : "667020d455142863a6aa6f7d"} , {age: 1} , {new: true}).then((res)=> {console.log(res)}).catch((err)=>{console.log(err)});


// delete

// User.deleteOne({name:"DPR"}).then((res)=> {console.log(res)}).catch((err)=>{console.log(err)});

// User.deleteMany({age: {$gt : 45}}).then((res)=> {console.log(res)}).catch((err));