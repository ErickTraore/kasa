import React from "react";

import '../sass/mains.scss';

function Banner(props) {
    return( 
        <div className="body">
        <div className="body__section">                
           <div className="body__section__masqgroup">
           <img  srcSet={`${props.small} 320w,
           ${props.medium} 425w, 
           ${props.large} 768w, 
           ${props.xlarge} 1240w`
               }
   src={`${props.medium}`} alt=""
   sizes={`(max-width: 321px) 320px, (max-width: 426px) 425px, (max-width: 769px) 768px, (max-width: 1240px) 1241 `}

               
               />
               <div className="body__section__texte">
                       <p className="body__section__texte__content">
                           {props.texte}
                       </p> 
               </div>
           </div>
       </div>
   </div>
  )
}

export default Banner;