import React from "react";
import styles from "./InputDesign.module.css";

const CharacterProfile = ({ nombre, imagen, species }) => {

  return (
    <div className={styles.content8}>
      <article className={styles.teammember}>
        <div className={styles.div7}>
        <img src={imagen} alt={nombre} />
        </div>
        <h2 className={styles.leftcontent}>{nombre}</h2>
        <p className={styles.leftcontent}>{species}</p>
      </article>
    </div>
  );
};

export default CharacterProfile;
