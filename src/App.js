import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';

import {
  Header,
  Main,
  Footer,
  NotFound
} from './components';

function App() {
  // const { debtorData } = useSelector(({ filterSlice }) => filterSlice);
  // const dispatch = useDispatch();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
