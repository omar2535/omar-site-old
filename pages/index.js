import Layout from '../components/Layout';
import Fade from '../components/Fade';

const Index = () => (
  <div className='app' id='app'>
    <Layout>
      <Fade timer='3s' name='index'>
        <p id='main-text' className={`blurrable`}><i>The equal right of all citizens to health, education, work, food, security, culture, science,
          and wellbeing - that is, the same rights we proclaimed when we began our struggle, in addition to those which emerge from our dreams of
          justice and equality for all inhabitants of our world - is what I wish for all. </i>- Fidel Castro</p>
        </Fade>
    </Layout>
  </div>
)
  
export default Index