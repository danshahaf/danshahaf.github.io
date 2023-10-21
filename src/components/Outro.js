// ./components/Outro.js

import React from 'react';
import './Outro.css';

function Outro() {
    return (
        <div id="outro" className="section">
            <div className = "subsection">
                <div className='context'>
                    <h1>That's all folks, thanks!</h1>
                    <h2>Let's connect, build together, or just exchange socials.</h2>
                    <h3>I always love to hear about a good entrepreneurial opportunity, a fun software engineering project, or an idea for a cool techy product. </h3>
                </div>
                <div className='gallery'>
                    <form action="mailto:dan.shachaf@gmail.com" method="post" enctype="text/plain">
                        <input className="emailme" type="submit" name="submit" value="   Email Me   " />
                    </form>

                    <div className="socialmedia">
                        <a className="link" href="https://www.linkedin.com/in/shahaf-dan-66812b180/"><i className="fab fa-linkedin"></i></a>
                        <a className="link" href="https://medium.com/@shahaf"><i className="fab fa-medium"></i></a>
                        <a className="link" href="https://twitter.com/shahaf_dan"><i className="fab fa-twitter"></i></a>
                        <a className="link" href="https://github.com/ShahafDan25"><i className="fab fa-github"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Outro;
