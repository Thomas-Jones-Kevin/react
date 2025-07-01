import React from 'react';
import { createRoot } from 'react-dom/client';
import reactLogo from './assets/react_logo.png'; 
import { Fragment } from 'react';
import './index.css';
import App from './App'


const root = createRoot(document.getElementById("root"));

root.render(
    <div>
        <App />
    </div>
);

// function Mainfull(){
//     return (
//         <div>
//             <img src={reactLogo} alt="React Logo" width="40px" />
//             <h1>React</h1>
//             <ul>
//                 <li>I am studying it for placement sake</li>
//                 <li>Please I need to finish this somehow</li>
//                 <li>I am dumb as hell, so i'm afraid of react</li>
//             </ul>
//         </div>
//     )
// }


// function Page(){
//     return (
//         <Fragment>
//             <header>
//                 <img src={reactLogo} alt="React-Logo" width='25px'/>
//             </header>
//             <main>
//                 <ol>
//                     <li>Thomas</li>
//                     <li>Jones</li>
//                     <li>Kevin</li>
//                 </ol>
//                 <h3>Naathaanda tom !!</h3>
//             </main>
//             <footer>
//                 <p>This is my fucking <strong>Game</strong></p>
//             </footer>
//         </Fragment>
//     )
// }


