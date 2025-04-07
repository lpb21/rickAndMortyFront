# Rick & Morty Character Explorer 🛸

Aplicación web creada con **React** que permite explorar personajes de la serie **Rick and Morty**. Utiliza **GraphQL** para consultar los datos de forma eficiente, incluye filtrado por nombre y atributos, paginación y vista detallada de cada personaje.

---

## 🚀 Tecnologías utilizadas

- **React 18+** con enfoque modular y hooks como `useState`, `useEffect`.
- **GraphQL** para consultas eficientes a la API.
- **CSS Modules** para estilos encapsulados y reutilizables.
- **Vite** como herramienta de desarrollo rápida y ligera.
- **ESLint** para mantener un código limpio y consistente.

---

## 📸 Funcionalidades

- 🔍 **Búsqueda en tiempo real** por nombre.
- 🎚️ **Filtros avanzados** por especie, estado y género.
- 📑 **Paginación** para navegar entre los personajes.
- 📄 **Vista de detalles** del personaje seleccionado.
- 🌟 Interfaz intuitiva y diseño adaptable.

---

## 📁 Estructura del proyecto

```
├── componentBuilder/
│   ├── CharacterDetails.jsx        # Muestra los detalles de un personaje seleccionado.
│   ├── CharacterList.jsx           # Lista de personajes con búsqueda y paginación.
│   ├── CharacterListItem.jsx       # Tarjeta individual de cada personaje.
│   ├── CharacterProfile.jsx        # Perfil detallado de un personaje.
│   ├── FilterPanel.jsx             # Panel lateral para aplicar filtros.
│   ├── FilterPanel.module.css      # Estilos encapsulados para el panel de filtros.
│   ├── InputDesign.jsx             # Layout principal de la aplicación.
│   ├── InputDesign.module.css      # Estilos generales de la aplicación.
│   └── SearchBar.jsx               # Barra de búsqueda con botón para abrir filtros.
│
├── lib/
│   └── graphql.js                  # Lógica para realizar consultas a la API GraphQL.
│
├── public/
│   └── vite.svg                    # Ícono utilizado en la aplicación.
│
├── src/
│   ├── App.jsx                     # Componente inicial (no utilizado actualmente).
│   ├── main.jsx                    # Punto de entrada de la aplicación.
│   ├── App.css                     # Estilos globales para la aplicación.
│   └── index.css                   # Estilos base para el proyecto.
│
└── README.md                       # Documentación del proyecto.
```

---

## 🧠 Lógica general

1. **Carga inicial**: Al iniciar la aplicación, se cargan los personajes desde la API GraphQL sin filtros.
2. **Búsqueda**: La barra de búsqueda permite filtrar personajes por nombre en tiempo real.
3. **Filtros**: El panel de filtros permite seleccionar atributos como especie, estado y género. Al aplicar los filtros, se actualiza la lista de personajes.
4. **Paginación**: Los personajes se muestran en páginas de 5 elementos, con controles para navegar entre ellas.
5. **Detalles del personaje**: Al seleccionar un personaje, se muestra su información detallada en el panel derecho.

---

## 🖥️ Componentes principales

### `InputDesign.jsx`
Componente principal que organiza el layout de la aplicación. Renderiza la lista de personajes y el área de detalles.

### `CharacterList.jsx`
Muestra una lista de personajes con búsqueda, filtros y paginación.

### `CharacterDetails.jsx`
Muestra información detallada del personaje seleccionado, incluyendo atributos como especie y estado.

### `FilterPanel.jsx`
Panel lateral que permite aplicar filtros avanzados por especie, estado y género.

### `SearchBar.jsx`
Barra de búsqueda con un botón para abrir el panel de filtros.

---

## 🔧 Instalación y uso

1. Clona este repositorio:

   ```bash
   git clone https://github.com/lpb21/rickAndMortyFront.git
   cd rickBuildesFigma
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre la aplicación en tu navegador en [http://localhost:5173](http://localhost:5173).

---

## 🌐 API GraphQL

La aplicación utiliza una API GraphQL para obtener los datos de los personajes. La consulta principal se encuentra en [`lib/graphql.js`](lib/graphql.js) y permite filtrar por especie, estado y género.

---

## 🛠️ Scripts disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Genera una versión optimizada para producción.
- `npm run preview`: Previsualiza la aplicación en modo producción.
- `npm run lint`: Ejecuta ESLint para analizar el código.

---

## 📜 Licencia

Este proyecto está bajo la licencia MIT. Siéntete libre de usarlo y modificarlo según tus necesidades.

---

## 📬 Contacto

Si tienes preguntas o sugerencias, no dudes en abrir un issue o contactarme en [leonardoparrasof@gmail.com](mailto:leonardoparrasoft@gmail.com).