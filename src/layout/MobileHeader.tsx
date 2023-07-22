import React, { useEffect, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { HeaderProps } from '../interfaces/header';

import { LINKS } from '../utils/constants/navigation.constants';

const MobileHeader: React.FC<HeaderProps> = ({ logo, pathname }) => {

  const location = useLocation();

  const [open, setOpen] = useState(false);

  useEffect(
    () => setOpen(false),
    [location]
  );

  return (
    <div
      className='red-bg flex md-hidden box-shadow'
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.2rem .5rem',
      }}
    >

      <span
        style={{
          fontSize: '45px',
          cursor: 'pointer'
        }}
        onClick={() => setOpen(prev => !prev)}
      >
        &equiv;
      </span>

      <img
        src={logo}
        alt="logo"
        style={{
          width: 50
        }}
      />

      {open && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: 'white',
          padding: '.5rem'
        }}
        >

          <span
            style={{
              fontSize: '45px',
              cursor: 'pointer'
            }}
            onClick={() => setOpen(false)}
          >
            &times;
          </span>

          <div
            className='flex w-full'
            style={{
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {LINKS.map(link => (
              <span
                key={link.to}
                style={{
                  color: 'black',
                  opacity: pathname.includes(link.to) ? 1 : .3,
                  padding: '15px',
                  fontSize: '25px'
                }}
              >
                <Link to={link.to}>
                  {link.label}
                </Link>
              </span>
            ))}

          </div>
        </div>
      )}
    </div>
  );
};

export default MobileHeader;