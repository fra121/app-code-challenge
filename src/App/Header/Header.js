import './Header.css';

import logo from 'assets/logo.svg'

function Header() {

  return (
    <header className="Header flex-row justify-center">
      <img src={logo} alt="Logo" />
    </header>
  );
}

export default Header;
