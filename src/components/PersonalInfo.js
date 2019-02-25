import React, {Component} from 'react';

class PersonalInfo extends Component {
    render(){
        return (
            <div>
                <div><i className="fa fa-address-card fa-lg"></i></div>
                <div className="personal-info-title">Personal Info</div>
                <div className="address-title">Address</div>
                <div className="address">Pune, Maharashtra - 412114</div>
                <div className="phone-title">Phone</div>
                <div className="phone">+91-84597-32047</div>
                <div className="email-title">E-Mail</div>
                <div className="email">AnilYadav0489@gmail.com</div>
                <div className="dob-title">Date of Birth</div>
                <div className="dob">24 April 1989</div>
                <div className="profile-title">Profile</div>
                <div className="profile">https://anil-yadav.herokuapp.com</div>
                <div className="linkedin-title">LinkedIn Profile</div>
                <div className="linkedin">https://www.linkedin.com/in/anil-yadav-53b67333/</div>
                
            </div>
        );
    }
}

export default PersonalInfo;