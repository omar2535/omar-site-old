import Link from 'next/link';
import css from '../styles/components/Header.css';

const headerStyle = {
  height: `50em`
};

export default function Header() {
  return (
    <div className={css.header} style={headerStyle}>
      <div className={css.caption}>
        <span className={css.border}>Omar Tsai</span>
      </div>
    </div>
  )
}
