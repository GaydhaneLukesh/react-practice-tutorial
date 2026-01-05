 import React from "react";

 class Welcome extends React.Component {
    
    render() {
        let greetings = "Good Afternoon";
        return (
           <React.Fragment>
            <div className="container">
                <div className="card">
                    <div className="card-head">
                        <h2>Welcome Greetings</h2>
                    </div>
                    <div className="card-body">
                        <h3>{greetings}</h3>
                        <h4 className="card-title">{this.props.name}</h4>
                        <button type="button" className="btn btn-success">Click Here</button>
                    </div>
                </div>
            </div>
           </React.Fragment>
        );
    }
 }

 export default Welcome;