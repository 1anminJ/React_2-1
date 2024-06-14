import logo from './logo.svg';
import './App.css';

import MainPage from './component/page/MainPage';
import PostWritePage from './component/page/PostWritePage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/post-write' element={<PostWritePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
