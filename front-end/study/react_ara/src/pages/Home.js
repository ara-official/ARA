import React from 'react';
// import { Start, MapAndList } from '../components';
// import { Start, MapAndList } from '../components';
import StartContainer from '../containers/StartContainer';
import '../css/Home.css';
// import MapAndListContainer from '../containers/MapAndListContainer';
// import MapAndList from '../components/MapAndList';

class Home extends React.Component{
    render(){
        console.log('Home.js START');
        return (
            <div className="Home">
                <StartContainer/>
                {/* <MapAndListContainer/> */}
            </div>
        );
    }
}

export default Home;