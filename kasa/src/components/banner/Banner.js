import './banner.css'

export default function Banner({ img, text }) {
    let textElement = ''
    if (typeof text == 'string') {
        textElement = (
        <div className="banner__text__container">
            <h1 className="banner__text">{text}</h1>
        </div>
        )
    }
    return (
        <div className="banner__container">
            <img src={img} className="img__banner" alt="Bannière de la page d'accueil"></img>
            {textElement}
        </div>
    )
}