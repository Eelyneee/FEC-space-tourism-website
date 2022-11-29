import { useEffect, useState } from "react";
import Navbar1 from "../components/Navbar1";
import "../style/destination.css";
import "../style/share.css";

function Destination() {


    const [destination, setDestination] = useState();
    const [index, setIndex] = useState(0);

    const handleClick = (divNum) => () => {
        setIndex(divNum);
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
                setDestination(myJson.destinations);
                console.log(myJson.destinations);
            });
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="background dest-bg">
            {
                destination == null ? <p>Loading</p> :
                    <div>
                        <Navbar1 />
                        <p className="dest-title"> Pick your destination</p>
                        <div className="dest-container">
                            <img className="dest-img" src={destination[index].images.png} alt={"destination-" + destination[index].name} />
                            <div className="dest-textbox">
                                <div className="dest-subbox1">
                                    <p className={index === 0 ? "dest-subbox1-text dest-active" : "dest-subbox1-text "} onClick={handleClick(0)}>Moon</p>
                                    <p className={index === 1 ? "dest-subbox1-text dest-active" : "dest-subbox1-text "} onClick={handleClick(1)}>Mars</p>
                                    <p className={index === 2 ? "dest-subbox1-text dest-active" : "dest-subbox1-text "} onClick={handleClick(2)}>Europa</p>
                                    <p className={index === 3 ? "dest-subbox1-text dest-active" : "dest-subbox1-text "} onClick={handleClick(3)}>Titan</p>
                                </div>
                                <h1 className="dest-name">{destination[index].name}</h1>
                                <p className="dest-description">{destination[index].description}</p>
                                <div className="dest-subbox2">
                                    <div className="dest-margin">
                                        <p className="dest-subhead2">Avg. distance</p>
                                        <p className="dest-subcontent">{destination[index].distance}</p>
                                    </div>
                                    <div className="dest-margin">
                                        <p className="dest-subhead2">EST travel time</p>
                                        <p className="dest-subcontent">{destination[index].travel}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Destination;