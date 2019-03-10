import React from 'react';
import { Start } from '../components';
import '../css/Home.css';
import MapAndList from '../components/MapAndList';

const Home = () =>{
    return (
        <div className="Home">
            {/* <h2>[Home.js]</h2> */}
            <Start/>
            {/* <MapAndList/> */}
        </div>
    );
}

export default Home;