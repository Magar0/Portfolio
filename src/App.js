import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './pages/contact/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <section className="App">
      <main>
        <Routes>
          <Route path='/' element={<Navbar />}>

            <Route index element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />

          </Route>
        </Routes>
      </main>
      <footer>
        <p>Rakesh Magar | &copy; 2024. All rights reserved.</p>
      </footer>
    </section>
  );
}

export default App;
