import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class QRCodeScanner extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
    }
 
    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
    if (data !== null) {
      this.props.handleScan(data);
      this.setState({
        result: data,
      })
    }
  }

  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: 240,
      width: 320,
    }
 
    return(
      <div>
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>Scan QR Code</ModalHeader>
        <ModalBody>
          <QrReader
            delay={this.state.delay}
            style={previewStyle}
            onError={this.handleError}
            onScan={this.handleScan}
            />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <p>{this.state.result}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.props.toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
    )
  }
}

export default QRCodeScanner;