import journalAppImage from "@assets/journalApp.webp";
import typescriptImage from "@assets/typescript.svg";
import javascriptImage from "@assets/javascript.svg";
import petspointImage from "@assets/petspoint.webp";
import heroesAppImage from "@assets/heroesApp.webp";
import tailwindImage from "@assets/tailwindcss.svg";
import moviesAppImage from "@assets/moviesApp.jpg";
import sequelizeImage from "@assets/sequelize.svg";
import postgresImage from "@assets/postgresql.svg";
import dimelcoImage from "@assets/Dimelco.webp";
import githubImage from "@assets/github.svg";
import svelteImage from "@assets/svelte.svg";
import reactImage from "@assets/react.svg";
import viteImage from "@assets/vitejs.svg";
import astroImage from "@assets/astro.svg";
import nodeImage from "@assets/nodejs.svg";
import azureImage from "@assets/azure.svg";
import hopeImage from "@assets/hope.webp";
import controllerSeoImage from "@assets/controllerseo.webp";
import defaultImage from "@assets/default-User.jpg";
import laravelImage from "@assets/laravel.svg";
import vueImage from "@assets/vue.svg";
import vuetifyImage from "@assets/Vuetify.svg";
import dotnetImage from "@assets/dotnet.svg";
import sqlServerImage from "@assets/sqlserver.svg";
import nestjsImage from "@assets/nest.svg";
import mongodbImage from "@assets/mongodb.svg";

export const projectExperienceList = [
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
  },
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
  },
  {
    name: "ControllerSEO",
    profileImage: controllerSeoImage,
    description: `
      Colaboré en la migración de un proyecto de Laravel con Blade a Vue.js con vuetify, con el objetivo de mejorar el rendimiento y la escalabilidad del proyecto.
    `,
    webPage: {
      url: "https://controllerseo.com/",
      name: "controllerseo",
    },
    repository: {
      url: "",
      icon: githubImage,
    },
    technologies: [laravelImage, vueImage, vuetifyImage],
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
  },
  {
    name: "Control de personal",
    profileImage: defaultImage,
    description: `
      Backend para un sistema de control de personal, con manejo de usuarios, 
      calculo de pagos por hora trabajada, manejo de roles y permisos.
      El codigo del proyecto no esta habilitado para publico por politicas del cliente.
    `,
    webPage: {
      url: "",
      name: "Control de personal",
    },
    repository: {
      url: "",
      icon: githubImage,
    },
    technologies: [dotnetImage],
  },
  {
    name: "POS System",
    profileImage: defaultImage,
    description: `
      Backend para un sistema de punto de venta, con manejo de usuarios, 
      productos, ventas, inventario por lotes, eventos y notificaciones.
      El codigo del proyecto no esta habilitado para publico por politicas del cliente.
    `,
    webPage: {
      url: "",
      name: "POS System",
    },
    repository: {
      url: "",
      icon: githubImage,
    },
    technologies: [nodeImage, javascriptImage, postgresImage, azureImage],
  },
];

export const personalProjectsList = [
  {
    name: "MoviesApp",
    profileImage: moviesAppImage,
    description:
      "MoviesApp es una aplicación móvil desarrollada con React Native que permite a los usuarios explorar películas utilizando la API de TMDB.",
    webPage: {
      url: "",
      name: "MoviesApp",
    },
    repository: {
      url: "https://github.com/ShewinVega/TMDBMovie-ReactNative/tree/develop",
      icon: githubImage,
    },
    technologies: [typescriptImage, reactImage, tailwindImage],
  },
  {
    name: "GymApp Landing Page",
    profileImage: journalAppImage,
    description:
      "Pagina web responsiva, hecha con svelte y tailwind",
    webPage: {
      url: "https://gymapplan.netlify.app/",
      name: "GymApp Landing Page",
    },
    repository: {
      url: "https://github.com/ShewinVega/GymApp-LandingPage",
      icon: githubImage,
    },
    technologies: [svelteImage, tailwindImage],
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
  },
  {
    name: "HeroesWeb",
    profileImage: heroesAppImage,
    description:
      "Desarrollo de un buscador y lista de Heroes, su principal objetivo es mostrar el manejo de context en React de manera simple para los nuevos devs.",
    webPage: {
      url: "",
      name: "HeroesWeb",
    },
    repository: {
      url: "https://github.com/ShewinVega/HeroesApp",
      icon: githubImage,
    },
    technologies: [javascriptImage, reactImage, viteImage],
  },
  {
    name: "PosNet",
    profileImage: defaultImage,
    description: `
      API rest utlizando .Net 9 y arquitectura hexagonal. El objetivo de este proyecto es mostrar el manejo de 
      repositorios, inyeccion de dependencias, manejo de errores, JWT, etc ... Asi como los diferentes
      patrones de diseño en los cuales he estado trabajando.
    `,
    webPage: {
      url: "",
      name: "PosNet",
    },
    repository: {
      url: "https://github.com/ShewinVega/PosNet",
      icon: githubImage,
    },
    technologies: [dotnetImage, sqlServerImage],
  },
  {
    name: "Pokedex",
    profileImage: defaultImage,
    description: `
      API rest utlizando NestJS en donde veo los aspectos basicos de NestJS, manejo de errores,
      inyeccion de dependencias, decoradores, etc ...
    `,
    webPage: {
      url: "",
      name: "Pokedex",
    },
    repository: {
      url: "https://github.com/ShewinVega/Nest-Pokedex",
      icon: githubImage,
    },
    technologies: [nestjsImage, mongodbImage],
  },
  {
    name: "Portfolio",
    profileImage: defaultImage,
    description:
      "Portfolio personal, hecha con astro, react, typescript y tailwind",
    webPage: {
      url: "https://portfolio-shewin.netlify.app/",
      name: "Portfolio",
    },
    repository: {
      url: "https://github.com/ShewinVega/portfolio/tree/develop",
      icon: githubImage,
    },
    technologies: [astroImage, reactImage, typescriptImage, tailwindImage],
  },
];