import React from "react";
import { useState } from "react";
import arrowUp from '../assets/icons/au.png';

const Accordeon = (props) => {
const[active, setActive] = useState(false)
const handleToggle = (e) =>{
   console.log(e);
    setActive(current => !current);
    const element = e.target
    element.classList.toggle("active");
}
   return (
        <div className="accordeon">
            <div className="accordeon__div" >
                <div className="accordeon__div__banner" >
                    <div className="accordeon__div__banner__title"  >
                        {props.title} 
                    </div>
                    <div className="accordeon__div__banner__icon" > 
                        <img className="accordeon__div__banner__icon__image" src={arrowUp} alt="" onClick= {handleToggle} />
                    </div> 
                </div>
            </div>
            {active && (
                <div className="accordeon__content">
                    <div className="accordeon__content__text">
                            {props.content}
                    </div>
                </div>
            )}
        </div>
        )
    };

export default Accordeon;
