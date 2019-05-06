import React from 'react';

// class which manages life-cycle of a single popup
// mainly does the blurring of any elements with class name of `blurrable`
// and runs closePopup when closing
class Popup extends React.Component{
  constructor(props){
    super(props);
    this.setMountAnimation = this.setMountAnimation.bind(this);
    this.setUnmountAnimation = this.setUnmountAnimation.bind(this);
    this.unMount = this.unMount.bind(this);
    this.state = {
      style: `
          .popup_inner{
            -webkit-animation-name: zoom;
            animation-name: zoom;
          }
          @-webkit-keyframes zoom {
            from {transform: scale(0);}
            to {transform: scale(1);}
          }
          @keyframes zoom {
            from {transform: scale(0);}
            to {transform: scale(1);}
          }
      `
    };
  }

  componentDidMount(){
    setTimeout(this.setMountAnimation, 10); // to make it async
    var css = `
      -webkit-filter: blur(3px);
      filter: blur(3px);
      -webkit-transition: 5s ease -in -out;
      transition: all 0.5s ease-out;
    `;
    var elements = document.getElementsByClassName('blurrable');
    for(let element of elements){
      element.style.cssText = css;
    }
  }

  // to set zoom animation when component mounts
  setMountAnimation(){
    this.setState({
      style: `
          .popup_inner{
            -webkit-animation-name: zoom;
            animation-name: zoom;
          }
          @-webkit-keyframes zoom {
            from {transform: scale(0);}
            to {transform: scale(1);}
          }
          @keyframes zoom {
            from {transform: scale(0);}
            to {transform: scale(1);}
          }
      `
    });
  }

  setUnmountAnimation(){
    this.setState({
      style: `
          .popup_inner{
            -webkit-animation-name: zoom_out;
            animation-name: zoom_out;
            opacity: 0;
          }
          @-webkit-keyframes zoom_out {
            0% {transform: scale(1); opacity: 1;}
            99% {transform: scale(0); opacity: 1;}
            100% {transform: scale(0); opacity: 0;}
          }
          @keyframes zoom_out {
            0% {transform: scale(1); opacity: 1;}
            99% {transform: scale(0); opacity: 1;}
            100% {transform: scale(0); opacity: 0;}
          }
      `
    });
  }

  componentWillUnmount() {
    var elements = document.getElementsByClassName('blurrable');
    for (let element of elements) {
      element.style.filter = 'blur(0px)';
    }
  }

  unMount(){
    this.setUnmountAnimation();
    setTimeout(this.props.closePopup, 500);
  }

  render(){
    return(
      <div className='popup' data-effect="mfp-move-from-top" id='popup'>
        <style jsx>{`
          ${this.state.style}
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
            position: fixed;
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
            -webkit-animation-duration: 0.5s;
            animation-duration: 0.5s;
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
          /* For Scrollbar */
          /* width */
          ::-webkit-scrollbar {
            width: 8px;
          }

          /* Track */
          ::-webkit-scrollbar-track {
            background: transparent;
          }

          /* Handle */
          ::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background: #888;
          }

          /* Handle on hover */
          ::-webkit-scrollbar-thumb:hover {
            background: #555;
            border-radius: 10px;
          }

          ::-webkit-scrollbar-corner{
            background: transparent;
          }
        `}
        </style>
        <div className='popup_inner'>
          <button className='close-popup-button' onClick={this.unMount}>&#10006;</button>
          <div className='popup-content zoom'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default Popup;