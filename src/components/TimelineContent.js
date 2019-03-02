import React, { Component } from 'react';
import Summary from './Summary';
import Experience from './Experience';
import Education from './Education';

class TimelineContent extends Component {
    render() {
        return (
            <div className="timeline-content">
                <Summary />
                <Experience />
                <Education />
            </div>
        );
    }
}

export default TimelineContent;