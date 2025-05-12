import logo from '@assets/investment-calculator-logo.png';

const Header = ({ title }) => {
  return (<header id="header">
    <img src={logo}/>
    <h1>{title}</h1>
  </header>);
};

export default Header;
