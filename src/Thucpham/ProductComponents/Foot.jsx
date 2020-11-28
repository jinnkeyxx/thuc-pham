import React from 'react'
import Product from '../Compomnents/Product'
const FoodComponent = (props) => {
    return(
        <Product data={props.data}/>
    )
}
export default React.memo(FoodComponent)