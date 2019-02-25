import React, {Component} from 'react';

class Education extends Component {
    render(){
        return (
            <div>
                <div className="education-icon"><i className="fa fa-graduation-cap fa-lg"></i></div>
                <div className="bullet-education-1"></div>
                <div className="bullet-education-2"></div>

                <div className="education-title-main">Education</div>
                <div className="education-1-start-time">2007-07</div>
                <div className="education-1-end-time">2011-06</div>
                <div className="education-1-title">Bachelor of Technology (Computer Science)</div>
                <div className="education-1-school">B. Tech in Computer Science (72%)</div>
                <div className="education-2-start-time">2005-04</div>
                <div className="education-2-end-time">2006-03</div>
                <div className="education-2-title">Kendriya Vidyalaya, Kanpur</div>
                <div className="education-2-school">Intermediate in Science stream (77%)</div>
                
            </div>
        );
    }
}

export default Education;