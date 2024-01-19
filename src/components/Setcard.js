import React from "react";
import docjson from "../data/doc.json";
import { Card } from 'react-bootstrap';




function Setcard() {
  return (
    <div className="img">
        {docjson.map((doc, index) => (
                <div className="img__doc" key={`${doc}-${index}`}>
                      <Card className="img__doc__lumn">
                          <Card.Img src={doc.cover} />
                          <div className="img__doc__lumn__p2">
                          </div>
                          <div className="img__doc__lumn__p2__title">
                            { doc.title}
                          </div>
                      </Card>
                </div>
        ))}
    </div>

  );
}

export default Setcard;