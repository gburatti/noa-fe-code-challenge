import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import MapPage from "./pages/MapPage";
import IPStatsPage from "./pages/IPStatsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="" element={<MapPage/>}/>
          <Route path="stats" element={<IPStatsPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
