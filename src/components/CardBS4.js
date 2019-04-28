import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import './CardBS4.css'

const CardBS4 = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="https://www.mongabay.co.id/wp-content/uploads/2018/03/Udjo2.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle className="text-card-2">Saung Angklung Udjo</CardTitle>
          <div>
            <i className="material-icons text-card-1">access_time</i>
            <span  className="text-card-1 ml-2">Setiap Hari, 10.00-22.00 WIB</span>
          </div>
          <div>
            <i className="material-icons text-card-1">location_on</i>
            <span className="text-card-1 ml-2">Cicahuem Bandung</span>
          </div>
          {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
          {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
        </CardBody>
      </Card>
    </div>
  );
};

export default CardBS4;