import React, { Component } from 'react';
import { Jumbotron, Button, 
        Row, Col, Container,
        Card, CardImg, CardBody, CardTitle, CardText,
        Navbar, NavbarBrand
      } from 'reactstrap';
import './index.css';
import qrIcon from '../../assets/qr-icon.png';
import voucherIcon from '../../assets/voucher-icon.png';
import destinationIcon from '../../assets/destination-icon.png';
import CardMostFavorite from '../CardMostFavorite';
import { bubble as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom/cjs/react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
  }

  showSettings (event) {
    event.preventDefault();
  }

  render() {
    const  { pathname } = window.location;
    return (
      <Container className="Home">
        <Row>
          <Menu noOverlay width="40%">
            <p id="home" className="menu-item" href="/">Home</p>
            <p id="about" className="menu-item" href="/about">About</p>
            <p onClick={ this.showSettings } className="menu-item--small" href="">Settings</p>
          </Menu>
        </Row>
        {/* Hero Section */}
        <Row>
          <Col sm={{offset: 0,  size: 6}} className="jumbotron-container">
            <Jumbotron className="jumbotron-home">
              {(pathname == '/') ? <h1 className="jumbotron-title">Selamat datang di Bandung Discovery</h1> : 
                <h1 className="jumbotron-title">Selamat datang di Bandung Discovery Manager</h1>
              }
              {(pathname == '/') ? <p className="jumbotron-description">Temukan destinasi wisata kreatif di Bandung</p>
                : <p className="jumbotron-description">Kelola destinasi wisata kreatif Anda</p>
              }
              <br/>
              {(pathname == '/') ? (
                <Link to='/favoritdestinasi'><Button className="jumbotron-button" color="primary" size="sm">Selengkapnya</Button></Link>
              ): <br/>}
            </Jumbotron>          
          </Col>
        </Row>
        {(pathname == '/') ? 
          // Cards section
          <Row className="d-flex justify-content-center">
            <Col  className="card-container" xs={{offset: 0,  size: 3}} sm={{offset: 0,  size: 2}} md={{offset: 0,  size: 2}}>
              <Card className="card-wrapper">
                <CardBody>
                  <CardImg className="card-icon" src={qrIcon}></CardImg>
                  <CardTitle className="card-title">Scan Voucher</CardTitle>
                </CardBody>
              </Card>
            </Col>
            <Col className="card-container" xs={{offset: 0,  size: 3}} sm={{offset: 0,  size: 2}} md={{offset: 0,  size: 2}}>
              <Link to="/myvoucher">
                <Card className="card-wrapper">
                  <CardBody>
                    <CardImg className="card-icon" src={voucherIcon}></CardImg>
                    <CardTitle className="card-title"><a href="">Daftar Voucherku</a></CardTitle>
                  </CardBody>
                </Card>
              </Link>
            </Col>
            <Col className="card-container" xs={{offset: 0,  size: 3}} sm={{offset: 0,  size: 2}} md={{offset: 0,  size: 2}}>
            <Col xs={{offset:2, size:1}}></Col>
              <Link to="/favoritdestinasi">
                <Card className="card-wrapper">
                  <CardBody>
                    <CardImg className="card-icon" src={destinationIcon}></CardImg>
                    <CardTitle className="card-title"><a href="">Destinasi Favoritku</a></CardTitle>
                  </CardBody>
                </Card>
              </Link>
            </Col>
          </Row>
        : 
        <Container>
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle className="card-title-admin">Anda memiliki</CardTitle>
                <CardText className="card-title-admin">stok 50 voucher</CardText>
                <Row>
                  <Col sm="3" xs="3">
                    <Button className="card-button" size="sm">Tambah</Button>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
        }
        {(pathname == '/') ? 
            // destination section
            <Container className="destination-wrapper">
              <Row>
                <Col xs="0" sm="3" md="3">
                </Col>
                <Col sm="6" md="6" xs="6" className="destination-title">Destinasi Terfavorit</Col>
                <Col>
                  <a xs="6" className="destination-href">Selengkapnya >></a>
                </Col>
                <Col xs="0" sm="3" md="3"></Col>
              </Row>
              <div className="container">
                <Row>
                  <Col sm="6" md="6" xs="6" className="mt-3">
                    <CardMostFavorite title="Saung Udjo"/>
                  </Col>
                  <Col sm="6" md="6" xs="6" className="mt-3">
                    <CardMostFavorite title="Kampung Gajah"/>
                  </Col>
                </Row>
              </div>
            </Container>
          : // else
          // cards section
          <Container>
          <Row className="card-wrapper-admin">
              <Col xs={{offset: 0,  size: 6}} sm={{offset: 0,  size: 6}} md={{offset: 0,  size: 2}}>
                <Card>
                  <CardBody>
                    <CardImg src={qrIcon}></CardImg>
                    <CardTitle className="card-subtitle-admin">Scan Voucher</CardTitle>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={{offset: 0,  size: 6}} sm={{offset: 0,  size: 6}} md={{offset: 0,  size: 2}}>
                <Card>
                  <CardBody>
                    <CardImg src={voucherIcon}></CardImg>
                    <CardTitle className="card-subtitle-admin">Beri Voucher</CardTitle>
                  </CardBody>
                </Card>
              </Col>
          </Row>
          </Container>
        }
      </Container>  
    );
  }
}


export default Home;