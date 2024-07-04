const mongoose = require("mongoose");
const {Schema} = mongoose;

main().then(()=> console.log("connection successful")).catch(err => console.log(err));

async function main() {
    await mongoose. connect('mongodb://127.0.0.1:27017/relationDemo') ;
}

const userSchema = new Schema({
    username : String,
    email : String,
});

const postSchema = new Schema({
    content : String,
    likes : Number,
    user : {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post",postSchema);

// const addData = async () => {
//     let user1 = await User.findOne({username: "Dinesh"});

//     let post2 = new Post({
//         content: "2nd time --Hello World!",
//         likes: 20,
//     })

//     post2.user = user1;

//     await post2.save();
// };

// addData();


// const del = async() => {
//     await Post.findByIdAndDelete("668553c51c5e4793e8600104");
//     await Post.findByIdAndDelete("668553b3ea557a295d9ae93f")
// };

// del();


const getData = async () => {
    let res = await Post.findOne({}).populate("user");
    console.log(res)
}

getData();

//doc  --> https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design