import React from 'react'
export const ProductComponent = (Component , data) => {
    return class extends React.PureComponent{
        constructor(){
            super()
            this.state ={
                data : data
            }
        }
        render(){
            return(
                <Component {...this.props} data={this.state.data}   />
            )
        }
    }
}
