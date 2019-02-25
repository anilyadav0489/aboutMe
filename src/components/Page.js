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
                <Experience />
                <Education />
                <PersonalInfo />
                <Skills />
                <div className="bullet-summary"></div>
                <div className="bullet-experience-1"></div>
                <div className="bullet-experience-2"></div>
                <div className="bullet-experience-3"></div>
                <div className="bullet-experience-4"></div>
                <div className="bullet-education-1"></div>
                <div className="bullet-education-2"></div>

            </div>
        );
    }
}

export default Page;