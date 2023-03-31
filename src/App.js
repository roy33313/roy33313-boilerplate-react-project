import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Profile from "./components/Profile/Profile";
import DetailsState from "./context/DetailsContext/DetailsState";

function App() {
  return (
    <div className="App">
      <DetailsState>
        <Router>
          <Routes>
            <Route exact path="/" element={<>initial</>} />
            <Route exact path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </DetailsState>
    </div>
  );
}

export default App;
