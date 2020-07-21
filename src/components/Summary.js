import React, {Component} from 'react';

class Title extends Component {
    render(){
        return (
            <div className="summary-section">
                <div className="summary-icon"><i className="fa fa-graduation-cap fa-lg"></i></div>
                <div className="summary-title">Summary</div>
                <div className="bullet-summary"><i className="fa fa-circle fa-md"></i></div>
                <div className="summary">Web developer and artist with 8+ years of experience in front-end development using React JS, ECMAScript 2015 (ES6), Unit testing with Enzyme and Jest. Also having experience working with GIT and JIRA. Seeking job in a top technology firm.</div>
                
            </div>
        );
    }
}

export default Title;