import Header from './Header';
import React, { Component } from 'react';
import layoutCSS from '../styles/components/Layout.css';
import Navbar from './Navbar';

// for full screen background image
const headerStyle = {
  height: `100vh`
};

class Layout extends Component {
  constructor(props){
    super(props);
    this.state = {
      mounted: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render(){
    return (
      <div style={headerStyle}>
        <img id='background-image' className={`${layoutCSS.background} blurrable`} src={'/static/images/background.jpg'}/>
        <Header />
        <span className = {`${layoutCSS.content}`}>
          {this.props.children}
          <Navbar />
        </span>
      </div>
    )
  }
}

export default Layout;