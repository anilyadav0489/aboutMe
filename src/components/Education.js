import React, {Component} from 'react';

class Education extends Component {
    render(){
        return (
            <div>
                <div className="education-icon"><i className="fa fa-graduation-cap fa-lg"></i></div>

                <div className="education-title-main">Education</div>
                
                <div className="bullet-education"><i className="fa fa-circle fa-md"></i></div>
                <div className="education-title">Bachelor of Technology (Computer Science)</div>
                <div className="education-school">B. Tech in Computer Science (72%)</div>
                
                <div className="bullet-education"><i className="fa fa-circle fa-md"></i></div>
                <div className="education-title">Kendriya Vidyalaya, Kanpur</div>
                <div className="education-school">Intermediate in Science stream (77%)</div>
                
            </div>
        );
    }
}

export default Education;