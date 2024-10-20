// // import logo from './logo.svg';
// import './App.css';
// import Home from './screens/Home';
// // import Navbar from './components/Navbar';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
// import Login from './screens/Login';
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
// import Signup from './screens/Signup.js';
// import { CartProvider } from './components/ContextReducer.js';



// function App() {
//   return (
//     <CartProvider>
//     <Router>
//     <div>
//       <Routes>
//         <Route exact path="/" element={<Home/>} />
//         <Route exact path="/login" element={<Login/>} />
//         <Route exact path="/createuser" element={<Signup/>} />

//       </Routes>
//     </div>
//     </Router>
//     </CartProvider>
//   );
// }

// export default App;




import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './screens/Login';
import Signup from './screens/Signup';
import { CartProvider } from './components/ContextReducer.js';

// Import Bootstrap CSS
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useEffect } from 'react';
import MyOrder from './screens/MyOrder.js';

function App() {
  useEffect(() => {
    // Check if the user's browser supports theme-color
    const isSupported = () => {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    };

    // Set the theme color if supported
    if (isSupported()) {
      const themeColor = document.createElement('meta');
      themeColor.name = 'theme-color';
      themeColor.content = '#000000'; // Replace with your desired color
      document.head.appendChild(themeColor);
    }
  }, []);

  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/createuser" element={<Signup />} />
            <Route exact path="/myOrder" element={<MyOrder />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
