import React from "react";
import card1 from '../assets/img/card_1.jpg';
import card2 from '../assets/img/card_2.jpg';
import card3 from '../assets/img/card_3.jpg';
import card4 from '../assets/img/card_4.jpg';
import CountryCard from "./CountryCard";

class CountryCards extends React.Component {
    render() {
        let countries = ['Paris', 'Italy', 'Germany', 'Spain'];
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <CountryCard CardImg={card1} countryName={countries[0]}/>
                        </div>
                        <div className="col-md-3">
                            <CountryCard CardImg={card2} countryName={countries[1]}/>
                        </div>
                        <div className="col-md-3">
                            <CountryCard CardImg={card3} countryName={countries[2]}/>
                        </div>
                        <div className="col-md-3">
                            <CountryCard CardImg={card4} countryName={countries[3]}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default CountryCards;