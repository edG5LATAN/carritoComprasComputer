import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './component/header/Header'
import Home from './component/home/Home'
import Footer from './component/footer/Footer'
import "./App.css";

function App() {

  return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;
