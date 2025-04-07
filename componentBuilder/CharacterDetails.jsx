import React from "react";
import styles from "./InputDesign.module.css";
import CharacterProfile from "./CharacterProfile";

const CharacterDetails = ({character}) => {
  if (!character) return 
  

  return (
    <section className={styles.column2}>
      <div className={styles.profilebackground}>
        <CharacterProfile 
        nombre={character.name} 
        imagen={character.image}
        species={character.species}/>
        <div className={styles.menugroup}>
          <div className={styles.rowList}>
            <div className={styles.contentGroup}>
              <div className={styles.cellsInside}>
                <div className={styles.cellRegularElements}>
                  <div className={styles.texts}>
                    <h3 className={styles.text2}>Specie</h3>
                    <p className={styles.supportingtext}>{character.species}</p>
                  </div>
                </div>
              </div>
              <div className={styles.divider} />
            </div>
          </div>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b34f6df8f7347b9602c2a31b0aa6ee08a47f2ea5?placeholderIfAbsent=true" 
          className={styles.img20} 
          alt="" />
          <div className={styles.rowList}>
            <div className={styles.contentGroup}>
              <div className={styles.cellsInside}>
                <div className={styles.cellRegularElements}>
                  <div className={styles.texts}>
                    <h3 className={styles.text3}>Status</h3>
                    <p className={styles.supportingtext}>{character.status}</p>
                  </div>
                </div>
              </div>
              <div className={styles.divider} />
            </div>
          </div>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b34f6df8f7347b9602c2a31b0aa6ee08a47f2ea5?placeholderIfAbsent=true" 
          className={styles.img21} 
          alt="" />

          <div className={styles.rowList}>
            <div className={styles.contentGroup}>
              <div className={styles.cellsInside}>
                <div className={styles.cellRegularElements}>
                  <div className={styles.texts}>
                    <h3 className={styles.text4}>Occupation</h3>
                    <p className={styles.supportingtext}>Princess</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterDetails;
