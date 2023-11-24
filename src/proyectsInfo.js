import BookhubComp from "./assets/bookhub-comp.png"
import BookhubPhone from "./assets/bookhub-phone.png"

import MeteoComp from "./assets/meteopc.png"
import MeteoPhone from "./assets/meteophone.png"

import Webcam from "./assets/webcam.png"

const data = [
    {
        nombre: "BookHub",
        descripcionEs: "Página web desarrollada con React que implementa la API de Google Books y un sistema de compra. Utilización de hooks y librerías de React como router, context etc.",
        tecnologias: "React, JSX, React router, Tailwind CSS",
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
]

export default data;