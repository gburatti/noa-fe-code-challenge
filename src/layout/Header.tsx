
import React from 'react';

import { useLocation } from 'react-router-dom';

import DesktopHeader from './DesktopHeader';

import MobileHeader from './MobileHeader';

import logo from '../assets/noaLogo.png';

const Header: React.FC = () => {

  const { pathname } = useLocation();

  return (
    <>
      <DesktopHeader
        logo={logo}
        pathname={pathname}
      />

      <MobileHeader
        logo={logo}
        pathname={pathname}
      />
    </>
  );
};

export default Header;