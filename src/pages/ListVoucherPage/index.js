import React from 'react';
import {
  Navbar,
  NavbarBrand, Row, Col} from 'reactstrap';
import './index.css';
import CardBS4_Voucher from '../../components/CardBS4-Voucher';

export default class DestinationFavoritPage extends React.Component {

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" className="flex-container">
          <div>
            <i className="material-icons">arrow_back</i>
            <NavbarBrand href="/" className="font-quicksand" style={{fontWeight : 'bold'}} >Daftar Voucherku</NavbarBrand>
          </div>
          <div>
            <i className="material-icons">search</i>
          </div>
        </Navbar>
        <div className="container">
        <Row>
          <Col sm="6" md="6" xs="6" className="mt-3">
            <CardBS4_Voucher title="Saung Udjo" date="23 Oktober 2019" diskon={30}/>
          </Col>
          <Col sm="6" md="6" xs="6" className="mt-3">
            <CardBS4_Voucher title="Kampung Gajah" date="24 Oktober 2019" diskon={30}/>
          </Col>
          <Col sm="6" md="6" xs="6" className="mt-3">
            <CardBS4_Voucher title="Garasi" date="25 Oktober 2019" diskon={50}/>
          </Col>
        </Row>
        </div>
      </div>
    );
  }
}