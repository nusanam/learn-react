import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import reactime from '../../reactime/package/index'

const root = document.getElementById('root');

ReactDOM.render(<App />, root);

reactime(root);