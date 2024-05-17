import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrLogo } from '../../assets/crown.svg';
import './nav-bar.scss'
const Navigation = () => {
  return (
    < >

      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <><CrLogo /></>
        </Link>

        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            <>shop</>
          </Link>

        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;