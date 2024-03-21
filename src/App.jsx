import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Today from "../pages/Today";
import Week from "../pages/Week";
import Month from "../pages/Month";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Today />} />
          <Route path="/Week" element={<Week />} />
          <Route path="/Month" element={<Month />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
