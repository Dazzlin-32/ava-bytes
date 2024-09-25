import Navbar from "./Components/Navbar";

import creative from './Assets/creative.jpg';

import Row from 'react-bootstrap/Row';

import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router-dom";
import './cizmir.css'


const Homepage = () => {
    return ( 
        <div  className="homepageBody">
            <div className="imageback">
                <Navbar/>
                <div id="#home" className="middleText">
                    <h3>Get the </h3>
                    <h1 style={{fontSize:"45px"}}>Website of your Dreams</h1>
                    <h6 style={{ fontWeight: "lighter" }}>AvaBytes is an innovative web company based in Addis Ababa, Ethiopia, dedicated to providing a comprehensive suite of digital services. From expert web development and captivating web design to effective digital marketing strategies, AvaBytes empowers businesses and individuals to establish a compelling online presence, drive growth, and achieve success in the digital world.</h6 >
                   
                    <button className="button-36" role="button">
                    <span className="text">Get Started</span>
                    </button>

                </div>
            </div>
            <div   id="#about"className="greenback">
                 <div className="designRow" >
                    <img className="designImage" src={creative} alt="" />
                    <div className="greenbackText">
                        <p>
                         <span style={{fontSize:"calc(36px + 0.390625vw)", fontWeight:"bolder", display:"block", margin:"1em", }}> Web Development</span>
                        Quickly incentivize impactful action items before tactical collaboration and idea-sharing.
                        Monotonically engage market-driven intellectual capital through wireless opportunities. 
                        Progressively network performance based services for functionalized testing procedures.
                        </p>
                    </div>
                 </div>
            </div>

            {/* Col */}
            <div  id="contact" className="whiteback">
                <Row style={{ width: '70%', margin: "0.25em",  }}> 
                    <Col style={{ width:"50%", }}> 
                    <figure className="c4-izmir c4-border-cc-2">
                            <img src={creative} alt="hover effect" />
                            <figcaption>
                                <h3>STRATEGY 1</h3>
                                <h6> Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices</h6>
                            </figcaption>
                        </figure>
                    </Col>
                    <Col style={{ width:"50%", }}> 
                    <figure className="c4-izmir c4-border-cc-2">
                            <img src={creative} alt="hover effect" />
                            <figcaption>
                                <h3>STRATEGY 2</h3>
                                <h6> Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices</h6>
                            </figcaption>
                        </figure>
                       
                    </Col>
                    <Col style={{ width:"50%" }}> 
                    <figure className="c4-izmir c4-border-cc-2">
                            <img src={creative} alt="hover effect" />
                            <figcaption>
                                <h3>STRATEGY 3</h3>
                                <h6> Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices</h6>
                            </figcaption>
                        </figure>
                    </Col>
                </Row>
                <Row style={{ width: '70%', margin: "0.25em",  }}> 
                    <Col style={{ width:"50%", }}> 
                        
                        <figure className="c4-izmir c4-border-cc-2">
                            <img src={creative} alt="hover effect" />
                            <figcaption>
                                <h3>STRATEGY 4</h3>
                                <h6> Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices</h6>
                            </figcaption>
                        </figure>
                    </Col>
                    <Col style={{ width:"50%", }}> 
                       
                        <figure className="c4-izmir c4-border-cc-2">
                            <img src={creative} alt="hover effect" />
                            <figcaption>
                                <h3>STRATEGY 5</h3>
                                <h6> Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices</h6>
                            </figcaption>
                        </figure>
                    </Col>
                    <Col style={{ width:"50%" }}> 
                       
                        <figure className="c4-izmir c4-border-cc-2">
                            <img src={creative} alt="hover effect" />
                            <figcaption>
                                <h3>STRATEGY 6</h3>
                                <h6> Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices</h6>
                            </figcaption>
                        </figure>
                    </Col>
                </Row>
            </div>
            <div className="footer">
                <Col >
                    <NavLink >Fcebook</NavLink>
                    <NavLink>Twitter</NavLink>
                    <NavLink>LinkedIn</NavLink>
                    <NavLink>Instagram</NavLink>
                </Col>
                <hr style={{color:"#fff",height:"5px", width:"80%", align:'center'}}/>
            </div>
        </div>
     );
}
 
export default Homepage;