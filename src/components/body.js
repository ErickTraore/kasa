import React from "react";
import small from '../assets/mAccueil-320.png';
import medium from '../assets/mAccueil-425.png';
import large from '../assets/mAccueil-768.png';
import xlarge from '../assets/mAccueil-1240.png';
import '../sass/mains.scss';

function Body() {
    return( 
        <div className="body">
             <div className="body__section">
                
                 <div className="body__section__masqgroup">
                 <img  srcSet={`${small} 320w, 
                               ${medium} 425w, 
                               ${large} 768w, 
                               ${xlarge} 1240w`
                                }
                    src={`${medium}`} alt=""
                    sizes={`(max-width: 321px) 320px, (max-width: 426px) 425px, (max-width: 769px) 768px, (max-width: 1240px) 1241`} />
                <div className="body__section__texte">
                    <p>Chez vous, partout et ailleurs
                    </p>
                 </div> 
             </div> 
        </div>
        </div>
  )
}

export default Body;