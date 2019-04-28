import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import ModelQRCode from './ModalQRCode';

/* eslint react/no-multi-comp: 0, react/prop-types: 0 */


class CardBS4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.toggleRefreshModal = this.toggleRefreshModal.bind(this);

  }

  toggleModal() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  toggleRefreshModal() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const { title, date, diskon } = this.props;
  
    return (
      <div>
        <Card className="va-height-card">
          <CardImg top width="100%" src="https://www.mongabay.co.id/wp-content/uploads/2018/03/Udjo2.jpg" alt="Card image cap" />
          <CardBody style={{padding:'0.5rem'}}>
            <CardTitle className="text-card-2 font-quicksand va-font-bold">{title}</CardTitle>
            <div>
              <span  className="font-comfortaa color-green-light text-card-1">Berlaku s/d {date}</span>
            </div>
            <div>
              { diskon !== 0 && <span className="font-comfortaa color-purple-light text-card-1">Diskon { diskon }%</span>}   
            </div>
            <div className="flex-container" style={{display:'flex', flexDirection:'column'}}>
              <div  className="test-stroke" style={{alignSelf:'flex-end', padding:'5px'}}>
                <button className="btn font-comfortaa" style={{
                  lineHeight: '10px',
                  backgroundColor: 'white',
                  borderRadius: '30px',
                  color: '#BC9CFF',
                  fontWeight: 'bolder',
                  fontSize: '0.8rem'
                }} onClick={this.toggleModal}>Gunakan</button>
                <ModelQRCode toggle={this.toggleRefreshModal} isOpen={this.state.modal} qrcode=""/>
              </div>
            </div>
            
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CardBS4;