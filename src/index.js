import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// To make sure that all the tradeshift-ui components are initialized before rendering the page. Compliant to the tradeshift guideline.
window.ts.ui.ready(function() {
	ReactDOM.render(<App />, document.getElementById('root'));
});
