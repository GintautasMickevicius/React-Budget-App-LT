import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from './context/context';
import './index.css';
import App from './App';


ReactDOM.render(
  <div>
    <Provider>
    <App />
    </Provider>
  </div>,
  document.getElementById('root')
);

