import React from 'react';
import '../styles/components/Popup.css';

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
            -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
            -moz-animation: fadein 1s; /* Firefox < 16 */
            -ms-animation: fadein 1s; /* Internet Explorer */
            -o-animation: fadein 1s; /* Opera < 12.1 */
            animation: fadein 1s;
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
            padding-top: 1em;
          }
          
          @keyframes fadein {
              from { opacity: 0; }
              to   { opacity: 1; }
          }

          /* Firefox < 16 */
          @-moz-keyframes fadein {
              from { opacity: 0; }
              to   { opacity: 1; }
          }

          /* Safari, Chrome and Opera > 12.1 */
          @-webkit-keyframes fadein {
              from { opacity: 0; }
              to   { opacity: 1; }
          }

          /* Internet Explorer */
          @-ms-keyframes fadein {
              from { opacity: 0; }
              to   { opacity: 1; }
          }

          /* Opera < 12.1 */
          @-o-keyframes fadein {
              from { opacity: 0; }
              to   { opacity: 1; }
          }
        `}
        </style>
        <div className='popup_inner'>
          <button className='close-popup-button' onClick={this.props.closePopup}>&#10006;</button>
          <div className='popup-content'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default Popup;