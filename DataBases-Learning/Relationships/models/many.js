const mongoose = require("mongoose");
const {Schema} = mongoose;

main().then(()=> console.log("connection successful")).catch(err => console.log(err));

async function main() {
    await mongoose. connect('mongodb://127.0.0.1:27017/relationDemo') ;
}

const orderSchema = new Schema({
    item : String,
    price : Number,
});



const customerSchema = new Schema({
    name: String,
    orders : [
        {
            type: Schema.Types.ObjectId,
            ref : "Order",
        },
    ],
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const addCustomer = async () => {
    // let cus1 = new Customer( {
    //     name : "Dinesh R"
    // });

    // let order1 = await Order.findOne({item: "Chips"});
    // let order2 = await Order.findOne({item: "somasa"});
    // let order3 = await Order.findOne({item: "Puff"});

    // cus1.orders.push(order1);
    // cus1.orders.push(order2);

    // let result = await cus1.save();
    // console.log(result);

    let result  = await Customer.find()
    console.log(result)
}

// addCustomer();

const findCustomer = async () => {
    let result  = await Customer.find({}).populate("orders");
    console.log(result[0]);
}

findCustomer();


// const addOrder = async () => {
//    let res = await Order.insertMany([
//     {
//         item: "somasa",
//         price : 40,
//     },
//     {
//         item: "Puff",
//         price : 75,
//     },
//     {
//         item: "Chips",
//         price : 20,
//     },
//    ]  
//     );
//     console.log(res);
// }

// addOrder()

//doc  --> https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design