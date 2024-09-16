import React from 'react';
import styles from '../styles/About.module.css';

const About = () => {
  const socialLinks = [
    { name: '𝕏', url: 'https://x.com/gullhaf' },
    { name: 'GitHub', url: 'https://github.com/danshahaf' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shahaf-dan/' },
    { name: 'Medium', url: 'https://medium.com/@shahafdan' }
  ];

  return (
    <div id="about" className={styles.about}>
      <div className={styles.content}>
        <h1>Shahaf Dan</h1>
        <h3>Data Scientist • Engineer • Photographer</h3>
        
        {socialLinks.map((link, index) => (
          <a 
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactbtn}
          >
            {link.name}
          </a>
        ))}

        <p>
          I live in New York City and work as a Data Scientist in resinsurance. 
          
          <br />
          <br />
          
          I was born in Israel, moved to California, studied in Boston, and now face the next chapter in the jungle of concrete.
                    
          <br />
          <br />

          In my free time I try to read, write, explore, and scavenge the city for the moments worth capturing on camera.

          <br />
          <br />

          For a while now I have been pondering the meaning of life, and am now trying to work on something worth dedicating it to.
          
          <br />
          <br />

          Stay tuned for more to come.
        </p>
      </div>
    </div>
  );
};

export default About;