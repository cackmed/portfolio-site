import React from 'react';
import AboutMe from './about-me/AboutMe';
import Project from './project/Project';
import styles from './App.css';

export default function App() {
  const projectName = 'Project Name';
  const projectDesc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis. Metus vulputate eu scelerisque felis.';
  const projectTech = 'Urna condimentum mattis pellentesque id nibh tortor id. Amet justo donec enim diam. Cursus euismod quis viverra nibh cras pulvinar. Viverra maecenas accumsan lacus vel facilisis volutpat est velit. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Libero id faucibus nisl tincidunt eget. Amet facilisis magna etiam tempor orci eu lobortis elementum. Laoreet sit amet cursus sit amet dictum.';


  return (
    <main className={styles.container}>
      <AboutMe/>
      <Project style="grey-row" link={'https://www.google.com'} projectName={projectName} projectDescription={projectDesc} projectTechnology={projectTech}/>
      <Project style="white-row" link={'https://www.google.com'} projectName={projectName} projectDescription={projectDesc} projectTechnology={projectTech}/>
      <Project style="grey-row" link={'https://www.google.com'} projectName={projectName} projectDescription={projectDesc} projectTechnology={projectTech}/>
      <Project style="white-row" link={'https://www.google.com'} projectName={projectName} projectDescription={projectDesc} projectTechnology={projectTech}/>
    </main>
  );
}
