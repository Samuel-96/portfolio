import BookhubComp from "./assets/bookhub-comp.png"
import BookhubPhone from "./assets/bookhub-phone.png"

import MeteoComp from "./assets/meteopc.png"
import MeteoPhone from "./assets/meteophone.png"

import Webcam from "./assets/webcam.png"

import TwitterComp from "./assets/screentwitter.png"
import TwitterPhone from "./assets/screentwitter-phone.png"

import GameCore1 from "./assets/gamecore1.png"
import GameCore2 from "./assets/gamecore2.png"

const data = [
    {
        nombre: "BookHub",
        descripcionEs: "Página web desarrollada con React que implementa la API de Google Books y un sistema de compra. Utilización de hooks y librerías de React como router, context etc.",
        tecnologias: "React, JSX, React router, Tailwind CSS.",
        imgComp: BookhubComp.src,
        imgPhone: BookhubPhone.src,
        liveDemoUrl: "https://bookstore-top.netlify.app/",
        repoUrl: "https://github.com/Samuel-96/bookstore"
    },

    {
        nombre: "MeteoLocal",
        descripcionEs: "MeteoLocal es una aplicación web diseñada para proporcionar información meteorológica precisa y personalizada al usuario, aprovechando su ubicación geográfica. La aplicación hace uso intensivo de la API de OpenWeather para los datos meteorológicos.",
        tecnologias: "OpenWeather API, HTML, CSS, JavaScript.",
        imgComp: MeteoComp.src, 
        imgPhone: MeteoPhone.src, 
        liveDemoUrl: "https://samuel-96.github.io/weather-app/", 
        repoUrl: "https://github.com/Samuel-96/weather-app"
    },

    {
        nombre: "WebCamp App",
        descripcionEs: "Esta aplicación permite capturar la webcam del ordenador para realizar fotografías de una manera sencilla e intuitiva. Fue desarrollada con C# en Visual Studio como parte de mi aprendizaje de dicho lenguaje.",
        tecnologias: "C#, WinForms.",
        imgComp: Webcam.src, 
        repoUrl: "https://github.com/Samuel-96/WebCam"
    },

    {
        nombre: "Twitter clone",
        descripcionEs: "Página web desarrollada para mejorar mis habilidades con Tailwind CSS y Astro.",
        tecnologias: "Astro, Tailwind CSS, JavaScript.",
        imgComp: TwitterComp.src, 
        imgPhone: TwitterPhone.src, 
        liveDemoUrl: "https://twitter-clone-samuel96.netlify.app/", 
        repoUrl: "https://github.com/Samuel-96/twitter-clone"
    },

    {
        nombre: "GameCore Android",
        descripcionEs: "Aplicación de gestión de videojuegos desarrollada en Android. La aplicación permite a los usuarios crear una cuenta y buscar videojuegos para añadir a su colección, dichos videojuegos podrán ser valorados, compartidos y etiquetados, también hay un calendario donde se podrán apunta lanzamientos de videojuegos y la aplicación notificará al usuario el día pertinente. GameCore utiliza la API más potente de videojuegos, IGDB, para obtener siempre los datos más actuales y fiables.",
        tecnologias: "Java, Android Studio, Gradle, Volley HTTP, Glide, SQLite.",
        imgComp: GameCore1.src, 
        imgPhone: GameCore2.src, 
        liveDemoUrl: "https://twitter-clone-samuel96.netlify.app/", 
        repoUrl: "https://www.youtube.com/watch?v=CwD2z7LL0Qw"
    },
]

export default data;