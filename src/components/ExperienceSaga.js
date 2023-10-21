// components/Education/EducationSaga.js

import React from 'react';
// import "expereience_saga.css"
function ExperienceSaga({ logo, location, title, degree, timeframe, description, gallery }) {
    return (
        <div className="job">
            <div className="edu">
                <div className="workplace">
                    <img src={logo} alt={title} />
                    <div className="role">
                        <h3>{location}</h3>
                        <h4><strong>{degree}</strong></h4>
                        <h5>{timeframe}</h5>
                    </div>
                </div>
                <div className="job-description">
                    {description}
                </div>
            </div>
            <div className="edu-gallery">
                {gallery.map((item, index) => (
                    <div key={index}>
                        <p>{item.caption}</p>
                        <img src={item.image} alt={item.caption} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExperienceSaga;
