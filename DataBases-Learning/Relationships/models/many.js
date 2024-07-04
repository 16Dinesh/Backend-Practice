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

// customerSchema.pre("findOneAndDelete", async () => {
//     console.log("PRE MIDDLEWARE");
// })

customerSchema.post("findOneAndDelete", async (customer) => {
    // console.log("POST MIDDLEWARE");
    // console.log(data);
    if (customer.orders.length) {
      let res = await Order.deleteMany({ _id : { $in : customer.orders} })
      console.log(res);
    }

})

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const findCustomer = async () => {
    let result  = await Customer.find({}).populate("orders");
    console.log(result[0]);
}

const addCust = async () => {
    let newCust = new Customer({
        name: "Varsha",
    });

    let newOrder = new Order ({
        item: "Burger",
        price : 107,
    });

    newCust.orders.push(newOrder);

    await newOrder.save();
    await newCust.save();

    console.log("added new custom");
}

const delCust = async () => {
    let data = await Customer.findByIdAndDelete("668289f84973b44039c8bb4d");
    console.log(data);
}

delCust();

//addCust();


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

// const addCustomer = async () => {
//     // let cus1 = new Customer( {
//     //     name : "Dinesh R"
//     // });

//     // let order1 = await Order.findOne({item: "Chips"});
//     // let order2 = await Order.findOne({item: "somasa"});
//     // let order3 = await Order.findOne({item: "Puff"});

//     // cus1.orders.push(order1);
//     // cus1.orders.push(order2);

//     // let result = await cus1.save();
//     // console.log(result);

//     // let result  = await Customer.find()
//     // console.log(result)
// }

// addCustomer();

