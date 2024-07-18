import "./Product.css"

function Product({title, descriptions,features, features1,listo,price}) {
    return (
    <div className="Product">
    <h3>{title}</h3>
    <p>{descriptions}</p>
    <p>Features = {features}</p>
    <p>{listo.map((lists)=> (<li>{lists}</li>))}</p>
    <h3>₹ {price}</h3>
    {price > 40000 ? <h4>"25% Discount" </h4>: null} 
    </div>
    )
}

export default Product;