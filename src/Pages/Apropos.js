import React from "react";
import Accordeon from './Accordeon';


const Apropos = () => {
 
  
 
  
    return (
    <div className='propos'>
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