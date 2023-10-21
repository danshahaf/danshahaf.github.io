import React from 'react';
import './TopBar.css';

function TopBar() {
    return (
        <div className="top-bar">
            <ul>
                <li><a href="#cover"><i className="fa fa-home"></i> Cover</a></li>
                <li><a href="#"><i className="fa fa-user"></i> Intro</a></li>
                <li><a href="#"><i className="fa fa-graduation-cap"></i> Education</a></li>
                <li><a href="#"><i className="fa fa-briefcase"></i> Experience</a></li>
                <li><a href="#"><i className="fa fa-cogs"></i> Skills</a></li>
                <li><a href="#"><i className="fa fa-envelope"></i> Contact</a></li>
            </ul>
        </div>
    );
}

export default TopBar;
