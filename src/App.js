import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Profile from "./components/Profile/Profile";
import DetailsState from "./context/DetailsContext/DetailsState";
import GoogleSignin from "./components/GoogleSignin/GoogleSignin";
import Image from "./components/Image/Image";

function App() {
  return (
    <div className="App">
      <DetailsState>
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Image img="https://www.dairyfoods.com/ext/resources/Cargill-logo.jpg?1615840840" />
                  <GoogleSignin />
                </>
              }
            />
            <Route
              exact
              path="/profile"
              element={
                <>
                  <Profile />
                </>
              }
            />
          </Routes>
        </Router>
      </DetailsState>
    </div>
  );
}

export default App;
