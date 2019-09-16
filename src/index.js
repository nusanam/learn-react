import React from 'react';
import ReactDOM from 'react-dom';
// import UseStateHook from './UseStateHook';
import ContextApi from './ContextApi';
import reactime from '../../reactime/package/index'

const root = document.getElementById('root');

// ReactDOM.render(<UseStateHook />, root);
ReactDOM.render(<ContextApi />, root);

reactime(root);