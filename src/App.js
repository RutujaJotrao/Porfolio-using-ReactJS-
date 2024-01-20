import "./App.css";
import About from "./Components/About";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <Sidebar />

       <div style={{ marginLeft: "35vh", width: "1280px" }}>
        <Home />
  </div> 

  {/* <div style={{ marginLeft: "35vh" }}>
        <About />
      </div> */}
    </>
  );
}

export default App;
