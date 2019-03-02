import React, { Component } from 'react';

import PersonalInfo from './PersonalInfo';
import Skills from './Skills';
import Title from './Title';
import TimelineDates from './TimelineDates';
import TimelineContent from './TimelineContent';
import Certifications from './Certifications';

class Page extends Component {
    render() {
        return (
            <div className="page">
                <div className="left-half">
                    <Title />
                    <div className="left-half-bottom-content">
                        <TimelineDates />
                        <TimelineContent />
                    </div>
                </div>

                <div className="right-half">
                    <PersonalInfo />
                    <Skills />
                    <Certifications />
                </div>
                <div className="timeline-tip-bottom"></div>
                <div className="left-curve-bottom"></div>
                <div className="right-curve-bottom"></div>
                
                <div className="vertical-timeline"></div>
            </div>
        );
    }
}

export default Page;