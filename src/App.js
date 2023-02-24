import React, { useState } from "react";
import Alert from "./Components/Alert";
import First from "./Components/First";
import Second from "./Components/Second";
import Third from "./Components/Third";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
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

  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#7f7f8f";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <Router>
      <>
        <First mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<Third />}></Route>
          <Route
            exact
            path="/"
            element={
              <Second head="Text Analyzer" mode={mode} showAlert={showAlert} />
            }
          ></Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
