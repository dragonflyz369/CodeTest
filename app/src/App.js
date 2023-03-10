import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContextProvider  } from './context/AppContext';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

const App = () => (
  <AppContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />}>
          <Route path="page1"  element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppContextProvider>

);
export default App;