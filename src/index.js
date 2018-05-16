import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyDg3dlUzLCDFt_1UtF1ei21Czh4QP7lUMg';

//create a new component. This should produce some HTML
const App = () => {
	return <div>Hi!</div>
}

//take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));