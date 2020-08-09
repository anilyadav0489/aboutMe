import React, {Component} from 'react';

class Experience extends Component {
    render(){
        return (
            <div>
                
                <div className="experience-info-icon"><i className="fa fa-briefcase fa-lg"></i></div>
                <div className="experience-title-main">Experience</div>
                
                
                <div className="bullet-experience"><i className="fa fa-circle fa-md"></i></div>
                <div className="designation-title">Tech Lead - App Development</div>
                <div className="company-title">Ameriprise Financial</div>
                <div className="project-title">Project: Client Reassignemnt</div>
                <div className="project-detail">Working as front-end developer in an application for financial advisors. 
                Have built the front-end with React JS and MobX. Have written unit test cases in enzyme and jest.
                This application is built with infinite scroll feature and prefetching optimizations.
                Project followed Agile methodology (JIRA) and the code repository is under bit bucket.
                Well aware of GIT commands.</div>
                

                <div className="bullet-experience"><i className="fa fa-circle fa-md"></i></div>
                <div className="designation-title">Sr. Associate</div>
                <div className="company-title">Cognizant</div>
                <div className="project-title">Project: COMET</div>
                <div className="project-detail">Worked as front-end developer for banking application (for Wellington). 
                Primarily worked on React JS and AG Grid for the application layout. 
                Application being deployed on AWS, helped me learn high level details of AWS.
                Project was on the insurance domain for the agents to keep track of their distributed instruments.</div>
                
                <div className="bullet-experience"><i className="fa fa-circle fa-md"></i></div>
                <div className="designation-title">Associate Consultant</div>
                <div className="company-title">Syntel</div>
                <div className="project-title">Project: Enterprise Pricing Request System</div>
                <div className="project-detail">Worked in waterfall model for the application built on React
                and Javascript. Lead and coordinated a team of 6 members with business partners. 
                Learnt Restful API(s) and how a good enterprise architecture helps in scalability of application.
                Application helped FedEx to generate the pricing for all shipments, based on market conditions 
                and strategic inputs.</div>
                
                
            </div>
        );
    }
}

export default Experience;