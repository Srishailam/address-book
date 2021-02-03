import React, { Component } from 'react'
import './Modal.scss';
export default class Modal extends Component {

  constructor(props){
    super(props);
  }

  closeModal = () =>{
    this.props.handleClose( _ => false);
  }
  render() {
    const { headerText, children} = this.props;
    return (
      <div className="Modal_Wrapper">
        <div className="Modal">
          <div className="Modal_Header_Container">
            <div className="Modal_Header">{this.props.headerText}</div>
            <div className="Modal_Close" onClick={this.closeModal}>X</div>
          </div>
          <div className="Modal_Body_Container">
            <div className="">{children}</div>
          </div>
        </div>
      </div>
    )
  }
}
