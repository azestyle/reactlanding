import React from "react";
import Fcart from "./featurecart";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments} from '@fortawesome/free-regular-svg-icons';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
let iconBox=[
    {value: <FontAwesomeIcon icon={faComments} className="font-icon"/>},
    {value: <FontAwesomeIcon icon={faBullhorn} className="font-icon"/>},
    {value: <FontAwesomeIcon icon={faUserGroup} className="font-icon"/>},
    {value: <FontAwesomeIcon icon={faWandMagicSparkles} className="font-icon"/>}
]

function Feature(){

    return(
        <section id="feature">
            <div className="container">
                <div className="Feature">
                    <h1 className="Features">FEATURES</h1>
                    <p className="underline"></p>
                 <div className="feature-gr">
                 
                 {iconBox.map((el,index)=>{
                   return <Fcart key={index} count={el.value}/>
                 })}
                 </div>
                </div>
            </div>
        </section>
    )
}

export default Feature;
