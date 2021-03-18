import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Layouts/Navbar";
import Banner from "./components/Layouts/Banner";
import Footer from "./components/Layouts/Footer";
import SignUp from "./components/User/SignUp";
import Login from "./components/User/Login";
import Posts from "./components/Posts/Posts";
import CreatePost from "./components/Posts/Post/CreatePost";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" component={Navbar} />
        <Route path="/" exact component={Banner} />
        <Route path="/" exact component={Posts} />
        <Route path="/create-post" component={CreatePost} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Footer} />
      </Router>
    </div>
  );
}

export default App;
