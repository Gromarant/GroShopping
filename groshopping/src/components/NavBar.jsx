import logo from '../images/logo.svg'
import '../styles/NavBar.css';

function NavBar() {
  return (
    <>
      <nav className='navBar'>
      <img src={logo} className="logo" alt="logo" />
        <ul>
          <li>Supermarket</li>
          <li>Shopping Lists</li>
          <li>Offerts</li>
        </ul>
        <span>Notifications</span>
      </nav>
    </>
  );
}

export default NavBar;
