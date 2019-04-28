import React from 'react';
import {
  Navbar,
  NavbarBrand, Row, Col, Card, CardTitle, CardText} from 'reactstrap';
import './index.css';
import { Link } from 'react-router-dom/cjs/react-router-dom';


export default class DetailDestinationPage extends React.Component {

  componentDidMount(){
    document.body.style.background = "#EFEFEF";
  }

  render() {
    return (
      <div style={{overflow: 'hidden', backgroundColor: '#EFEFEF'}}>
        <div className="row justify-content-md-center">
          <div className="col-md-7 pr-0 dest-container pl-0">
            <img width="100%" src="https://www.mongabay.co.id/wp-content/uploads/2018/03/Udjo2.jpg" alt="Card image cap" class="card-img-top"/>
              <Navbar light expand="md" className="flex-container dest-top-right">
                <Link to="/favoritdestinasi" style={{ textDecoration: 'none', color: 'white' }}>
                  <div>
                    <i className="material-icons">arrow_back</i>
                  </div>
                </Link>
                  {/* <NavbarBrand href="/">Destinasi Favoritku</NavbarBrand> */}
              </Navbar>
          </div>
        </div>
        <Card style={{backgroundColor: "#FAFAFA",marginTop:'8px', borderRadius:'0'}}body>
          <CardTitle className="font-quicksand" style={{fontWeight : 'bold'}} >Saung Angklung Udjo</CardTitle>
          <div>
            <i className="color-green-light material-icons text-card-1">access_time</i>
            <span  className="color-green-light text-card-1 ml-2 font-comfortaa">Setiap Hari, 10.00-22.00 WIB</span>
          </div>
          <div>
            <i className="color-green-light material-icons text-card-1">location_on</i>
            <span className="color-green-light text-card-1 ml-2 font-comfortaa">Cicahuem Bandung</span>
          </div>
          <div className="flex-container" style={{display:'flex', flexDirection:'column'}}>
            <div className="color-purple-light" style={{alignSelf:'flex-end'}}>Rp. 50.000,00</div>
          </div>
        </Card>

        <Card style={{backgroundColor: "#FAFAFA",marginTop:'8px', borderRadius:'0'}}body>
          <CardTitle className="font-quicksand" style={{fontWeight : 'bold'}}>Deskripsi</CardTitle>
          <CardText className="font-comfortaa">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</CardText>
        </Card>
      </div>
    );
  }
}