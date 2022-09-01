import React from 'react';

import style from './App.module.scss';

import { Navbar } from './components/Navbar';

function App() {
    return <div className={style.main}>
        <Navbar/>
    </div>;
}

export default App;
