import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';



export default function App () {
    return (
        <div>
        <div className="container">
        <Header />
        <Content />
        <Footer />
        </div>
        </div>
    )
}
