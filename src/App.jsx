import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects, Test } from "./pages";

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home/1" />} />
          <Route path='/home/:stage' element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/test' element={<Test />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
