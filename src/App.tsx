import React from 'react';

import style from './App.module.scss';

import { Navbar } from './components/Navbar';
import { Header } from './components/Header';

function App() {
    return (
        <div className={style.main}>
            <Navbar />
            <Header />
        </div>
    );
}

export default App;
