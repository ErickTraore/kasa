import React from "react";
import docjson from "../data/doc.json";
import { useParams} from "react-router-dom";
import { Card } from 'react-bootstrap';
import arrowL from '../assets/icons/arroLeft.png';
import arrowR from '../assets/icons/arrowRigth.png';
import { useState } from "react";
import Accordeon from "./Accordeon";
import Rating from "./Rating";

console.log(docjson);
function getIndex(id) {
    return docjson.findIndex(obj => obj.id === id);
}
 
const Appartement = () => {
    
    const params = useParams()
    const id = params.id        // réference de l'image
    const myId = getIndex(id);  // l'identifiant de l'imame
    // const [count, setCount] = useState(myId);
    const count =  myId;
    let dataItem = docjson[count]
    console.log(id);
    console.log(myId);
    console.log(dataItem);
    console.log(dataItem.pictures);
    let totalPictures = dataItem.pictures.length; //qté d'img à visualiser.
    console.log(totalPictures);
    const [countPict, setCountPict] = useState(0);
    console.log(countPict);
  

 // affichage  séquentielle des images ascendante ou descendante 
  const handleClickRigth = (e) => {
    e.preventDefault();
    if(countPict >= (totalPictures - 1)){
        setCountPict(countPict => countPict - (totalPictures - 1))
    }
    else{ 
        setCountPict(countPict => countPict + 1)
    }
  }
  const handleClickLeft = (e) => {
    e.preventDefault()
    if(countPict <= 0){
        setCountPict(countPict => countPict + (totalPictures - 1))
    }
    else{ 
        setCountPict(countPict => countPict - 1)
    }

  }
return (
        (   
    <div>
                <div className="appartement">
                    <div className="appartement__card">
                        <Card className="appartement__card__img">
                                <Card.Img src={dataItem.pictures[countPict]} />
                        </Card>
                        <div className="appartement__icon">
                                <button className="appartement__icon__left" onClick={handleClickLeft}> 
                                    <img src={arrowL} alt="Trees" height="200" />
                                </button>  
                                <button className="appartement__icon__rigth" onClick={handleClickRigth}> 
                                    <img src={arrowR} alt="Trees" height="200" />
                                </button> 
                        </div>
                        <div className="appartement__totalPictures">
                            <div className="appartement__totalPictures__nbre">
                              {countPict + 1} / {totalPictures}
                            </div>
                        </div>

                    </div>
                    <div className="appartement__describe">
                        <div className="appartement__describe__text">
                            <div className="appartement__describe__text__rowLeft">
                                <div className="appartement__describe__text__rowLeft__title">
                                    <div className="appartement__describe__text__rowLeft__title__content">
                                        <p>{dataItem.title}</p>
                                    </div>
                                    <div className="appartement__describe__text__rowLeft__title__location">
                                        <p>{dataItem.location}</p>
                                    </div>
                                </div>
                                <div className="appartement__describe__text__rowLeft__tags">
                                {dataItem.tags.map((doc) => (
                                        <div key= {doc} className="appartement__describe__text__rowLeft__tags__vectors">
                                            <div className="appartement__describe__text__rowLeft__tags__vectors__items">
                                                <div className="appartement__describe__text__rowLeft__tags__vectors__items__item">
                                                    {doc}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div> 
                            <div className="appartement__describe__text__rowRigth">
                                <div className="appartement__describe__text__rowRigth__host">
                                    <div className="appartement__describe__text__rowRigth__host__identity">
                                        <div className="appartement__describe__text__rowRigth__host__identity__name">
                                            <div>{dataItem.host.name}</div>
                                        </div>
                                        <div className="appartement__describe__text__rowRigth__host__identity__circle">
                                            <Card className="appartement__describe__text__rowRigth__host__identity__circle__img">
                                                    <Card.Img src={dataItem.host.picture} />
                                            </Card>
                                        </div>
                                    </div>
                                </div>
                                <div className="appartement__describe__text__rowRigth__rate">
                                    <Rating rating = {dataItem.rating} />
                                </div>
                            </div>
                        </div>
                        <div className="appartement__describe__collapse">
                            <div className="appartement__describe__collapse__describe">
                                <Accordeon 
                                title = "Description"
                                content = {dataItem.description}
                                />
                            </div>
                         
                            <div className="appartement__describe__collapse__equipement">
                                <Accordeon 
                                title = "Equipements"
                                content = {<ul className="accordeon__div__content__ul">
                                            {dataItem.equipments.map((equipement, index) => (
                                              <li key = {index} >{equipement}</li>  
                                            ))}
                                          </ul>}

                                
                                />
                            </div>
                        </div>
                    </div>
            </div>
    </div>
         )
);
                                }
export default Appartement;
