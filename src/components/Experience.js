import React from 'react';
import ExperienceSaga from './ExperienceSaga';

function Experience() {
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
        <div id="experience" className='section'>
            <h1> Experience </h1>
            <div>
            {sagas.map((saga, index) => (
                <ExperienceSaga key={index} {...saga} />
            ))}
            </div>
            
        </div>
    );
}

export default Experience;