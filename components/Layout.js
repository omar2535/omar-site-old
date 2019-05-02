import Header from './Header';
import css from '../styles/components/Layout.css'; // keep here to set body and html attributes

export default function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}
