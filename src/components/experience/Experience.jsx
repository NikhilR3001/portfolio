import React from "react";
import { RxDotFilled } from "react-icons/rx";
import './experience.css';

const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <h2 className="section__title" style={{ marginBottom: "5vh" }}>
        Experience
      </h2>
      <div className="experience__container container grid">
        <div className="experience__content">
          <h2 className="experience__title">Associate Engineer</h2>
          <p>Seabed2Crest Pvt Ltd.</p>
          <span>08/2023 - 12/2024.</span>
          <ul>
            <li>
              <RxDotFilled /> 
               Developed dynamic web applications using React, Next.js,
              JavaScript, and TypeScript, ensuring high performance and
              functionality.
            </li>
            <li>
              <RxDotFilled />
              Collaborated with UI/UX designers, product managers, and QA teams
              to deliver scalable, user-focused solutions.
            </li>
            <li>
              <RxDotFilled />
              Implemented responsive design and performance optimizations for
              faster load times and improved engagement.
            </li>
            <li>
              <RxDotFilled />
              Wrote tests, debugged issues, and optimized code for better
              performance and reliability.
            </li>
            <li>
              <RxDotFilled />
              Participated in Agile ceremonies, managing tasks and delivering
              features on time.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
