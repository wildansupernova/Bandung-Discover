import React from 'react';
import {
  Navbar,
  NavbarBrand, Row, Col} from 'reactstrap';
import './index.css';
import CardBS4_Voucher from '../../components/CardBS4-Voucher';
import axios from 'axios';

export default class DestinationFavoritPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listVoucher: [],
    };

    this.onRefresh = this.onRefresh.bind(this);
  }

  componentDidMount(){
    const touristToken = localStorage.getItem('touristToken');
    axios({
      method: 'get',
      url: 'http://192.168.43.138:3000/voucher/5cc552bcdd25a709d9d98015',
      headers: {
        'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYzU1MmJjZGQyNWE3MDlkOWQ5ODAxNSIsImlhdCI6MTU1NjQzNTY0NCwiZXhwIjoxNTU2NTIyMDQ0fQ.48UYdDxf0m5Rl7jsEtBsIR-X9dYlMUMZRMnFsp70VUs',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then((response) => {
      this.setState({
        ...this.state,
        listVoucher: response.data.data,
      });
    });
  }

  onRefresh() {
    const touristToken = localStorage.getItem('touristToken');
    axios({
      method: 'get',
      url: 'http://192.168.43.138:3000/voucher/5cc552bcdd25a709d9d98015',
      headers: {
        'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYzU1MmJjZGQyNWE3MDlkOWQ5ODAxNSIsImlhdCI6MTU1NjQzNTY0NCwiZXhwIjoxNTU2NTIyMDQ0fQ.48UYdDxf0m5Rl7jsEtBsIR-X9dYlMUMZRMnFsp70VUs',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then((response) => {
      this.setState({
        ...this.state,
        listVoucher: response.data.data,
      });
    });
  }

  renderListVoucher(){
    const { listVoucher } = this.state;
    const optionsDate = { year: 'numeric', month: 'long', day: 'numeric'};
    return listVoucher.map((el) => {
      const { destination: { name }, diskon, expired } = el;
      const dateExpired = new Date(expired);
      return (          
      <Col sm="6" md="6" xs="6" className="mt-3" key={el._id}>
        <CardBS4_Voucher idVoucher={el._id} onRefresh={this.onRefresh} title={name} date={dateExpired.toLocaleDateString('id-ID', optionsDate)} diskon={diskon}/>
      </Col>
      );
    });
  }

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
          {/* <Col sm="6" md="6" xs="6" className="mt-3">
            <CardBS4_Voucher title="Saung Udjo" date="23 Oktober 2019" diskon={30}/>
          </Col>
          <Col sm="6" md="6" xs="6" className="mt-3">
            <CardBS4_Voucher title="Kampung Gajah" date="24 Oktober 2019" diskon={30}/>
          </Col>
          <Col sm="6" md="6" xs="6" className="mt-3">
            <CardBS4_Voucher title="Garasi" date="25 Oktober 2019" diskon={50}/>
          </Col> */}
          {this.renderListVoucher()}
        </Row>
        </div>
      </div>
    );
  }
}