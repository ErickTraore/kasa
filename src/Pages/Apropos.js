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
          title="titre 1" 
          content="contenu 1" 
          />
        </div>
        <div className='propos__accordeon'>
          <Accordeon 
          title="titre 2" 
          content="contenu 2" 
          />
        </div>
        <div className='propos__accordeon' >
          <Accordeon 
          title="titre 3" 
          content="contenu 3" 
          />
        </div>
        <div className='propos__accordeon'>
          <Accordeon 
          title="titre 4" 
          content="contenu 4" 
          />  
        </div>
    </div>
    )
  };
  
  export default Apropos;