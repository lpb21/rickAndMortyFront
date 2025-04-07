import React from "react";
import styles from "./InputDesign.module.css";

const CharacterListItem = ({ image, name, species, isStarred, onClick }) => {
  return (
    <article 
    className={styles.stackedListsItem}
    onClick={onClick}
    style={{ cursor: "pointer" }}>
      <div className={isStarred ? styles.content2 : styles.content3}>
        <img src={image} className={styles.img3} alt={name} />
        <div className={styles.text}>
          <h3 className={styles.title2}>{name}</h3>
          <p className={styles.suportingtext}>{species}</p>
        </div>
        <button className={styles.slideOversIconbutton}
        onClick={(e) => e.stopPropagation()}>
          <img
            src={isStarred ? "https://cdn.builder.io/api/v1/image/assets/TEMP/cd0813ede9b6b9d42e3d614da42e20d835773362?placeholderIfAbsent=true" : "https://cdn.builder.io/api/v1/image/assets/TEMP/856b5a1cb2690341757e556385e183e5f945625f?placeholderIfAbsent=true"}
            className={styles.img4}
            alt={isStarred ? "Starred" : "Not starred"}
          />
        </button>
      </div>
    </article>
  );
};

export default CharacterListItem;
