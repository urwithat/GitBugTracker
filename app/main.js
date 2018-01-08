import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

ReactDOM.render(<App />, document.getElementById('app'));

let app = (name) => {
    console.log(`hello from ${name}`);
}
app('Atif');