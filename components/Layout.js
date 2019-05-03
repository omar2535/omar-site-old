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

  componentDidMount(){
  }

  render(){
    return (
      <div style={headerStyle}>
        <img className = {layoutCSS.background} src={'/static/images/background.jpg'}/>
        <Header />
        <span className = {layoutCSS.content}>
          {this.props.children}
          <Navbar />
        </span>
      </div>
    )
  }
}

export default Layout;