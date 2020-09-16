import React from 'react';
import styles from './Project.css';



const Projects = ({ style, link, projectName, projectDescription, projectTechnology }) => {

  if(style === 'grey-row') {
    return (
      <div className={styles.greyRow}>
        <section className={styles.section}>
          <div className={styles.rowImage}>
            <div className={styles.section}>
              <img src="https://placekitten.com/600/600" className={styles.mainImage}/>
            </div>
            <div className={styles.section}>
              <h2>
                <a href={link} target="blank">{projectName}</a>
              </h2>
              <p>{projectDescription}</p>
              <h4>Technology</h4>
              <p>{projectTechnology}</p>
            </div>
          </div>
          <div className={styles.rowText}>
            <div className={styles.imgContainer}>
              <img src="https://placekitten.com/100/42"  width="100"/>
              <img src="https://placekitten.com/100/42"  width="100"/>
              <img src="https://placekitten.com/100/42"  width="100"/>
              <img src="https://placekitten.com/100/42"  width="100"/>
              <img src="https://placekitten.com/100/42"  width="100"/>
              <img src="https://placekitten.com/100/42"  width="100"/>
            </div>
          </div>
          <div className={styles.rowText}>
            <a className={styles.button} href={link} target="blank">Place Holder</a>
          </div>
        </section>
      </div>
    );
  }
  else {
    return (
      <div className={styles.whiteRow}>
        <section className={styles.section}>
          <div className={styles.rowImage}>
            <div className={styles.section}>
              <img src="https://placekitten.com/600/600"/>
            </div>
            <div className={styles.section}>
              <h2>
                <a href={link} target="blank">{projectName}</a>
              </h2>
              <p>{projectDescription}</p>
              <h4>Technology</h4>
              <p>{projectTechnology}</p>
            </div>
          </div>
          <div className={styles.rowText}>
            <div className={styles.imgContainer}>
              <img src="https://placekitten.com/100/42"  width="100"/>
              <img src="https://placekitten.com/100/42"  width="100"/>
              <img src="https://placekitten.com/100/42"  width="100"/>
              <img src="https://placekitten.com/100/42"  width="100"/>
              <img src="https://placekitten.com/100/42"  width="100"/>
              <img src="https://placekitten.com/100/42"  width="100"/>
            </div>
          </div>
          <div className={styles.rowText}>
            <a className={styles.button} href={link} target="blank">Place Holder</a>
          </div>
        </section>
      </div>
    );
  }

  
};

export default Projects;
