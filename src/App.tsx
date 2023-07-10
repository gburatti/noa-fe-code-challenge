import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import MapPage from "./pages/MapPage";
import IPStatsPage from "./pages/IPStatsPage";
import AppContextProvider from "./context/AppContext";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="" element={<MapPage/>}/>
            <Route path="stats" element={<IPStatsPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
