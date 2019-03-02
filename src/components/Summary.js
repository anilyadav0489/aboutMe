import React, {Component} from 'react';

class Title extends Component {
    render(){
        return (
            <div className="summary-section">
                <div className="summary-icon"><i className="fa fa-graduation-cap fa-lg"></i></div>
                <div className="summary-title">Summary</div>
                <div className="bullet-summary"><i className="fa fa-circle fa-md"></i></div>
                <div className="summary">Web developer and artist with 6+ years of experience in front-end development using React JS, object-oriented and user-centered design, seeks position with a top technology firm.</div>
                
            </div>
        );
    }
}

export default Title;