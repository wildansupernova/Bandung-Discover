import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const CardMostFavorite = (props) => {
  const { title } = props;
  return (
      <Link to="/detaildestinasi" style={{ textDecoration: 'none', color: 'black' }}>
      <Card>
        <CardImg top width="100%" src={props.linkImage} alt="Card image cap" />
        <CardBody>
          <CardTitle className="text-card-2">{title}</CardTitle>
          <div>
            <i className="material-icons text-card-3">location_on</i>
            <span className="text-card-3 ml-2">{props.lokasi}</span>
          </div>
          {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
          {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
        </CardBody>
      </Card>
      </Link>
  );
};

export default CardMostFavorite;