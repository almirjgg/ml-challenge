import { Link } from 'react-router-dom';
import SearchForm from '../../molecules/SearchForm/SearchForm';
import logo from '../../../assets/ic_logo_ml.png';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__content'>
        <Link to='/' className='header__logo-link'>
          <img src={logo} alt='Logo Mercado Libre' className='header__logo-img' />
        </Link>
        <SearchForm />
      </div>
    </header>
  );
};

export default Header;
