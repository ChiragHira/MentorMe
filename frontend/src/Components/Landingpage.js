import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
function Landingpage(){
    return(
        <div style={{margin:'0px 20px 0px 20px'}}>
            <div className="navbar container-fluid mt-1 ">
                <div>
                    <img className="img-fluid"  src="#" alt="logo"></img>
                </div>
                <div >
                    <ul className="nav nav-underline">
                        <li className="nav-item ms-3"><a className="nav-link " href="#">Home</a></li>
                        <li className="nav-item ms-3"><a className="nav-link " href="#">Mentors</a></li>
                        <li className="nav-item ms-3"><a className="nav-link " href="#">About Us</a></li>
                        <li className="nav-item ms-3"><a className="nav-link " href="#">Courses</a></li>
                        <li className="nav-item ms-3"><a className="nav-link " href="#">Counselling</a></li>
                    </ul>
                </div>
                <div className="d-flex gap-3 justify-content-center">
                    <a href="#" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} size="1x" /></a>
                    <a href="#" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faFacebookF} size="1x" /></a>
                    <a href="#" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} size="1x" /></a>
                </div>
            </div>
            <div className="container-fluid text-center py-5">
                <h1  className="">ELEVATE YOUR ACADEMICS.</h1>
                <h2 >ACCELERATE YOUR CAREER.</h2>
                <p className="lead">Unlock your potential by being part of Mentorme and <br /> we'll guide you to your Future.</p>
                <form className="text-center">
                    <div className="input-group mb-3 mt-3 mx-auto" style={{ maxWidth: "700px" }}>
                        <input
                        type="text"
                        className="form-control search"
                        placeholder="Describe what you're looking for? (e.g. Review my profile for a UI/UX job)"
                        style={{ textAlign: "center" }}
                        />
                        <button type="submit" className="btn">
                        <i className="bi bi-search"></i>
                        </button>
                    </div>
                    <br/><br/><br/>
                    <button type="submit" className="btn btn-primary" style={{ width: '110px' }}>SIGN UP</button>
                </form>

            </div>
        </div>
    )
}
export default Landingpage