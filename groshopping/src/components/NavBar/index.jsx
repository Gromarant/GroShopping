import logo from '../../images/logo.svg';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import './style.scss';

export const NavBar = () => {
  return (
    <>
      <nav className='navBar'>
        <img src={logo} className="navBar__logo" alt="logo" />
        <div className="navBar__menu-content">
          <ul className="navBar__list">
            <li className="navBar__list-item">Supermarket</li>
            <li className="navBar__list-item">Shopping Lists</li>
            <li className="navBar__list-item">Offerts</li>
          </ul>
          <NotificationsRoundedIcon className='navBar__bell'/>
          <MenuRoundedIcon className='navBar__hambur-menu'/>
        </div>
      </nav>
    </>
  );
};