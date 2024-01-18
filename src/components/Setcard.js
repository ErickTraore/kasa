import React from "react";
import docjson from "../../doc.json";
import { Card } from 'react-bootstrap';
import '../../style/BasicExample.scss';
// import img1 from '../assets/Img.png';




function BasicExample() {
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

export default BasicExample;