import React from 'react';
import {
  Navbar,
  NavbarBrand, Row, Col} from 'reactstrap';
import './DestFav.css';
import CardBS4 from '../../components/CardBS4';

export default class DestinationFavoritPage extends React.Component {

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" className="flex-container">
          <div>
            <i className="material-icons">arrow_back</i>
            <NavbarBrand href="/" className="font-quicksand" style={{fontWeight : 'bold'}}>Destinasi Favoritku</NavbarBrand>
          </div>
          <div>
            <i className="material-icons">search</i>
          </div>
        </Navbar>
        <div className="container">
        <Row>
          <Col sm="6" md="6" xs="6" className="mt-3">
            <CardBS4 title="Saung Udjo" linkImage="https://www.mongabay.co.id/wp-content/uploads/2018/03/Udjo2.jpg"/>
          </Col>
          <Col sm="6" md="6" xs="6" className="mt-3">
            <CardBS4 title="Kampung Pasundan" linkImage="https://www.ayobandung.com/images-bandung/post/articles/2015/12/08/5506/cp1eliiukaaz3ea.jpg"/>
          </Col>
          <Col sm="6" md="6" xs="6" className="mt-3">
            <CardBS4 title="Kampung Wayang" linkImage="http://www.infobdg.com/v2/wp-content/uploads/2015/03/6-1024x768.jpg"/>
          </Col>
          <Col sm="6" md="6" xs="6" className="mt-3">
            <CardBS4 title="Kampung Budaya Sukasari" linkImage="https://www.ayobandung.com/images-bandung/post/articles/2018/11/10/40381/kampung_budaya_sukasari.jpg"/>
          </Col>
        </Row>
        </div>
      </div>
    );
  }
}