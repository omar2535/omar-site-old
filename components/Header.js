import css from '../styles/components/Header.css';
import Fade from './Fade';

class Header extends React.Component {
  render(){
    return(
      <Fade timer='2s'>
          <h1 className={css.title}>Omar Tsai</h1>
      </Fade>
    )
  }
}

export default Header;
