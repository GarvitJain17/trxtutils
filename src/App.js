import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [text, setText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#141234";
      setText("Enable light Mode");
      showAlert("Dark Mode Activated", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setText("Enable Dark Mode");
      showAlert("Light Mode Activated", "Success");
    }
  };
  return (
    <>
    {/* <Router>
      <Link to='/home'>Home</Link>
      <Link to='/about'>About</Link> */}
      <Navbar
        title="Textutils"
        abouttext="About"
        mode={mode}
        togglemode={togglemode}
        text={text}
      />
      <Alert alert={alert} />
      {/* <div className="container my-6">
        <Routes>
          <Route path="/about" Component={<About />} />
          <Route
            path="/"
            Component={
              <Textform
                heading="Enter Text To Analyze"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
      </div>
      </Router> */}
      <Textform
                heading="Enter Text To Analyze"
                mode={mode}
                showAlert={showAlert}
              />
              <About mode={mode}/>
    </>
  );
}

export default App;
