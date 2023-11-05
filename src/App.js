import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/footer/Footer.js'
import Home from './component/home/Home'
import Header from './component/header/Header'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
       <Routes>
        <Route path='/' element={<Home/>}/>
       </Routes>
       <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
