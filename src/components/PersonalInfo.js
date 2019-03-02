import React, {Component} from 'react';

class PersonalInfo extends Component {
    render(){
        return (
            <div>
                <div className="personal-info-icon"><i class="fa fa-address-card fa-lg"></i></div>
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
                <div className="profile"><a href="https://anil-yadav.herokuapp.com" target="_blank">https://anil-yadav.herokuapp.com</a></div>
                <div className="linkedin-title">LinkedIn Profile</div>
                <div className="linkedin"><a href="https://www.linkedin.com/in/anil-yadav-53b67333/" target="_blank">https://www.linkedin.com/in/anil-yadav-53b67333/</a></div>
                
            </div>
        );
    }
}

export default PersonalInfo;