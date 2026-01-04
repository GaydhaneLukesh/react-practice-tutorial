import React from "react";
import CityCard from "./CityCard";
import city1 from "../../assets/img/card_1.jpg";
import city2 from "../../assets/img/card_2.jpg";
import city3 from "../../assets/img/card_3.jpg";
import city4 from "../../assets/img/card_4.jpg";
import city5 from "../../assets/img/card_5.jpg";
import city6 from "../../assets/img/card_6.jpg";

class Cities extends React.Component {
    render() {
        let cities = ["Jaipur", "Mumbai", "Pune", "Bangalore", "Chennai", "Hyderabad"];
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <CityCard cityCard={city1} cityName={cities[0]}/>
                        </div>
                        <div className="col-md-3">
                            <CityCard cityCard={city2} cityName={cities[1]}/>
                        </div>
                        <div className="col-md-3">
                            <CityCard cityCard={city3} cityName={cities[2]}/>
                        </div>
                        <div className="col-md-3">
                            <CityCard cityCard={city4} cityName={cities[3]}/>
                        </div>
                        <div className="col-md-3">
                            <CityCard cityCard={city5} cityName={cities[4]}/>
                        </div>
                        <div className="col-md-3">
                            <CityCard cityCard={city6} cityName={cities[5]}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Cities;