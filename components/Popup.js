import React from 'react';
import '../styles/components/Popup.css';

// class which manages life-cycle of a single popup
// mainly does the blurring of any elements with class name of `blurrable`
// and runs closePopup when closing
class Popup extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    var css = `
      -webkit-filter: blur(3px);
      filter: blur(3px);
      -webkit-transition: 5s ease -in -out;
      transition: all 1s ease-out;
    `;
    var elements = document.getElementsByClassName('blurrable');
    for(let element of elements){
      element.style.cssText = css;
    }
  }

  componentWillUnmount() {
    var elements = document.getElementsByClassName('blurrable');
    for (let element of elements) {
      element.style.filter = 'blur(0px)';
    }
  }

  fadeAndClosePopup(){

  }

  render(){
    return(
      <div className='popup' data-effect="mfp-move-from-top" id='popup'>
        <style jsx>{`
          .popup{
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            background-color: rgba(0,0,0,0);
          }
          .popup_inner{
            position: absolute;
            padding-top: 10px;
            left: 15%;
            right: 25%;
            top: 25%;
            bottom: 25%;
            width: 70%;
            height: 80%;
            margin: auto;
            background: rgba(0,0,0, 0.7);
            border-radius: 20px;
            overflow:auto;
            transition: transform .2s;
            -webkit-animation-name: zoom;
            -webkit-animation-duration: 0.5s;
            animation-name: zoom;
            animation-duration: 0.5s;
          }
          @-webkit-keyframes zoom {
            from {transform: scale(0);}
            to {transform: scale(1);}
          }
          @keyframes zoom {
            from {transform: scale(0);}
            to {transform: scale(1);}
          }
          .close-popup-button{
            float: right;
            background-color: transparent;
            border: none;
            color: white;
            padding-right: 15px;
            padding-top: 5px;
            font-size: 20px;
          }
          .close-popup-button:hover{
            color: gray;
          }
          .popup-content{
            padding-left: 1em;
            padding-right: 1em;
            padding-top: 1em
          }
        `}
        </style>
        <div className='popup_inner'>
          <button className='close-popup-button' onClick={this.props.closePopup}>&#10006;</button>
          <div className='popup-content zoom'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default Popup;