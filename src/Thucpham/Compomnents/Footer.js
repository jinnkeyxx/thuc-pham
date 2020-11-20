import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faArrowUp} from '@fortawesome/free-solid-svg-icons'

const FooterComponent = () => {
window.onscroll = function() {scrollFunction()};
var mybutton = document.getElementById("myBtn");

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
const  topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
    return(
        <>
        <footer>footer</footer>
        <button  id="myBtn" onClick={topFunction} title="Go to top"><FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon></button>
        </>
    )
}
export default React.memo(FooterComponent)