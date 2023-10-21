// components/Cover.js

import React from 'react';
import './Cover.css';

function Cover() {
    return (
        <div id = "cover">
            <div className="padder">
                <h1>HelloWorld!</h1>
                <h2>My name is Shahaf, nice to meet you!</h2>
                <h4>
                    ◦ Data Scientist, Software Engineer, Tech Reporter
                    <br />
                    ◦ Boston University Alum | Bachelor Degree in Computer Science '22
                    <br />
                    ◦ Las Positas College Alum | Associate Degrees in Computer Science, Physics, Mathematics '20
                </h4>
                <a className = "resume-btn" href='attachments/pdfs/resume.pdf'>My Resume &nbsp; <i className="fa fa-file-text"></i></a>
            </div>
        </div>
    );
}

export default Cover;
