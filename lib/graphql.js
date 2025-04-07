// lib/graphql.js (puedes mover esto a una carpeta utils o lib)
export const fetchCharacters = async (page = 1, filters = {}) => {
    const query = `
      query GetCharacters($species: String, $status: String, $gender: String) {
        characters(species: $species, status: $status, gender: $gender) {
          id
          name
          status
          species
          type
          gender
          origin
          image
        }
      }
    `;
  
    const variables = {
      species: filters.species || null,
      status: filters.status || null,
      gender: filters.gender || null,
    };
  
    const response = await fetch("http://localhost:3000/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables }),
    });
  
    const json = await response.json();
    return json.data.characters;
  };
  