import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Posts from "./components/Posts/Posts";



function App(props) {
  return (
      <BrowserRouter>
          <div className="App">
              <div className="app-wrapper">
                  <Header></Header>
                  <Navbar friends={props.state.friends} ></Navbar>
                  <Routes>
                      <Route path='/profile' element={<Profile/>}/>
                      <Route path='/dialogs' element={<Dialogs dialogs={props.state.dialogs} />}/>
                      <Route path='/posts' element={<Posts posts={props.state.posts} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />}/>
                  </Routes>
              </div>

          </div>
      </BrowserRouter>

  );
}

export default App;
