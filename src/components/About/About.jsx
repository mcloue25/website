import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/working.jpg")}
          alt="Me working on phase synchrony for MoveAhead"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Scientist</h3>
              <p>
              I'm a Data Scientist who designs Time Series Analysis models to translate complex data into actionable results 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Machine Learning Engineer</h3>
              <p>
                I have built numerous Time Series & Computer Vision models as part of my work & various projects
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I have designed & developed multiple dashboards for displaying the results of these models when applied to data in the wild
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
