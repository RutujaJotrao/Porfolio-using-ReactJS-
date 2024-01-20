import "./App.css";
import About from "./Components/About";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
            </Wrapper>
          }
          />

          <Route path="/about"
          element={
            <Wrapper>
              <About/>
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