import Banner from "./Banner";
import React from "react";
import docjson from "../data/doc.json";
import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import small from '../assets/entete/mAccueil-320.png';
import medium from '../assets/entete/mAccueil-425.png';
import large from '../assets/entete/mAccueil-768.png';
import xlarge from '../assets/entete/mAccueil-1240.png';
import '../sass/mains.scss';
function Setcard() {

  return (
    <div className="group">
        <div className="group">
            <Banner 
              small={small}
              medium={medium}
              large={large}
              xlarge={xlarge}
              texte="Chez vous, partout et ailleurs"
            />
        </div>
        <div className="cardbody">
          <div className="cardbody__card">
              {docjson.map((doc, index) => (
                      <Link to={"/Appartement/"+doc.id} className="cardbody__card__doc" key={`${doc}-${index}`} >   
                            <Card className="cardbody__card__doc__lumn">
                                <Card.Img srcSet={`
                                /imgs/${doc.id}/small/img.jpeg 320w,
                                /imgs/${doc.id}/medium/img.jpeg 425w,
                                /imgs/${doc.id}/large/img.jpeg 768w,
                                /imgs/${doc.id}/xlarge/img.jpeg 1024w,
                                /imgs/${doc.id}/user/img.jpeg 1250w,
                                `}
                                sizes={`
                                (max-width: 320px) 320px, 
                                (max-width: 425px) 425px, 
                                (max-width: 768px) 768px, 
                                (max-width: 1024px) 1024px, 
                                1250px `}
                                src={`/imgs/${doc.id}/user/img.jpeg`} alt=""
                                />
                                <div className="cardbody__card__doc__lumn__p2__title">
                                  { doc.title}
                                </div>
                                <div className="cardbody__card__doc__maskbody"></div>

                            </Card>
                      </Link>
              ))}
          </div>
        </div>
    </div>
  );
}
export default Setcard;