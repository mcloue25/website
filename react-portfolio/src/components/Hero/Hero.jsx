import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Eoin</h1>
        <p className={styles.description}>
          I'm an ML Engineer & Data Scientist with over 4 years of experience <br/>
          Reach out if you'd like to learn more!
        </p>
        <a href="mailto:eoin.mcloughlin1997@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/linkedinProfilePicCircular.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      {/* <div className={styles.topBlur} />
      <div className={styles.bottomBlur} /> */}
    </section>
  );
};
