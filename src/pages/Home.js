import Navbar1 from "../components/Navbar1";
import "../style/home.css";
import "../style/share.css";
import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    const exploreClicked = () => {
        navigate("/destination");
    };



    return (
        <div className="background home-bg">
            <Navbar1 />
            <div className="container">
                <div className="textbox">
                    <p className="para1">
                        So, you want to travel to</p>
                    <h1 className="headline">Space</h1>
                    <p className="para2">Let’s face it; if you want to go to space, you might as well genuinely go to
                        outer space and not hover kind of on the edge of it. Well sit back, and relax
                        because we’ll give you a truly out of this world experience!</p>
                </div>
                <button className="explore" onClick={exploreClicked}>Explore</button>
            </div>
        </div>
    )
}

export default Home;