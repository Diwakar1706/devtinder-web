// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
// import { Provider } from 'react-redux'; 
// import Body from './Body';
// import Profile from './components/Profile';
// import Login from './components/Login';
// import store from './utils/userSlice'


// function App() {
//   return (
//     <div className="min-h-screen bg-base-200">
//      <Provider store={store}>
//       <BrowserRouter basename='/'>
//         <Routes>
//           {/* Parent Route */}
//           <Route path="/" element={<Body />}>
//             {/* Child Routes (rendered inside <Outlet /> in Body) */}
//             <Route index element={<div>Home Page Content</div>} />
//             <Route path="login" element={<Login />} />
//             <Route path="profile" element={<Profile />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//      </Provider>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux'; 
import Body from './Body';
import Profile from './components/Profile';
import Login from './components/Login';
import Feed from './components/Feed';
import appStore from './utils/appStore'; // ✅ Correct

function App() {
  return (
    <div className="min-h-screen bg-base-200">
     <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Feed />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
     </Provider>
    </div>
  );
}

export default App;





  {/* Main Content */}
      {/* <main className="container mx-auto px-4 py-8">
        <div className="hero min-h-[80vh] bg-base-100 rounded-lg shadow-xl">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold text-primary">DevTinder</h1>
              <p className="py-6 text-lg">
                Connect with amazing developers around the world. 
                Find your perfect coding partner or mentor today!
              </p>
              <button className="btn btn-primary btn-lg">Start Swiping</button>
            </div>
          </div>
        </div>
      </main> */}