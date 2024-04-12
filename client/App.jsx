import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import TodayNotes from "./pages/TodayNotes";
import WeekNotes from "./pages/WeekNotes";
import MonthNotes from "./pages/MonthNotes";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<TodayNotes />} />
          <Route path="/week" element={<WeekNotes />} />
          <Route path="/month" element={<MonthNotes />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
