// src/App.js

import React from 'react';
import './App.css';
import BlockLayout from './components/BlockLayout';
import ModelSect from './components/ModelSect';


function App() {
    return (
        <div className="App">
            <BlockLayout />
            <ModelSect />    
        </div>
    );
}

export default App;