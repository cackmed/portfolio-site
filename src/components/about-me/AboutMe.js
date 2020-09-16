import React from 'react';
import styles from './AboutMe.css';



const AboutMe = () => {

  return (
    <div className={styles.div}>
      <img src="https://placekitten.com/300/300" width="200" className={styles.img}/>
      <h1>Caleb Pendergraft</h1>
      <h3>Full Stack Developer</h3>
        
    </div>
  );
};

export default AboutMe;
