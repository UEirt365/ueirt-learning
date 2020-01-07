import React from 'react';
import Header from "./components/Header";
import './App.css'

function App() {
    return (
        <div className={'main-body'}>
            <div className={'main-component'}>
                <Header/>
                <h1>Main component</h1>
            </div>
        </div>
    );
}

export default App;
