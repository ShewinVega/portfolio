import dimelcoImage from "@assets/Dimelco.webp";
import petspointImage from "@assets/petspoint.webp";
import journalAppImage from "@assets/journalApp.webp";
import hopeImage from "@assets/hope.webp";
import heroesAppImage from "@assets/heroesApp.webp";

import githubImage from "@assets/github.svg";
import reactImage from "@assets/react.svg";
import typescriptImage from "@assets/typescript.svg";
import svelteImage from "@assets/svelte.svg";
import viteImage from "@assets/vitejs.svg";
import astroImage from "@assets/astro.svg";
import javascriptImage from "@assets/javascript.svg";
import nodeImage from "@assets/nodejs.svg";
import sequelizeImage from "@assets/sequelize.svg";
import postgresImage from "@assets/postgresql.svg";
import azureImage from "@assets/azure.svg";

export const projectList = [
  {
    name: "Dimelco",
    profileImage: dimelcoImage,
    description:
      "Pagina web responsiva con el diseño de Home, AboutUs, servicios, contacto y productos, estos ultimos tienen busqueda y filtrado deproductos por categoría",
    webPage: {
      url: "https://grupodimelco.com/",
      name: "grupodimelco",
    },
    repository: {
      url: "",
      icon: githubImage,
    },
    technologies: [astroImage, svelteImage, typescriptImage, viteImage],
    completed: true,
  },
  {
    name: "Petspoint",
    profileImage: petspointImage,
    description:
      "Pagina web responsiva con el diseño de Home, AboutUs, servicios, contacto y productos, estos ultimos tienen busqueda y filtrado deproductos por categoría",
    webPage: {
      url: "https://develop--petspoint.netlify.app/",
      name: "petspoint",
    },
    repository: {
      url: "",
      icon: githubImage,
    },
    technologies: [astroImage, reactImage, typescriptImage, viteImage],
    completed: false,
  },
  {
    name: "JournalApp",
    profileImage: journalAppImage,
    description:
      "Pagina web responsiva, en el cual puedes agregar notas, asi manejod e imagenes por notas y registro de usuarios y google login integrado",
    webPage: {
      url: "https://journalnoteshewin.netlify.app/",
      name: "Journal",
    },
    repository: {
      url: "https://github.com/ShewinVega/JournalApp",
      icon: githubImage,
    },
    technologies: [astroImage, reactImage, typescriptImage, viteImage],
    completed: true,
  },
  {
    name: "Hope",
    profileImage: hopeImage,
    description:
      "Desarrollo de API para el aprendizaje de niñ@s con TEA en Nicaragua usando el método PECS, ha sido creado junto a terapetas especializados en el tema",
    webPage: {
      url: "",
      name: "HopeApi",
    },
    repository: {
      url: "https://github.com/Hope-uni/hope.api/tree/develop",
      icon: githubImage,
    },
    technologies: [
      javascriptImage,
      nodeImage,
      sequelizeImage,
      postgresImage,
      azureImage,
    ],
    completed: true,
  },
  {
    name: "HeroesApp",
    profileImage: heroesAppImage,
    description:
      "Desarrollo de un buscador y lista de Heroes, su principal objetivo es mostrar el manejo de context en React de manera simple para los nuevos devs.",
    webPage: {
      url: "",
      name: "HeroesApp",
    },
    repository: {
      url: "https://github.com/ShewinVega/HeroesApp",
      icon: githubImage,
    },
    technologies: [javascriptImage, reactImage, viteImage],
    completed: true,
  },
];
