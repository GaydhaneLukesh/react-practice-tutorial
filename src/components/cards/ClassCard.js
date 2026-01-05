import {Component, Fragment} from 'react';

class ClassCard extends Component {
    render() {
        return (
            <Fragment>
                <div className='classCard'>
                    <div className='classCard-body'>
                        <h2>Class Card</h2>
                        <p>This is a card, Creating it with class system as per ol ways.</p>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default ClassCard;