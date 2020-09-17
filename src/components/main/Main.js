import React from 'react';



const Main = () => {

  return (
    <>
      <section className="page-section hidden" data-bgcolor="#d8dcff">
        <div className="col intro-col">
          <h1>Caleb Pendergraft</h1>
          <h2>Full Stack Developer</h2>
          <a href="#first-project">
            <img id="down-arrow" src="https://chippd.github.io/minimal-portfolio/img/arrow.png" alt="" width="50"/>
          </a>
        </div>
      </section>

      <section className="page-section hidden" id="first-project" data-bgcolor="#71B280" data-textcolor="ivory">

        <div className="col">
          <a href="https://mydevportfol.io?ref=minportfolio" target="_blank" rel="noreferrer">
            <h3>Mydevportfol.io</h3>
          </a>
          <p>
          A web application built with Angular 4+ to help developers and programmers generate portfolios from their GitHub profiles
          </p>
        </div>
        <div className="col">
          <a href="https://mydevportfol.io?ref=minportfolio" target="_blank" rel="noreferrer">
            <img className="project-img " src="https://chippd.github.io/minimal-portfolio/img/mydevportfolio.png"  alt="An app for developers and programmers to build portfolio websites"/>
          </a>
        </div >
        <div>
          <a href="#second-project">
            <img id="down-arrow" src="https://chippd.github.io/minimal-portfolio/img/arrow.png" alt="" width="50"/>
          </a>
        </div>
        
      </section>
      <section className="page-section hidden" id="second-project" data-bgcolor="#307c94" data-textcolor="white">

        <div className="col">
          <a href="https://mydevportfol.io?ref=minportfolio" target="_blank" rel="noreferrer">
            <h3>Mydevportfol.io</h3>
          </a>
          <p>
          A web application built with Angular 4+ to help developers and programmers generate portfolios from their GitHub profiles
          </p>
        </div>
        <div className="col">
          <a href="https://mydevportfol.io?ref=minportfolio" target="_blank" rel="noreferrer">
            <img className="project-img " src="https://chippd.github.io/minimal-portfolio/img/mydevportfolio.png"  alt="An app for developers and programmers to build portfolio websites"/>
          </a>
        </div >
      </section>
    </>
  );
};

export default Main;
