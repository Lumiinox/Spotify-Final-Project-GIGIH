import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Home from './pages/home';
import {useSelector} from 'react-redux';
import CreatePlayListPage from './pages/create-playlist';
import { State } from './redux';
function App() {
  const loginStatus = useSelector((state: State) => state.userData.loginStatus);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {loginStatus ?
          <Route path='/create-playlist' element={<CreatePlayListPage/>}/>
          :
          <Route path="/create-playlist" element={<Navigate to="/" replace/>}/>
        }
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
