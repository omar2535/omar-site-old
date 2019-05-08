import Layout from '../components/Layout';
import Fade from '../components/Fade';
import Quotes from '../components/Quotes';
import React from 'react';

// quotes can be pulled from an API
class Index extends React.Component{
  constructor(props){
    super(props);
  }

  // render function
  render(){
    return(
      <div className='app' id='app'>
        <link rel="shortcut icon" href="../static/images/orz-logo-small.png" />
        <Layout>
          <style jsx>
            {`
              #main-text{
                padding-left: 5em;
                padding-right: 5em;
                text-align: center;
                margin-top: 5em;
                height: 8em;
              }
            `}
          </style>
          <Fade timer='3s' name='index'>
            <div id='main-text' className={`blurrable`}>
              <Quotes />
            </div>
          </Fade>
        </Layout>
      </div>
    )
  }
}

export default Index