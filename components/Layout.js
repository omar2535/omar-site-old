import Header from './Header';
import React, { Component } from 'react';
import layoutCSS from '../styles/components/Layout.css';
import Navbar from './Navbar';
import Popup from './Popup';

// for full screen background image
const headerStyle = {
  height: `100vh`
};

class Layout extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPopup: null,
      showPopup: false
    };
  }
  // custom open popup function
  openPopup(buttonName) {
    this.setState({
      showPopup: true,
      currentPopup: buttonName
    });
  }

  // custom closePopup function
  closePopup() {
    this.setState({
      showPopup: false,
      currentPopup: null
    });
  }

  render(){
    return (
      <div style={headerStyle}>
        <img id='background-image' className={`${layoutCSS.background} blurrable`} src={'/static/images/background.jpg'}/>
        <Header />
        <span className = {`${layoutCSS.content}`}>
          {this.props.children}
          <Navbar closePopup={this.closePopup.bind(this)} openPopup={this.openPopup.bind(this)}/>
          {this.state.showPopup ?
            <Popup closePopup={this.closePopup.bind(this)}>
              {this.state.currentPopup()}
            </Popup>
            : null
          }
        </span>
      </div>
    )
  }
}

export default Layout;