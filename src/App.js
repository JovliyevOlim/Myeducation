import logo from './logo.svg';
import './App.css';
import  {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Navbar from "./Component/Navbar/Navbar";
import Home from './Component/Home/Home'
import About from './Component/Home/About'
import Course from "./Component/Home/Course";
import Contact from "./Component/Home/Contact";
import Footer from "./Component/Footer/Footer";
import Batafsil from "./Component/Home/Batafsil";
import {useState, useContext, createContext} from "react";

export  const UserContext = createContext()
function App() {

    const [searcher,setSearch] = useState('')



    function search(e){
        setSearch(e)
    }

    return (
        <UserContext.Provider value={searcher}>
        <Router>
          <div className="App">
              <Navbar func={search} search={searcher} />
                  <Routes>
                      <Route path={'/'} element={<Home/>}/>
                      <Route path={'/about'} element={<About/>}/>
                      <Route path={'/courses'} element={<Course/>}/>
                      <Route path={'/contact'} element={<Contact/>}/>
                      <Route path={'/batafsil/:id'} element={<Batafsil/>}/>
                  </Routes>
                <Footer/>
          </div>
      </Router>
        </UserContext.Provider>

  );
}

export default App;
