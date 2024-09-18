import React from 'react';
import styles from '../styles/Work.module.css';

const Work = () => {
  const projects = []; // No projects for now

  return (
    <div id="work" className={styles.work}>
      <div className={styles.content}>
        <h2>My Work</h2>
        <table className={styles.workTable}>
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Description</th>
              <th>Repo Link</th>
            </tr>
          </thead>
          <tbody>
            {/* Empty tbody for now as no projects are available */}
            {projects.length === 0 && (
              <tr>
                <td colSpan="3" className={styles.noProjects}>
                  No projects to display yet. Check back soon!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Work;
