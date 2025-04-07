"use client";
import React, { useEffect, useState } from "react";
import styles from "./InputDesign.module.css";
import SearchBar from "./SearchBar";
import CharacterListItem from "./CharacterListItem";
import { fetchCharacters } from "../lib/graphql";

const CharacterList = ({ onCharacterSelect }) => {
  const [allCharacters, setAllCharacters] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({});
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const pageSize = 5;

  // esta función la pasamos al SearchBar
  const handleApplyFilters = async (newFilters) => {
    setFilters(newFilters);
    const data = await fetchCharacters(1, newFilters); // reinicia en página 1
    if (data.length === 0) {
      alert("Sin resultados para la búsqueda");
    }
    setAllCharacters(data);
    setPage(1);
  };

 ;
  useEffect(() => {
    const loadInitialCharacters = async () => {
      const data = await fetchCharacters(1, {}); // sin filtros
      setAllCharacters(data);
      setPage(1); // opcional, por claridad
      if (data.length > 0) {
        onCharacterSelect(data[0]);
      }
    };
    loadInitialCharacters();
  }, [onCharacterSelect]);

  // 📦 Cargar personajes al cambiar filtros o página
  useEffect(() => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    // ✅ Filtro por búsqueda
  const filtered = allCharacters.filter((char) =>
    char.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
;
    setCharacters(filtered.slice(start, end));
  }, [page, allCharacters, searchTerm]);

  

  
  return (
    <section className={styles.column}>
      <div className={styles.div2}>
        <header className={styles.windowheaders}>
          <div className={styles.content}>
            <h1 className={styles.title}>Rick and Morty list</h1>
          </div>
        </header>
        {/* Barra de búsqueda */}
        <SearchBar 
        onApplyFilters={handleApplyFilters}
        onSearchTermChange={(term) => setSearchTerm(term)} 
        />
        {/* Lista de personajes */}
        <div className={styles.contacts}>
            <div className={`${styles.div3} ${styles.stickyHeader}`}>
              <div className={styles.div4}>
                <h2 className={styles.listHeader}>
                Starred Characters ({allCharacters.length})
                  </h2>
              </div>
            </div>
             {/* Renderizado de personajes */}
            {characters.map((char) => (
            <CharacterListItem
              key={char.id}
              image={char.image}
              name={char.name}
              species={char.species}
              isStarred={false} 
              onClick={() => onCharacterSelect(char)}
            />
          ))}

           {/* Controles de paginación simples */}
           <div style={{ marginTop: "1rem", display: "flex", gap: "10px" }}>
           <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
            >
              Anterior
            </button>
            <button
              onClick={() =>
                setPage((p) =>
                  p * pageSize < allCharacters.length ? p + 1 : p
                )
              }
              disabled={page * pageSize >= allCharacters.length}
            >
              Siguiente
            </button>
           </div>
          </div>
        </div>
    </section>
  );
};

export default CharacterList;
