import React from 'react';
import styles from '../styles/Work.module.css';

const Work = () => {
  const articles = [
    {
      title: "Israel: A Divided Nation",
      description: "My perspective on the ongoing political situation in Israel amidst the political division.",
      date: "2023-08-29",
      slug: "a-divided-nation-may-unite-only-by-a-common-enemy-witnessing-israels-unification-amid-conflict-7a146188fbd8"
    }
  ];

  return (
    <div id="work" className={styles.work}>
      <div className={styles.content}>
        <h2>My Writings</h2>
        <table className={styles.workTable}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article, index) => (
              <tr key={index}>
                <td>
                  <a 
                    href={`https://medium.com/@shahafdan/${article.slug}`}
                    className={styles.articleLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {article.title}
                  </a>
                </td>
                <td>{article.description}</td>
                <td>{new Date(article.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Work;