import React from "react";


function Header(){
    
    return(
        <header>
           <nav>
            <div className="container">
                <div className="landing-header">
                    <div className="np1">
                        <h1><a href="#">REACT LANDING PAGE</a></h1>
                    </div>
                    <div className="np2">
                        <ul>
                            <li><a href="#feature">FEATURE</a></li>
                            <li><a href="#about">ABOUT</a></li>
                            <li><a href="#ours">SERVICES</a></li>
                            <li><a href="#">GALLERY</a></li>
                            <li><a href="#">TESTIMONIALS</a></li>
                            <li><a href="#">TEAM</a></li>
                            <li><a href="#">CONTACT</a></li>
                        </ul>
                    </div>
                </div>
            </div>
           </nav>
        </header>
    )
       
    

}

export default Header;