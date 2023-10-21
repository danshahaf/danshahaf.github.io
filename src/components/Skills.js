import React from 'react';
import './Skills.css';
import FrontEnd from './Skills/Frontend';
import BackEnd from './Skills/Backend';
import Data from './Skills/Data';
import Other from './Skills/Other';

function Skills() {
    return (
        <div id="skills" className="section">
            <div className="skills-padder">
                <FrontEnd />
                <BackEnd />
                <Data />
                <Other />
            </div>
        </div>
    );
}

export default Skills;
