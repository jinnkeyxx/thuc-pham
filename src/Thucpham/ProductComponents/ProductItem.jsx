import React from 'react'
import Product from '../Compomnents/Product'
const ProductItem = (props) => {
    return(
        <Product data={props.data}/>
    )
}
export default React.memo(ProductItem)