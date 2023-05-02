import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import { Main } from './pages/main';
import { LogIn } from './pages/login';
import { Navbar } from './components/navbar';
import { CreatePost } from './pages/create-post.tsx/cretaepost';
import { CreateForm } from './pages/create-post.tsx/createform';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path='/createpost' element={<CreatePost />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
