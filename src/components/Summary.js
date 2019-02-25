import React, {Component} from 'react';
import anilImage from '../resources/anilImage.jpg';

class Title extends Component {
    render(){
        return (
            <div>
                
                <div>
                    <img src={anilImage} className="my-picture" alt="ay"></img>
                </div>
                <div className="name-title">Anil Yadav</div>
                <div className="work-title">Web Developer</div>
                
            </div>
        );
    }
}

export default Title;