import React from 'react'
import './css/layout.css'

const Nav = (props) => {
    return(
        <div class="wrapper">
            <div class="sidebar">
                <h2>Sidebar</h2>
                <ul>
                    <li><a href="/dashboard">Home</a></li>
                    <li><a href="/">Profile</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">portfolio</a></li>
                    <li><a href="/"><i class="fas fa-blog"></i>Blogs</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">Map</a></li>
                </ul>
                <div class="social_media">

                </div>
            </div>

            <div class="main_content" style={{position : 'relative'}}>
            <div style={{position : "absolute" , top: '0' , left : '0'  , fontSize : '2em'}}>x</div>
                <div class="header">{props.title}</div>
                <div class="info">
                    {props.children}
            </div>
            </div>
        </div>

    )
}
export default React.memo(Nav)