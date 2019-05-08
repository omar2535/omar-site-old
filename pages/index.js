import Layout from '../components/Layout';
import Fade from '../components/Fade';
import Quotes from '../components/Quotes';
import React from 'react';
import Head from 'next/head';

// quotes can be pulled from an API
class Index extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: 'Omar\'s website'
    };
  }

  // render function
  render(){
    return(
      <div className='app' id='app'>
        <Head>
          <meta charSet="utf-8" />
          <title>{this.state.title}</title>
          <meta name="viewport" content="width=1000"></meta>
          <link rel="shortcut icon" href="../static/images/rocket-code-icon.png" />
        </Head>
        
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
              @media screen and (max-width: 650px) {
                #main-text{
                  height: 100%;
                }
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