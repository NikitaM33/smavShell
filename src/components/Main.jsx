import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  PersonFind,
  FindResults,
} from './';

const Main = () => {
  // const dispatch = useDispatch();

  return (
    <main className="main">
      <div className="wrapper">
        <h3>Поиск информации по должнику</h3>

        <PersonFind />
        <FindResults />
      </div>
    </main>
  )
}

export default Main;
