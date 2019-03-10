import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from 'shared/App';
import 'css/Root.css';

//// type 1 : component class
// class Root extends Component
// {
//     render()
//     {
//         console.log('client/Root.js START');
//         return(
//             <div>
//                 <BrowserRouter>
//                     <App />
//                 </BrowserRouter>
//                 {console.log('client/Root.js END')}
//             </div>
//         );
//     }
// }

//// type 2 : single function
// const Root = () => (
//     <div>
//     {console.log('Root.js START')}
//     <BrowserRouter>
//         <App/>
//     </BrowserRouter>
//     {console.log('Root.js END')}
//     </div>
// );

//// type 3 : single function + @
const Root = () => {
    return(
        <div className="Root">
        {/* <h2>[Root.js]</h2> */}
        {console.log('Root.js START')}
        <BrowserRouter>
            <App/>
        </BrowserRouter>
        {console.log('Root.js END')}
        </div>
    );
};

export default Root;