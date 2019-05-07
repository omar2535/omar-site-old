import Layout from '../components/Layout';
import Fade from '../components/Fade';
import Quotes from '../components/Quotes';

// quotes can be pulled from an API
class Index extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className='app' id='app'>
        <Layout>
          <style jsx>
            {`
              #main-text{
                padding-left: 5em;
                padding-right: 5em;
                text-align: center;
                margin-top: 5em;
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