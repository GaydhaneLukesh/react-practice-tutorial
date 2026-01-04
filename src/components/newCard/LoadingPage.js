import React from "react"; 

class LoadingPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="loading-page">
                      <div className="wrapper">
                        <div className="d-flex flex-column align-items-center justify-content-center text-center h-100">
                            <h2 className="display-3">Welcome to LG Tours and Travels</h2>
                            <p className="lead">Welcome to LG Tours and Travels, your trusted partner for unforgettable journeys. We offer comfortable, safe, and affordable travel solutions tailored to your needs. From family vacations to corporate trips, our expert planning, reliable services, and customer-focused approach ensure a smooth and memorable travel experience every time.</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default LoadingPage;