import React, { Component } from 'react';
import { Jumbotron, Button, 
        Row, Col, Container,
        Card, CardImg, CardBody, CardTitle
      } from 'reactstrap';
import './index.css';
import qrIcon from '../../assets/qr-icon.png';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
  }

  render() {
    return (
      <Container>
        {/* Hero Section */}
        <Row>
          <Col sm={{offset: 0,  size: 3}}></Col>
          <Col sm={{offset: 0,  size: 6}} className="container">
            <Jumbotron className="jumbotron-home">
              <Row>
                <h1 className="jumbotron-title">Selamat datang di Bandung Discovery</h1>
              </Row>
              <Row>
                <p className="jumbotron-description">Temukan destinasi wisata kreatif di Bandung</p>
              </Row>
              <Row>
                <br/>
                <Button className="jumbotron-button" color="primary" size="sm">Selengkapnya</Button>
              </Row>
            </Jumbotron>          
          </Col>
          <Col sm={{offset: 0,  size: 3}}></Col>
        </Row>
        {/* Cards Section */}
        <Row>
          <Col xs="0" sm={{offset: 0,  size: 3}}></Col>
          <Col sm={{offset: 0,  size: 2}} className="container">
            <Card className="card-container">
              <CardBody>
                <CardImg className="card-icon" src={qrIcon}></CardImg>
                <CardTitle className="card-title">Card Title</CardTitle>
              </CardBody>
            </Card>
          </Col>
          <Col sm={{offset: 0,  size: 2}} className="container">
            <Card className="card-container">
              <CardBody>
                <CardImg className="card-icon" src={qrIcon}></CardImg>
                <CardTitle className="card-title">Card Title</CardTitle>
              </CardBody>
            </Card>
          </Col>
          <Col sm={{offset: 0,  size: 2}} className="container">
            <Card className="card-container">
              <CardBody>
                <CardImg className="card-icon" src={qrIcon}></CardImg>
                <CardTitle className="card-title">Card Title</CardTitle>
              </CardBody>
            </Card>
          </Col>
          <Col xs="0" sm={{offset: 0,  size: 3}}></Col>
        </Row>
      </Container>  
      // 
    );
  }
}


export default Example;