import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import reactime from '../../reactime/package/index'
import UseStateHook from './Components/UseStateHook';

const root = document.getElementById('root');

ReactDOM.render(<App />, root);

reactime._(root);