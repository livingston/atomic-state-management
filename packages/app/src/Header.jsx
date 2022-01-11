import { NavLink } from 'react-router-dom';
import { LoginIcon } from '@heroicons/react/outline';
import HeaderCart from '@aosm/cart/Header';

import beaker from  './assets/beaker.svg'

const HeaderLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      [
        'px-3 py-2 rounded-md text-sm font-medium text-white',
        isActive && 'bg-gray-900'
      ]
        .filter(Boolean)
        .join(' ')
    }
  >
    {children}
  </NavLink>
);

const Header = () => (
  <header>
    <nav className="bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-8" src={beaker} alt="Lab" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <HeaderLink to="/">Home</HeaderLink>
                <HeaderLink to="/shop">Shop</HeaderLink>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <HeaderCart />
            <NavLink to="/login" className="ml-10">
              <LoginIcon className="w-8 text-white" />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
