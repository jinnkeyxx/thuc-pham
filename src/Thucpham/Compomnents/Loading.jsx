import React from 'react'
import './css/Loading.scss'
const LoadingComponent = () => {
    return(
        <div className="text-center my-5" style={{display : 'flex' ,justifyContent: 'center' ,
        alignItems: 'center'}}>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
    )
}
export default React.memo(LoadingComponent)