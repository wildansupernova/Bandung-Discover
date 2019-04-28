import React, { Component } from 'react';
import { Jumbotron, Button, 
        Row, Col, Container,
        Card, CardImg, CardBody, CardTitle
      } from 'reactstrap';
import './index.css';
import qrIcon from '../../assets/qr-icon.png';
import voucherIcon from '../../assets/voucher-icon.png';
import destinationIcon from '../../assets/destination-icon.png';
import CardBS4 from '../CardBS4';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
  }

  render() {
    return (
      <Container className="Home">
        {/* Hero Section */}
        <Row>
          <Col sm={{offset: 0,  size: 3}}></Col>
          <Col sm={{offset: 0,  size: 6}} className="jumbotron-container">
            <Jumbotron className="jumbotron-home">
              <h1 className="jumbotron-title">Selamat datang di Bandung Discovery</h1>
              <p className="jumbotron-description">Temukan destinasi wisata kreatif di Bandung</p>
              <br/>
              <Button className="jumbotron-button" color="primary" size="sm">Selengkapnya</Button>
            </Jumbotron>          
          </Col>
          <Col sm={{offset: 0,  size: 3}}></Col>
        </Row>
        {/* Cards Section */}
        <Row>
          <Col xs={{offset: 0, size: 0}} sm={{offset: 0,  size: 3}} md={{offset: 0,  size: 3}}></Col>
          <Col  className="card-container" xs={{offset: 0,  size: 3}} sm={{offset: 0,  size: 2}} md={{offset: 0,  size: 2}}>
            <Card className="card-wrapper">
              <CardBody>
                <CardImg className="card-icon" src={qrIcon}></CardImg>
                <CardTitle className="card-title">Scan Voucher</CardTitle>
              </CardBody>
            </Card>
          </Col>
          <Col className="card-container" xs={{offset: 0,  size: 3}} sm={{offset: 0,  size: 2}} md={{offset: 0,  size: 2}}>
            <Card className="card-wrapper">
              <CardBody>
                <CardImg className="card-icon" src={voucherIcon}></CardImg>
                <CardTitle className="card-title">Daftar Voucherku</CardTitle>
              </CardBody>
            </Card>
          </Col>
          <Col className="card-container" xs={{offset: 0,  size: 3}} sm={{offset: 0,  size: 2}} md={{offset: 0,  size: 2}}>
            <Card className="card-wrapper">
              <CardBody>
                <CardImg className="card-icon" src={destinationIcon}></CardImg>
                <CardTitle className="card-title">Destinasi Favoritku</CardTitle>
              </CardBody>
            </Card>
          </Col>
          <Col xs={{offset: 0, size: 1}} sm={{offset: 0,  size: 3}} md={{offset: 0,  size: 3}}></Col>
        </Row>
        {/* Destination Section */}
        <Container className="destination-wrapper">
          <Row>
            <Col xs="0" sm="3" md="3"></Col>
            <Col sm="6" md="6" xs="6" className="destination-title">Destinasi Terfavorit</Col>
            <Col>
              <a xs="6" className="destination-href">Selengkapnya >></a>
            </Col>
            <Col xs="0" sm="3" md="3"></Col>
          </Row>
          <div className="container">
            <Row>
              <Col sm="6" md="6" xs="6" className="mt-3">
                <CardBS4 title="Saung Udjo"/>
              </Col>
              <Col sm="6" md="6" xs="6" className="mt-3">
                <CardBS4 title="Kampung Gajah"/>
              </Col>
            </Row>
          </div>
        </Container>
      </Container>  
    );
  }
}


export default Home;