import React from 'react';

class Popup extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className='popup'>
        <div className='popup_inner'>
          <button onClick={this.props.closePopup}>close</button>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Popup;