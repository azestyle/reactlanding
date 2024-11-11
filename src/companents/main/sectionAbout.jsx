import React from "react";


function About(){
    return(
        <section id="about">
          <div className="container">
            <div className="about-box">
                <div className="about-img">
                    <img src="https://react-landing-page-template-93ne.vercel.app/img/about.jpg" alt="" />
                </div>
                <div className="about-txt">
                    <h1>ABOUT US</h1>
                    <div className="about-underline">
                    <p className="underline"></p>
                    </div>
                    <p className="about-lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                         consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                     <p className="about-why">Why Choose Us?</p> 
                     <div className="about-list">
                        <div className="list-left">
                        <ul>
                            <li>Lorem ipsum dolor</li>
                            <li>Tempor incididunt</li>
                            <li>Lorem ipsum dolor</li>
                            <li>Incididunt ut labore</li>
                        </ul>
                        </div>
                        <div className="list-righ">
                          <ul>
                            <li>Aliquip ex ea commodo</li>
                            <li>Lorem ipsum dolor</li>
                            <li> Exercitation ullamco</li>
                            <li>Lorem ipsum dolor</li>
                          </ul>
                        </div>
                        </div>   
                </div>
            </div>
          </div>
        </section>
    )
}


export default About;