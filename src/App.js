import './App.css';
import { BrowserRouter, Routes, Route, Link, } from "react-router-dom";
import Destination from './pages/Destination';
import Technology from './pages/Technnology';
import Home from './pages/Home';
import Crew from './pages/Crew';
import Navbar1 from './components/Navbar1';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/nav" element={<Navbar1 />} />
      </Routes>
    </BrowserRouter>
  );
}

// function Users() {
//   return (
//     <div>
//       <nav>
//         <Link to="me">My Profile</Link>
//       </nav>

//       <Routes>
//         <Route path=":id" element={<Technology />} />
//         <Route path="me" element={<Technology />} />
//       </Routes>
//     </div>
//   );
// }
export default App;