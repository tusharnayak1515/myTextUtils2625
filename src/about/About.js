import React from "react";

import styles from "./about.module.css";

const About = ({ mode }) => {
  let isDarkMode;

  if (mode === "dark") {
    isDarkMode = true;
  } else {
    isDarkMode = false;
  }

  return (
    <div id={styles.about}>
      <h1 style={{ color: isDarkMode ? "white" : "black" }}>About Us</h1>
      <p style={{ color: isDarkMode ? "white" : "black" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        enim quo doloribus voluptatem voluptatum cupiditate eaque harum eos?
        Distinctio vel corporis vitae sed, saepe eveniet quidem reprehenderit
        veniam delectus, inventore quasi nulla nesciunt fugiat hic accusantium
        illo tempora animi maxime molestiae ratione consequuntur facilis. Porro
        nobis hic deserunt doloremque molestias.
      </p>
    </div>
  );
};

export default About;
