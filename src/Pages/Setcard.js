import Banner from "./Banner";
import React from "react";
import docjson from "../data/doc.json";
import { Card } from 'react-bootstrap';
import {Link} from "react-router-dom";
import small from '../assets/mAccueil-320.png';
import medium from '../assets/mAccueil-425.png';
import large from '../assets/mAccueil-768.png';
import xlarge from '../assets/mAccueil-1240.png';
import '../sass/mains.scss';
function Setcard() {


  return (
    <div>
      <div className="group">
      <Banner 
      small={small}
      medium={medium}
      large={large}
      xlarge={xlarge}
      texte="Je suis deux yankee"
      />
      </div>
      <div className="cardbody">
        <div className="cardbody__card">
          
            {docjson.map((doc, index) => (
                    <Link to={"/Appartement/"+doc.id} className="cardbody__card__doc" key={`${doc}-${index}`} >   
                          <Card className="cardbody__card__doc__lumn">
                              <Card.Img src={doc.cover} />
                              <div className="cardbody__card__doc__lumn__p2__title">
                                { doc.title}
                              </div>
                          </Card>
                    </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
export default Setcard;