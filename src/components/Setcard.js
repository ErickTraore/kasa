import React from "react";
import docjson from "../data/doc.json";
import { Card } from 'react-bootstrap';




function Setcard() {
  return (
    <div className="cardbody">
      <div className="cardbody__card">
          {docjson.map((doc, index) => (
                  <div className="cardbody__card__doc" key={`${doc}-${index}`}>
                        <Card className="cardbody__card__doc__lumn">
                            <Card.Img src={doc.cover} />
                            <div className="cardbody__card__doc__lumn__p2">
                            </div>
                            <div className="cardbody__card__doc__lumn__p2__title">
                              { doc.title}
                            </div>
                        </Card>
                  </div>
          ))}
      </div>
    </div>

  );
}

export default Setcard;