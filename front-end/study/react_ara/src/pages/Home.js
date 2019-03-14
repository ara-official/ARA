import React from 'react';
// import { Start, MapAndList } from '../components';
import { Start, MapAndList } from '../components';
import '../css/Home.css';
// import MapAndList from '../components/MapAndList';

class Home extends React.Component{
    render(){
        console.log('Home.js START');
        return (
            <div className="Home">
                <h2>[Home.js]</h2>
                <Start/>
            
                {console.log('Home.js END')}
            </div>
        );
    }
}

export default Home;