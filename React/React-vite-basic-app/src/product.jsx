import "./Product.css";
import Price from "./Price";

function Product({title,idx }) {
    let oldPrices = ["12,495", "11,900", "1,599", "599"]
    let newPrices = ["8,999", "9,199", "999", "278"]
    let descriptions = [["8,000 DPI", "5 Programable Buttons" ], ["intuitive surface","designed for iPad Pro"], ["designed for iPad Pro", "intuitive surface"], [ "wireless", "Optical Orientation"]]
    return (
    <div className="Product">
    <h4>{title}</h4>
    <p>{descriptions[idx][0]}</p>
    <p>{descriptions[idx][1]}</p>
    <Price oldPrices={oldPrices[idx]} newPrices={newPrices[idx]}/>
    </div>
    )
}

export default Product;