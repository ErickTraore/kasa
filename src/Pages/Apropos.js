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
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." 
          />
        </div>
        <div className='propos__accordeon'>
          <Accordeon 
          title="Respect" 
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." 
          />
        </div>
        <div className='propos__accordeon' >
          <Accordeon 
          title="Service" 
          content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question" 
          />
        </div>
        <div className='propos__accordeon'>
          <Accordeon 
          title="Sécurité" 
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." 
          />  
        </div>
    </div>
    )
  };
  
  export default Apropos;