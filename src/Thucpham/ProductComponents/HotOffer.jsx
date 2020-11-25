import React from 'react'
import Product from '../Compomnents/Product'
const Hotoffer= (props) => {
    return(
        <Product data={props.data}/>
    )
}
export default React.memo(Hotoffer)