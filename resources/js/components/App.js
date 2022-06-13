import React from 'react';
import ReactDOM from 'react-dom';

export default function App() {
    return (
        <h1>
            I am the app component !
        </h1>
    );
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}

