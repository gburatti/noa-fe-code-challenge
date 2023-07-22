import React from 'react';

import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import Layout from './layout/Layout';

import Map from './views/Map';

import Stats from './views/Stats';

import IpInfoContextProvider from './context/ipinfo-context';

const App: React.FC = () => (
  <BrowserRouter>
    <IpInfoContextProvider>
      <Routes>
        <Route path="*" element={<Layout />}>
          <Route path="map" element={<Map />} />
          <Route path="stats" element={<Stats />} />
          <Route path="*" element={<Navigate to="/map" />} />
        </Route>
      </Routes>
    </IpInfoContextProvider>
  </BrowserRouter>
);

export default App;
