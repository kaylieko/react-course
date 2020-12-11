import './scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

//axios (network request)
//https://unsplash.com/documentation (photos API)
//semantic ui
//faker

// Renders the App component into a div with id 'root'
ReactDOM.render(
	<App />,
	document.querySelector('#root')
);
