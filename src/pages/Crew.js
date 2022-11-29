import { useState, useEffect } from "react";
import Navbar1 from "../components/Navbar1";
import "../style/crew.css";
import "../style/share.css";

function Crew() {
    const [crew, setCrew] = useState();
    const [index, setIndex] = useState(0);

    const handleClick = (num) => () => {
        setIndex(num);
    }

    const getData = () => {
        fetch('data.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                setCrew(myJson.crew);
                console.log(myJson.crew);
            });
    }

    useEffect(() => {
        getData()
    }, [])

    return (<div className="background crew-bg">
        <Navbar1 />
        {
            crew == null ? <p>Loading...</p> : <div>
                <p className="crew-title"> Meet your crew</p>
                <div className="crew-container">
                    <div className="crew-textbox">
                        <div>
                            <h2 className="crew-role">{crew[index].role}</h2>
                            <h1 className="crew-name">{crew[index].name}</h1>
                            <p className="crew-bio">{crew[index].bio}</p>
                        </div>
                        <div className="crew-dot-group">
                            <span className={index === 0 ? "crew-dot crew-active" : "crew-dot"} onClick={handleClick(0)}>•</span>
                            <span className={index === 1 ? "crew-dot crew-active" : "crew-dot"} onClick={handleClick(1)}>•</span>
                            <span className={index === 2 ? "crew-dot crew-active" : "crew-dot"} onClick={handleClick(2)}>•</span>
                            <span className={index === 3 ? "crew-dot crew-active" : "crew-dot"} onClick={handleClick(3)}>•</span>
                        </div>
                    </div>
                    <img className="crew-img" src={crew[index].images.png} alt={crew[index].images.png} />
                </div>
            </div>
        }
    </div>)
}

export default Crew;