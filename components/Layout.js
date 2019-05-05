import Header from './Header';
import React, { Component } from 'react';
import layoutCSS from '../styles/components/Layout.css';
import Navbar from './Navbar';
import Popup from './Popup';
import Contact from '../components/popups/Contact';

// for full screen background image
const headerStyle = {
  height: `100vh`
};

// main layout of website
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
  // function to dynamically generate popup content
  generatePopup(){
    let PopupInstance = this.state.currentPopup;
    return (
      <PopupInstance />
    );
  }

  render(){
    return (
      <div style={headerStyle}>
        <style global jsx>{`
          button:focus {
            outline: 0 !important;
          }
        `}
        </style>
        <img id='background-image' className={`${layoutCSS.background} blurrable`} src={'/static/images/background.jpg'}/>
        <Header />
        <span className = {`${layoutCSS.content}`}>
          {this.props.children}
          <Navbar openPopup={this.openPopup.bind(this)}/>
        </span>
        {this.state.showPopup ?
          <Popup closePopup={this.closePopup.bind(this)}>
            {this.generatePopup()}
          </Popup>
          : null
        }
      </div>
    )
  }
}

export default Layout;