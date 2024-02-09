import React from "react";
import docjson from "../data/doc.json";
import { useParams} from "react-router-dom";
import { Card } from 'react-bootstrap';
import arrowL from '../assets/icons/arroLeft.png';
import arrowR from '../assets/icons/arrowRigth.png';
import myStarc from '../assets/icons/vectorStarc.png';
import myStarn from '../assets/icons/vectorStarn.png';
import { useState, useEffect } from "react";
import Accordeon from "./Accordeon";
import Rating from "./Rating";

console.log(docjson);
function getIndex(id) {
    return docjson.findIndex(obj => obj.id === id);
}
 
const Appartement = () => {
    const params = useParams()
    const id = params.id
    const myId = getIndex(id);
    const [count, setCount] = useState(myId);
    let dataItem = docjson[count]

 // affichage  séquentielle des images ascendante ou descendante 
  const handleClickRigth = (e) => {
    e.preventDefault();
    if(count >= 19){
        setCount(count => count - 19)
    }
    else{ 
        setCount(count => count + 1)
    }
  }
  const handleClickLeft = (e) => {
    e.preventDefault()
    if(count <= 0){
        setCount(count => count + 19)
    }
    else{ 
        setCount(count => count - 1)
    }
  }

//   useEffect(() => {
//       const rates = document.getElementsByClassName('appartement__describe__text__rowRigth__rate__star__image')
//       const myRate = dataItem.rating;
//       console.log(myRate)
//       for (let i = 0; i < rates.length; i++) {
//         console.log(rates[i]);
//       };
//   })

  // affichage des scores attribuées par les clients
 

// console.log(myId)
// console.log(count)
// console.log(docjson[count])
// console.log(dataItem)
// console.log(card.id)
// console.log(dataItem.id)

return (
        (   
    <div>
       
                <div className="appartement">
                    <div className="appartement__card">
                        <Card className="appartement__card__img">
                                <Card.Img src={dataItem.cover} />
                        </Card>
                        <div className="appartement__icon">
                                <button className="appartement__icon__left" onClick={handleClickLeft}> 
                                    <img src={arrowL} alt="Trees" height="200" />
                                </button>  
                                <button className="appartement__icon__rigth" onClick={handleClickRigth}> 
                                    <img src={arrowR} alt="Trees" height="200" />
                                </button> 
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
                                        <div className="appartement__describe__text__rowLeft__tags__vectors">
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
                                <div>
             <div>
                <Rating rating = {dataItem.rating} />
            </div>

        </div>
                                
                                </div>
                            </div>
                        </div>
                        <div className="appartement__describe__collapse">
                            <div>
                                <Accordeon 
                                title = "Description"
                                content = {dataItem.description}
                                />
                            </div>
                         
                            <div>
                                <Accordeon 
                                title = "Equipements"
                                content = {dataItem.description}
                                />
                            </div>
                        </div>
                </div>
            </div>
    </div>
         )
)}

export default Appartement;
