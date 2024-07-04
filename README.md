# AirTrip 🌫️

## Índice

- [**Descripción**](#descripción)
- [**Objetivos del proyecto**](#características-del-proyecto)
- [**Instalación**](#instalación)
  - [Requisitos previos](#requisitos-previos)
  - [Pasos para instalar el proyecto](#pasos-para-instalar-el-proyecto)
- [**Uso**](#uso)
  - [Cómo ejecutar el proyecto](#cómo-ejecutar-el-proyecto)
  - [Ejemplos de uso](#ejemplos-de-uso)
- [**Estructura del Proyecto**](#estructura-del-proyecto)
- [**Funcionalidades**](#funcionalidades)
- [**Tecnologías Utilizadas**](#tecnologías-utilizadas)
- [**Contribución**](#contribución)
- [**Developers**](#developers)
- [**Capturas de Pantalla**](#capturas-de-pantalla)
- [**Licencia**](#licencia)

## Descripción

AirTrip es una aplicación web diseñada para ayudar a los usuarios a planificar sus viajes teniendo en cuenta la calidad del aire en sus destinos. Utiliza datos en tiempo real para proporcionar calidad del aire, asegurando que los usuarios puedan tomar decisiones informadas para su salud y bienestar.

## Características del Proyecto

- **Dashboard Interactivo:** Visualización de datos sobre vuelos, hoteles y calidad del aire en un solo lugar.
- **Información sobre la Calidad del Aire:** Datos en tiempo real sobre la calidad del aire en diferentes ubicaciones.
- **Alertas Personalizadas:** Envío de alertas cuando la calidad del aire en el destino elegido no es adecuada.
- **Perfil de Usuario:** Los usuarios pueden crear y gestionar su perfil con sus preferencias de viaje y recibir recomendaciones personalizadas.

## Metodologías y planificación

- Agile
- Jira
 

## Instalación

### Requisitos previos

- Node.js: [Descargar Node.js](https://nodejs.org/)
- npm: Viene con la instalación de Node.js

### Pasos para instalar el proyecto

**Front-End**

1. Clona el repositorio:
    ```bash
    git clone https://github.com/Deiximar/air-trip.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd tu-repositorio
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```
**Back-End**

1. Clona el repositorio:
    ```bash
    git clone https://github.com/Deiximar/air-trip.git
    ```
2. Importa el proyecto en tu IDE de Java favorito (por ejemplo, IntelliJ IDEA o Eclipse).

3. Configura la conexión a tu base de datos en el archivo de configuración correspondiente.

4. Ejecuta la aplicación.


## Uso

### Cómo ejecutar el proyecto

1. Ejecuta el servidor de desarrollo:
    ```bash
    npm run dev
    ```
2. Abre el local host en tu navegador para ver la aplicación.

### Ejemplos de uso

- Navega de la homepage al dashboard
- Añade tus ciudades favoritas a tu panel de usuario.
- Accede a tu cuenta

## Estructura del Proyecto

```plaintext
/front-end
├── src/
│   ├── components/
│   ├── config/
│   ├── customHooks/
│   ├── data/
│   ├── layout/
│   ├── pages/
│   ├── router/
│   ├── services/
│   ├── styles/
│   ├── App.js
│   ├── index.js
├── README.md
└──  package.json


```
- **public/:**  Contiene archivos estáticos accesibles al público.
    - **images/:** Contiene imágenes utilizadas en la aplicación.
- **src/:** Contiene fonts utilizadas en la aplicación.
    - **assets/:** Contiene recursos estáticos como imágenes.
    - **components/:** Componentes reutilizables organizados por categorías (footer, general, home, sidebar, tracker).
    - **config/:** Archivos de configuración.
    - **customHooks/:** Hooks personalizados.
    - **data/:** Datos estáticos utilizados en la aplicación.
    - **layout/:** Componentes de layout.
    - **pages/:** Páginas de la aplicación organizadas por secciones.
    - **router/:** Configuración de rutas.
    - **services/:** Servicios y llamadas a la API.
    - **styles/:** Archivos de estilos.
    - **App.js:** Componente principal de la aplicación.
- **index.html:** Archivo HTML principal.
- **README.md:** Archivo de documentación del proyecto.
- **package.json:** Archivo de configuración del proyecto y dependencias.



## Funcionalidades

- Datos en tiempo real sobre la calidad del aire en diferentes ubicaciones.
- Envío de alertas cuando la calidad del aire en el destino elegido no es adecuada.
- Los usuarios pueden crear y gestionar su perfil con sus preferencias de viaje y recibir recomendaciones personalizadas.
- Diseño responsive

## Tecnologías Utilizadas

- [HTML5](https://developer.mozilla.org/es/docs/Web/Guide/HTML/HTML5)
- [CSS3](https://developer.mozilla.org/es/docs/Web/CSS/CSS3)
- [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [React.js](https://reactjs.org/)
- [React simple maps](https://www.react-simple-maps.io/)
- [React Router](https://reactrouter.com/en/main/start/overview)
- [Vite](https://vitejs.dev/)
- [Themify Icons](https://themify.me/themify-icons)
- [Vitest](https://vitest.dev/guide/)


## Contribución

Nos encanta recibir contribuciones de la comunidad. Si deseas contribuir, por favor sigue estas pautas:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu característica
```bash
git checkout -b feature/nueva-caracteristica
```
3. Haz commit de tus cambios
```bash
git commit -m 'Añadir nueva característica'
```
4. Haz push a la rama
```bash
git push origin feature/nueva-caracteristica
```
5. Abre un Pull Request.

Por favor, asegúrate de seguir el [Código de Conducta de GitHub](https://docs.github.com/en/github/building-a-strong-community/code-of-conduct).

## Developers 


## Capturas de Pantalla 
![Screenshot 2024-07-05 004420](https://github.com/Deiximar/air-trip/assets/168748252/906bdf74-7c94-4588-a666-86848123b02b)
![Screenshot 2024-07-05 004451](https://github.com/Deiximar/air-trip/assets/168748252/8b4a1961-9e9b-46aa-a498-f50d768330ff)



## Licencia

Puedes copiar y pegar este contenido en tu archivo `README.md` y ajustarlo según sea necesario. ¡Buena suerte con tu proyecto!

