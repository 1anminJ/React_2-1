import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './component/page/MainPage';
import PostWritePage from './component/page/PostWritePage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/post-write" element={<PostWritePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
