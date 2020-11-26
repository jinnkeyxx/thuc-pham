import React from 'react'
import Product from '../Compomnents/Product'
const FootComponent = (props) => {
    return(
        <Product data={props.data}/>
    )
}
export default React.memo(FootComponent)