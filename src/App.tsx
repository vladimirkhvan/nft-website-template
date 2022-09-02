import React from 'react';

import style from './App.module.scss';

import { Navbar } from './components/Navbar';
import { Header } from './components/Header';

import { Body } from './components/Body';

function App() {
    return (
        <div className={style.app}>
            <Navbar />
            <main>
                <Header />
                <section>
                    <Body />
                    <section className={style.sidebar}></section>
                </section>
            </main>
        </div>
    );
}

export default App;
