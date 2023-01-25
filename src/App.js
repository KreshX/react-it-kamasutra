import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <div className="app-wrapper">
                  <Header></Header>
                  <Navbar></Navbar>
                  <Routes>
                      <Route path='/profile' element={<Profile/>}/>
                      <Route path='/dialogs' element={<Dialogs/>}/>
                  </Routes>
              </div>

          </div>
      </BrowserRouter>

  );
}

export default App;
