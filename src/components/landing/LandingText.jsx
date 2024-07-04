import { NavLink } from "react-router-dom"
import "../../sass/landing.scss"

const LandingText = () => {
    return (
        <div className="containerText">
            <div >
                <h1 className="textTitle">AIRTRIP:</h1>
                <h2 className="textSubtitle">Planifica Tus Vacaciones con Aire Puro</h2>
                <p className="welcomeText text-gray">¡Bienvenido a AirTrip! Sabemos lo importante que es para ti y tu familia viajar a lugares que no solo ofrezcan experiencias inolvidables, sino también un ambiente saludable. Con AirTrip, puedes planificar tus vacaciones asegurándote de que la calidad del aire en tu destino sea óptima para disfrutar al máximo. Nuestro servicio te proporciona información en tiempo real sobre vuelos, hoteles y la calidad del aire en cualquier parte del mundo, para que puedas tomar decisiones informadas y disfrutar de unas vacaciones sin preocupaciones.</p>
                <NavLink to="/dashboard" className="btnCta"> ¡PLANIFICA AHORA!
                </NavLink>
            </div>

        </div>
    )
}

export default LandingText