import React from "react";

class ContactPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <iframe src="https://www.getyourguide.com/en-gb/mathura-l95732/from-mathura-same-day-spiritual-tour-mathura-vrindavan-t873473/?ranking_uuid=5c48b7e1-a2aa-4c45-9547-711441175ba3&utm_medium=sharing&utm_campaign=activity_details_desktop" 
                                    width="500" height="450" frameBorder="0" 
                                    allowFullScreen="" aria-hidden="false" tabIndex="0" />
                                </div>
                            </div>
                        </div> 
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header bg-primary text-white">
                                    <p className="h4">Contact Us</p>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Name"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Subject"/>
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" rows="3" placeholder="Message"></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <h4>Contact Us</h4>
                    <p>If you have any questions, feel free to reach out!</p> */}
                </div>
            </React.Fragment>
        );
    }
}

export default ContactPage;