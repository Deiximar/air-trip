# React + Vite + Vitest

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

``````
npm install
```````

## PABLO ABAB:
Al principio colaborando con todos y organizando, era el scrum master por seleccion de mis compañeros, colabore en el jira. Colabore con deiximar para empezar el repositorio base. Hice los componentes City.jsx y Country.jsx con su funcionalidad de botones que se abría un desplegable con todos los paises y ciudades para que el usuario pudiera seleccionar el que quisiera visualizar los datos de la calidad del oxigeno. Los datos de las ciudades y países los cree en dos archivos llamados cities.json y countries.json de los cuales usaba con dichos componentes para el desplegable y selección de los usuarios. Hice la instalación y configuración de vitest en react, también 3 test de los componentes City.jsx, Country.jsx y Map.jsx, en este último tuve que simular los módulos de react-leaflet, para probar la lógica del componente sin necesidad de renderizar un mapa real. Los nombres de dichos test son: City.test.jsx, Country.test.jsx y Map.test.jsx. Todo nuevo para mi porque nunca había trabajado con react y fue un gran desafío para mi hacer todo esto en tan poco tiempo que tuvimos. Tuve muchos conflictos a la hora de trabajar con vitest y hacerle funcionar correctamente, que tuve que solucionarlos modificando el .eslintrc.cjs, vitest.config.js, package.json.