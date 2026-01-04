import React from "react";

class  CityCard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="city-card">
                    <img src={this.props.cityCard} className="img-fluid" alt={this.props.cityName}/>
                    <div className="city-details">
                        <h4 className="city-title">{this.props.cityName}</h4>
                        <p>A tourist spot is a place people visit for enjoyment, sightseeing, and relaxation. It is known for natural beauty, historical importance, culture, entertainment, or adventure activities...</p>
                        <button className="btn btn-primary btn-sm">Read More</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default CityCard;