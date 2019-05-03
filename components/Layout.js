import Header from './Header';
import layoutCSS from '../styles/components/Layout.css'; // keep here to set body and html attributes

const headerStyle = {
  height: `100vh`
};

export default function Layout(props) {
  return (
    <div style={headerStyle}>
      <img className = {layoutCSS.background} src={'/static/images/background.jpg'}>
      </img>
      <Header />
      <span className = {layoutCSS.content}>
        {props.children}
      </span>
    </div>
  )
}
