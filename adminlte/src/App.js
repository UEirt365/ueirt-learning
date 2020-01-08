import React from 'react';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import './App.css'

function App() {
    return (
        <div className={'main-body'}>
            <div className={'main-component'}>
                <Header/>
                <Sidebar/>
                <MainContent/>
            </div>
        </div>
    );
}

export default App;
