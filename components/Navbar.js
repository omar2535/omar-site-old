import React from 'react';
import Fade from './Fade';
import popupsComponents from './popups/PopupComponentExporter';
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
              .Navbar{
                text-color: white;
                text-align: center;
              }
              .btn-group .button {
                background-color: transparent;
                border: none;
                color: white;
                padding: 15px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                cursor: pointer;
                border: 2px solid white;
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
              button:focus {
                outline: 0 !important;
              }
            `}
          </style>
          <Fade timer='5s' name='buttons'>
            <button className="button" onClick={this.props.openPopup.bind(this, PopupComponentExporter.Intro)}>Intro</button>
            <button className="button" onClick={this.props.openPopup.bind(this, popupsComponents.Work)}>Work</button>
            <button className="button" onClick={this.props.openPopup.bind(this, popupsComponents.About)}>About</button>
            <button className="button" onClick={this.props.openPopup.bind(this, popupsComponents.Contact)}>Contact</button>
          </Fade>
        </div>
      </div>
    )
  }
}

export default Navbar;