import { Link, } from "react-router-dom";
import "../style/navbar.css";

function Navbar1() {

    const pathname = window.location.pathname;
    console.log(pathname);

    return (
        <div className="nav-container">
            <img className="navbar-img" src="logo.png" alt="logo" />
            <span className="line"></span>
            <nav className="navbar1">
                <Link to="/" className={pathname === "/" ? "link nav-active" : "link"}><b>00</b> Home</Link>
                <Link to="/destination" className={pathname === "/destination" ? "link nav-active" : "link"}><b>01</b> Destination</Link>
                <Link to="/crew" className={pathname === "/crew" ? "link nav-active" : "link"}><b>02</b> Crew</Link>
                <Link to="/technology" className={pathname === "/technology" ? "link nav-active" : "link"}><b>03</b> Technology</Link>
            </nav>
            <div className="navbar2-burger"></div>
        </div>
    )
}
export default Navbar1;