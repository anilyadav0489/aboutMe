import React, { Component } from 'react';
import anilImage from '../resources/anilImage.jpg';

class Title extends Component {
    render() {
        return (
            <div className="title-section">
                <div className="title-image">
                    <img src={anilImage} className="my-picture" alt="ay"></img>
                </div>
                <div className="title-content">
                    <div className="name-title">Anil Yadav</div>
                    <div className="work-title">Web Developer</div>
                </div>
            </div>
        );
    }
}

export default Title;