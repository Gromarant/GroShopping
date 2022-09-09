import logo from '../../images/logo.svg';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import './style.scss';

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
        <NotificationsRoundedIcon className='bell'/>
      </nav>
    </>
  );
}

export default NavBar;
