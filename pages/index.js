import Layout from '../components/Layout';
import Fade from '../components/Fade';

const Index = () => (
  <div className='app' id='app'>
    <Layout>
      <Fade timer='3s' name='index'>
      <p id='main-text' className={`blurrable`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis est qui autem maxime,
        quae ipsam quibusdam perspiciatis minus, quis numquam consectetur, obcaecati earum quo
        saepe totam rem eligendi aperiam laborum?</p>
        </Fade>
    </Layout>
  </div>
)
  
export default Index