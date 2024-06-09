import {  productsprop } from "../types"

const Products =({products}:productsprop)=>{
return(
    <div className="products">
    {products.map((product)=>{
        return <div className="single-product">
            <span>{product.title}</span>
        </div>
    })}
    </div>
)
}
export default Products