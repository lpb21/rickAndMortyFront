"use client";
import React, { useState } from "react";
import styles from "./InputDesign.module.css";
import CharacterList from "./CharacterList";
import CharacterDetails from "./CharacterDetails";

const InputDesign = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  return (
    <main className={styles.characterlist}>
      <div className={styles.div}>
        <CharacterList onCharacterSelect={setSelectedCharacter}/>
        <CharacterDetails character={selectedCharacter}/>
      </div>
    </main>
  );
};

export default InputDesign;
