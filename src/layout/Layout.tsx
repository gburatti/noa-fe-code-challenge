import React from 'react';

import { Outlet } from 'react-router-dom';

import Header from './Header';

const Layout: React.FC = () => (
  <>

    {/* Header bar to be rendered in each child */}
    <Header />

    {/* <Outlet> to render what child route is currently active */}
    <Outlet />

    {/* we could also place a footer or other layout elements in this component */}
  </>
);

export default Layout;