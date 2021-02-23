import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Info from './Info';
import './App.global.css';

render(<div>
    <App />
    <Info />
    </div>
    , document.getElementById('root'));

