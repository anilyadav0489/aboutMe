import React, { Component } from 'react';

class TimelineDates extends Component {
    render() {
        return (
            <div className="timeline-dates">
                <div className="timeline-1">
                    <div className="designation-start-time">2019-04</div>
                    <div className="designation-end-time">Present</div>
                </div>
                <div className="timeline-2">
                    <div className="designation-start-time">2018-09</div>
                    <div className="designation-end-time">2019-03</div>
                </div>
                <div className="timeline-3">
                    <div className="designation-start-time">2012-04</div>
                    <div className="designation-end-time">2018-08</div>
                </div>
                <div className="timeline-5">
                    <div className="designation-start-time">2007-07</div>
                    <div className="designation-end-time">2011-06</div>
                </div>
                
            </div>
        );
    }
}

export default TimelineDates;