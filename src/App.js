import React from 'react';

import './styles/global.css';

import { createHashHistory } from 'history';
import AppRouter from './AppRouter';

function App() {
  return <AppRouter history={createHashHistory()} />;
}

export default App;
