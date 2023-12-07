import './App.css';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import About from "./components/About";
import Create from "./components/Create";
import Note from "./components/Note";
import Error from "./components/Error";

function App() {
    return (
            <div className="main border rounded bg-light">
                <Router>
                    <Header/>
                    <Routes>
                        <Route path='/' element={<Main/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/create' element={<Create/>}/>
                        <Route path='/note/' element={<Note/>}/>
                        <Route exact path='/note/:noteURL' element={<Note/>}/>
                        <Route path="*" element={<Error/>}/>
                    </Routes>
                    <Footer/>
                </Router>
            </div>


    );
}

export default App;
