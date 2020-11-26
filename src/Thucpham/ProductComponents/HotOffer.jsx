import React from 'react'
import Product from '../Compomnents/Product'
const HotOfferComponent = (props) => {
    return(
        <Product data={props.data}/>
    )
}
export default React.memo(HotOfferComponent)