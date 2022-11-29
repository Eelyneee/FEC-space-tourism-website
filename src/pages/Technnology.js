import Navbar1 from "../components/Navbar1";
import { useState, useEffect } from "react";
import "../style/technology.css";
import "../style/share.css";

function Technology() {
    const [tech, setTech] = useState();
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
                setTech(myJson.technology);
                console.log(myJson.technology);
            });
    }

    useEffect(() => {
        getData()
    }, [])

    return (<div className="background tech-bg">
        <Navbar1 />
        {
            tech == null ? <p>Loading...</p> : <div>
                <p className="tech-title"> Space launch 101</p>
                <div className="tech-container">
                    <div className="tech-box">
                        <div className="tech-numbox">
                            <p className={index === 0 ? "tech-num  tech-active" : "tech-num"} onClick={handleClick(0)}>1</p>
                            <p className={index === 1 ? "tech-num tech-active" : "tech-num "} onClick={handleClick(1)}>2</p>
                            <p className={index === 2 ? "tech-num tech-active" : "tech-num "} onClick={handleClick(2)}>3</p>
                        </div>
                        <div className="tech-textbox">
                            <p className="tech-subtitle">The Technology ...</p>
                            <h1 className="tech-name">{tech[index].name}</h1>
                            <p className="tech-desc">{tech[index].description}</p>
                        </div>
                    </div>
                    <img className="tech-img" src={tech[index].images.portrait} alt={tech[index].images.landscape} />
                </div>
            </div>
        }
    </div>)
}

export default Technology;