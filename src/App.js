import "./App.css";
import About from "./Components/About";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import Data from './Data.json';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"
          element={
            <Wrapper>
              <Home/>
              <About/>
              <Services/>
              <Portfolio projects={Data}/>
              <Contact/>
            </Wrapper>
          }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

const Wrapper = ({children}) => {
  return (
    <>
      <Sidebar/>
      <div style={{marginLeft:'260px', width:'calc(100vw - 260px)'}}>
        {children}
      </div>
    </>
  )
}