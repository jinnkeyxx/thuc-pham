import React , {useState , useEffect}from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container , Row , Col ,InputGroup , FormControl } from 'react-bootstrap'
import {faArrowUp } from '@fortawesome/free-solid-svg-icons'
import {faTwitterSquare, faFacebook, faLinkedin, faGithub}  from '@fortawesome/free-brands-svg-icons'
const FooterComponent = () => {

// window.onscroll = function() {scrollFunction()};
	const [isHidden , setIsHiiden] = useState(false)

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	// document.getElementById("myBtn").style.display = "block";
	setIsHiiden(true)
  } else {
	// document.getElementById("myBtn").style.display = "none";
	setIsHiiden(false)
  }
}
const  topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
    return(
        <>
			<div className="subscribe" style={{width : '100%' , backgroundColor : '#f10' , padding : '3rem'}}>
				<Container>
					<Row>
						<Col md={4}>
							<h3 style={{color : "#fff" , fontSize: '1.5em'}} className="my-2">Sign Up For Our Newsletter</h3>
						</Col>
						<Col>
							<InputGroup  style={{ width : '80%'}} className="my-2">
								<FormControl style={{padding : '1.3rem', fontWeight :'bold', background : 'transparent' , color : '#fff' }} id="subscribe"
								placeholder="Your Email"
								aria-label="Your Email"
								aria-describedby="subrcriceNow"
								/>
								<InputGroup.Append>
								<InputGroup.Text id="subrcriceNow" style={{background : '#fff' , textTransform : 'uppercase' , color : '#f10'}}>Subscribe Now</InputGroup.Text>
								</InputGroup.Append>
							</InputGroup>
						</Col>
					</Row>
				</Container>
			</div>

			<footer className="page-footer font-small stylish-color-dark pt-4">

				<div className="container text-center text-md-left">
					<div className="row">
						<div className="col-md-4 mx-auto">
						<h5 className="font-weight-bold text-uppercase mt-3 mb-4">Information</h5>
						<p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
							consectetur
							adipisicing elit.
						</p>
						</div>
						<hr className="clearfix w-100 d-md-none" />
						<div className="col-md-2 mx-auto">
							<h5 className="font-weight-bold text-uppercase mt-3 mb-4">policy info</h5>
							<ul className="list-unstyled">
								<li>
									<a href="/link">Link 1</a>
								</li>
								<li>
									<a href="/link">Link 2</a>
								</li>
								<li>
									<a href="/link">Link 3</a>
								</li>
								<li>
									<a href="/link">Link 4</a>
								</li>
							</ul>
						</div>
						<hr className="clearfix w-100 d-md-none" />
						<div className="col-md-2 mx-auto">
							<h5 className="font-weight-bold text-uppercase mt-3 mb-4">what in stores</h5>
							<ul className="list-unstyled">
								<li>
									<a href="/link">Link 1</a>
								</li>
								<li>
									<a href="/link">Link 1</a>
								</li>
								<li>
									<a href="/link">Link 3</a>
								</li>
								<li>
									<a href="/link">Link 4</a>
								</li>
							</ul>
						</div>
						<hr className="clearfix w-100 d-md-none" />

					</div>
				</div>
				<hr />

				<hr />
				<ul className="list-unstyled list-inline text-center">
				<li className="list-inline-item">
					<a className="btn-floating btn-fb mx-1" href="/Link">
						<FontAwesomeIcon icon={faFacebook} />
					</a>
				</li>
				<li className="list-inline-item">
					<a className="btn-floating btn-tw mx-1" href="/Link">
						<FontAwesomeIcon icon={faTwitterSquare} />
					</a>
				</li>
				<li className="list-inline-item">
					<a className="btn-floating btn-gplus mx-1" href="/Link">
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
				</li>
				<li className="list-inline-item">
					<a className="btn-floating btn-li mx-1" href="/Link">
						<FontAwesomeIcon icon={faGithub} />
					</a>
				</li>

				</ul>
				<div className="footer-copyright text-center py-3">© 2020 Copyright:
				<a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
				</div>
			</footer>
			<button  id="myBtn" onClick={topFunction} title="Go to top"><FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon></button>
		</>
    )
}
export default React.memo(FooterComponent)