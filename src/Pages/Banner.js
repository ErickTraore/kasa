import React from "react";

import '../sass/mains.scss';

function Banner(props) {
    return( 
        <div className="banner">
            <div className="banner__section">                
                <div className="banner__section__masqgroup">
                        <img  
                            srcSet={`
                            ${props.small} 320w,
                            ${props.medium} 425w, 
                            ${props.large} 768w, 
                            ${props.xlarge} 1240w
                            `}
                            src={`${props.medium}`} alt=""
                            sizes={`(max-width: 320px) 320px, (max-width: 425px) 425px, (max-width: 768px) 768px, (max-width: 1240px) 1240 `}
                        />
                    <div className="banner__section__texte">
                            <p className="banner__section__texte__content">
                                {props.texte}
                            </p> 
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Banner;