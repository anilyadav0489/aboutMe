import React, {Component} from 'react';

class Certifications extends Component {
    render(){
        return (
            <div className="certifications-section">
                <div className="certification-icon"><i className="fa fa-trophy fa-lg"></i></div>
                <div className="certification-title-main">Certifications</div>
                <div className="certification-name">OCJP 6 (2014)</div>
                <div className="certification">Oracle Certified Java Programmer</div>
                <div className="certification-name">SAFe 4.0 (2017)</div>
                <div className="certification">Scaled Agile Framework 4.0</div>
                
            </div>
        );
    }
}

export default Certifications;