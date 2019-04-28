import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const CardBS4 = (props) => {
  const { title } = props;
  return (
    <div>
      <Link to="/detaildestinasi" style={{ textDecoration: 'none', color: 'black' }}>
      <Card className="height-div">
        <CardImg top width="100%" src={props.linkImage} alt="Card image cap" className="height-card" />
        <CardBody>
            <CardTitle className="text-card-2 font-quicksand">{title}</CardTitle>
          <div className="color-green-light">
            <i className="material-icons text-card-1">access_time</i>
            <span  className="text-card-1 ml-2 font-comfortaa">Setiap Hari, 10.00-22.00 WIB</span>
          </div>
          <div className="color-purple-light">
            <i className="material-icons text-card-1">location_on</i>
            <span className="text-card-1 ml-2 font-comfortaa">{props.lokasi}</span>
          </div>
          {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
          {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
        </CardBody>
      </Card>
      </Link>
    </div>
  );
};

export default CardBS4;