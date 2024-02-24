import React from "react";
import Accordeon from './Accordeon';
import Banner from "./Banner";
const medium = require ("../assets/body/imgKasa425.jpeg");
const large = require ('../assets/body/imgKasa768.jpeg');
const xlarge = require('../assets/body/imgKasa1024.jpeg');
const small = require('../assets/body/imgKasa320.jpeg');


const Apropos = () => {
    return (
    <div className='propos'>
         <div className="group">
            <Banner 
              small={small}
              medium={medium}
              large={large}
              xlarge={xlarge}
              texte=""
            />
        </div>

        <div className='propos__accordeon'>
          <Accordeon 
          title="Fiabilité" 
          content="contenu 1" 
          />
        </div>
        <div className='propos__accordeon'>
          <Accordeon 
          title="Respect" 
          content="contenu 2" 
          />
        </div>
        <div className='propos__accordeon' >
          <Accordeon 
          title="Service" 
          content="contenu 3" 
          />
        </div>
        <div className='propos__accordeon'>
          <Accordeon 
          title="Sécurité" 
          content="contenu 4" 
          />  
        </div>
    </div>
    )
  };
  
  export default Apropos;