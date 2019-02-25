import React, {Component} from 'react';
import Experience from './Experience';
import Education from './Education';
import PersonalInfo from './PersonalInfo';
import Skills from './Skills';
import Title from './Title';

class Page extends Component {
    render() {
        return (
            <div className="page">
                <Title />
                <div className="vertical-timeline"></div>
                <div className="left-half">
                    <Experience />
                    <Education />
                </div>
                <div className="right-half">
                    <PersonalInfo />
                    <Skills />
                </div>
            </div>
        );
    }
}

export default Page;