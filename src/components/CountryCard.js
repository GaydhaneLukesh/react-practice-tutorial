import React from "react";

class CountryCard extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <img src={this.props.CardImg} className="img-fluid" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.countryName}</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button className="btn btn-primary btn-sm">Read More</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default CountryCard;