import React from "react";

class InfoBox extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className="p-3 bg-info text-white my-3">
                    <div className="container">
                        <h5 className="display-4">Welcome to the Travel Guide</h5>
                        <p className="lead">Your one-stop destination for exploring the best cities around the world. Discover top attractions, local cuisine, and hidden gems with us!</p>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default InfoBox;