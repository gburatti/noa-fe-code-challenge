import React from 'react';

import { Link } from 'react-router-dom';

import { HeaderProps } from '../interfaces/header';

import { LINKS } from '../utils/constants/navigation.constants';

const DesktopHeader: React.FC<HeaderProps> = ({ logo, pathname, }) => (

  <div
    className='hidden md-flex w-full box-shadow headerbar'
    style={{
      padding: '1rem 3rem',
    }}
  >

    <img
      src={logo}
      alt="logo"
      style={{
        width: 100
      }}
    />

    <div className='flex'>
      {LINKS.map(link => (
        <span
          key={link.to}
          style={{
            color: 'black',
            opacity: pathname.includes(link.to) ? 1 : .3,
            padding: '0 15px'
          }}
        >
          <Link to={link.to}>
            {link.label}
          </Link>
        </span>
      ))}

    </div>
  </div>
);

export default DesktopHeader;