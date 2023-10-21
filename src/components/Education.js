import React from 'react';
import EducationSaga from './EducationSaga';

function Education() {
    const sagas = [
        {
            logo: "logos/bostonu.png",
            location: "Boston University",
            title: "Boston University",
            degree: "BA Computer Science",
            timeframe: "2020 - 2022",
            description: (
                <>
                    <h5>Academic Activity</h5>
                    {/* ... rest of the content ... */}
                </>
            ),
            gallery: [
                { caption: "Alpha Epsilon Pi Seniors", image: "photos/aepi.jpg" },
                { caption: "Student Government", image: "photos/busg.jpg" }
            ]
        },
        // ... Add other sagas in a similar format ...
    ];

    return (
        <div id="academics" className="section">
            <h1> Education </h1>
            <div className = "subsection"> {/* BOSTON UNIVERSITY */}
                <div className = "context">
                    
                </div>
                <dib className = "gallery">

                </dib>
            </div>
            
        </div>
    );
}

export default Education;
