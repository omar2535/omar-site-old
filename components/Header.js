import css from '../styles/components/Header.css';
import Fade from './Fade';

class Header extends React.Component {
  render(){
    return(
      <Fade timer='2s' name='header'>
          <h1 className={css.title}>OMAR TSAI</h1>
      </Fade>
    )
  }
}

export default Header;
