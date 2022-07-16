import React from 'react';
import { ProjectData } from "./ProjectData";
import "./Project.css";


function Project() {
  return (
    <section id="project">
      <h2>Projects</h2>
      <div className='project-container'>
        {ProjectData.map((item) => {
          return (
            < >
              <article className='project-items' key={item.id}>
                <div className='project-img'>
                  <img src={item.img} style={{ width: "50%", height: '50%' }} />
                </div>
                <h3>{item.name}</h3>
                <p >{item.description}</p>
                <p>Languages: {item.languages}</p>
                <a className="btn" href={item.github} target="_blank">Github</a>
                <a className="btn btn-primary" href={item.demo} target="_blank">Demo</a>
              </article>
            </>
          )
        })}
      </div>
    </section >
  );
}

export default Project;