import React from 'react';
import {
  Navbar,
  NavbarBrand, Row, Col} from 'reactstrap';
import './index.css';
import CardBS4 from '../../components/CardBS4';

export default class DestinationFavoritPage extends React.Component {

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" className="flex-container">
          <div>
            <i className="material-icons">arrow_back</i>
            <NavbarBrand href="/">Destinasi Favoritku</NavbarBrand>
          </div>
          <div>
            <i className="material-icons">search</i>
          </div>
        </Navbar>
        <div className="container">
        <Row>
          <Col sm="6" md="6" xs="6" className="mt-3">
            <CardBS4/>
          </Col>
          <Col sm="6" md="6" xs="6" className="mt-3">
            <CardBS4/>
          </Col>
          <Col sm="6" md="6" xs="6" className="mt-3">
            <CardBS4/>
          </Col>
        </Row>
        </div>
      </div>
    );
  }
}