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

    const style = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${img})`
    }
    return (
        
        <div className="banner__container" style={style}>
            {/* <img src={img} className="img__banner" alt="Bannière de la page d'accueil"></img> */}
            {textElement}
        </div>
    )
}