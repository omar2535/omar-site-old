import React from 'react';
import Fade from './Fade';
import PopupComponentExporter from './popups/PopupComponentExporter';

class Navbar extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <div className={`blurrable btn-group`} id='btn-group'>
          <style jsx>
            {`
              .btn-group .button {
                background-color: transparent;
                border: none;
                color: white;
                padding: 15px 32px;
                text-align: center;
                font-size: 16px;
                border: 2px solid white;
                width: 20%;
              }
              .flexdiv{
                display: flex;
                align-items: center;
                justify-content: center;
              }
              .btn-group .button:not(:last-child) {
                border-right: none; /* Prevent double borders */
              }
              .btn-group .button:hover {
                background-color: rgba(255, 255, 255, 0.5);
                -webkit-transition-duration: 0.2s;
              }
              .btn-group .button:first-child {
                border-radius: 20px 0px 0px 20px;
              }
              .btn-group .button:last-child {
                border-radius: 0px 20px 20px 0px;
              }
              @media screen and (max-width: 300px) {
              .flexdiv{
                flex-direction: column;
                align-items: center;
                justify-content: center;
              }
              .btn-group .button:not(:last-child) {
                border-bottom: none; /* Prevent double borders */
                border-right: 2px solid white;
              }
              .btn-group .button {
                border-radius: 2px 2px 2px 2px;
              }
              .btn-group .button:first-child {
                border-radius: 2px 2px 2px 2px;
              }
              .btn-group .button:last-child {
                border-radius: 2px 2px 2px 2px;
              }
            }
            `}
          </style>
          <Fade timer='5s' name='buttons'>
            <div className='flexdiv'>
              <a className="button" onClick={this.props.openPopup.bind(this, PopupComponentExporter.Intro)}>Intro</a>
              <a className="button" onClick={this.props.openPopup.bind(this, PopupComponentExporter.Portfolio)}>Portfolio</a>
              <a className="button" onClick={this.props.openPopup.bind(this, PopupComponentExporter.Contact)}>Contact</a>
            </div>
          </Fade>
        </div>
      </div>
    )
  }
}

export default Navbar;