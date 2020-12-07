import React , {useState}from 'react'
import './css/layout.css'
const Nav = (props) => {
    const [stateNav , setStateNav] = useState(true)
    const handleNav = () => {
        return stateNav ? setStateNav(false) : setStateNav(true)
    }
    return(
        <div className="wrapper">
            <div className="sidebar" style={!stateNav ? {display : 'none'} : {width : '200px' , display : 'block'} }>
                <h2>Sidebar</h2>
                <ul>
                    <li><a href="/dashboard">Home</a></li>
                    <li><a href="/">Profile</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">portfolio</a></li>
                    <li><a href="/">Blogs</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">Map</a></li>
                </ul>
                <div className="social_media">

                </div>
            </div>

            <div className="main_content" style={stateNav ? {marginLeft : '200px'} : {marginLeft : '0'}}>
            <div style={{position : "absolute" , top: '0' , left : '0'  , fontSize : '2em' , cursor : 'pointer'}} onClick={handleNav}>x</div>
                <div className="header">{props.title}</div>
                <div className="info">
                    {props.children}
                </div>
            </div>
        </div>

    )
}
export default React.memo(Nav)