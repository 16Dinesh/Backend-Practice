import Product from "./product.jsx";

function ProductList() {
    let list1 = ["Keyboard and Trackpad","Cameras", "Stylus Support"];
    let list2 = {a:"High-resolution displays ", b: "Performance" , c: "Multimedia"} 
    return (
    <div>
    <Product price = {45999} title= "Phone" descriptions ="Phones, specifically smartphones, are handheld devices that combine mobile phone functions with computing capabilities. They typically feature touchscreens, internet connectivity, and the ability to run a wide range of apps. Modern smartphones often include features like high-resolution cameras, GPS navigation, and various sensors." features={list1[1]} features1 = {list2.a} listo = {["Keyboard and Trackpad","Cameras", "Stylus Support"]}/>
    <Product price = {105000} title= "laptop" descriptions="Laptops are portable personal computers designed for mobile use. They integrate the components of a desktop computer, including a display, keyboard, touchpad, and battery, into a single compact unit. Laptops are versatile devices used for a variety of tasks, from basic web browsing and document editing to complex programming and gaming."  features={list1[0]}  features1 = {list2.b} listo = {["Keyboard and Trackpad","Cameras", "Stylus Support"]}/>
    <Product price = {39999}title= "Tablet" descriptions="Tablets are mobile devices with larger touchscreens compared to smartphones but are more portable than laptops. They are often used for media consumption, web browsing, and light productivity tasks. Tablets usually come with a virtual keyboard and support for stylus input, making them suitable for activities like drawing and note-taking."  features={list1[2]}  features1 = {list2.c} listo = {["Keyboard and Trackpad","Cameras", "Stylus Support"]}/>
    </div>
    )
}

export default ProductList;