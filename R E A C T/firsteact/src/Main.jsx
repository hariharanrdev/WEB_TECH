import React from "react";
import {createRoot} from "react-dom/client"
import App from "./App.jsx";

// console.log(createRoot)

//? step 1 : create a React Root...................
/*
 * Fristly import thr createRoot from react-dom/clients.

  !syntax: createRoot(container)
  
 * ex: let root = createRoot(document.getElementById('root'));
*/

let reactRoot = createRoot(document.getElementById('root'));
// let reactRoot2 = createRoot(document.getElementById('sibi'));

//?step 2 : render data into root...................

//! syntax : reactRoot.render(string || node jsx || component)

// ?string data
// reactRoot.render("i am rendering data using react root");
// reactRoot2.render('i am rendering data using react root2')

//? node jsx data
// reactRoot.render(<h1>Hello from React!</h1>)
// reactRoot2.render(<h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta facilis qui porro nemo sint quas dignissimos quibusdam quasi! Facere illum molestias facilis labore quis blanditiis libero rerum laborum magni cum?</h1>)


//? how to do function call in the react to render the data 
// ex: sum ---------------> sum() ❌ <sum> </sum> or <sum /> ✅
// ex: App ---------------> App() ❌ <App> </App> or <App /> ✅

reactRoot.render(<App />)