import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import FootBar from './components/FootBar';
import NavBar from './components/NavBar';
import Particle from './components/Particle';
import Home from './pages/home';
import AboutMe from './pages/aboutMe';
import Skills from './pages/skills';
import Projects from './pages/projects';
function App() {
  return (
    <div className="App flex justify-center fade">
      <Particle className="-z-10 absolute" />
      <BrowserRouter>
        <main className="z-1 relative block w-5/6">
          <NavBar />
          <div className="shadow-white/40 shadow-2xl w-full bg-indigo-200/50 mt-28 rounded-2xl flex  items-center justify-center p-1">
            <div className=" border-grey w-full h-full border border-indigo-200 rounded-2xl blok m-4 pt-5 lg:pt-14  bg-indigo-200/90">
              <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />           
              </Routes>
            </div>
          </div>
          <FootBar />
        </main>
      </BrowserRouter>
    </div>
  );
}
export default App;
