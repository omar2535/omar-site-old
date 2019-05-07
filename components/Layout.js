import Header from './Header';
import React, { Component } from 'react';
import Navbar from './Navbar';
import Popup from './Popup';

// for full screen background image
const headerStyle = {
  height: `100vh`,
  position: `relative`
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
          a:visited { text-decoration: none; color:white; }
          a:hover { text-decoration: none; color:gray; }
          a:focus { text-decoration: none; color:white; }
          a:hover, a:active { text-decoration: none; color:gray }
          a{ color: white; text-decoration: none;}
          body{
            height: 100%;
            margin: 0;
            color: #777;
            background-color: black;
          }
        `}
        </style>
        <style jsx>
          {`
          .content {
            position: absolute;
            left: 0;
            top: 30%;
            width: 100%;
            text-align: center;
            color: rgb(255, 255, 255);
          }
          .background {
            position: fixed;
            height: 130%;
            width: auto;
            /* non selectable background */
            user-select: none;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            -o-user-select: none;
            user-select: none;
            -webkit-animation: fadein 5s;
            -moz-animation: fadein 5s;
            -ms-animation: fadein 5s;
            -o-animation: fadein 5s;
            animation: fadein 5s;
          }
          @keyframes fadein {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fadein {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          /* Firefox < 16 */
          @-moz-keyframes fadein {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          /* Safari, Chrome and Opera > 12.1 */
          @-webkit-keyframes fadein {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          /* Internet Explorer */
          @-ms-keyframes fadein {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          /* Opera < 12.1 */
          @-o-keyframes fadein {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .image-div{
            position: relative;
          }
        `}
        </style>
        <div id='image-div'>
          <img id='background-image' className={`background blurrable`} src='/static/images/star-background.jpg' />
        </div>
        <div id='content-div'>
          <Header />
          <div className={`content`}>
            {this.props.children}
            <Navbar openPopup={this.openPopup.bind(this)} />
          </div>
          {this.state.showPopup ?
            <Popup closePopup={this.closePopup.bind(this)}>
              {this.generatePopup()}
            </Popup>
            : null
          }
        </div>
      </div>
    )
  }
}

export default Layout;