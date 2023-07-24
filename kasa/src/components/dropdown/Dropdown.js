import './dropdown.css';
import arrow from '../../assets/arrow.svg'


export default function Dropdown({ title, contenu }){
    return(
        <div className='dropdown'>
            <div className='dropdown__header'>
                <p className='dropdown__title'>{title}</p>
                <img className='dropdown__arrow' src={arrow} alt='Flèche dropdown'></img>
            </div>
            <div className='dropdown__contenu'>
                {Array.isArray(contenu) ? (
                    <ul>
                        {contenu.map((item, index) => (
                            <li key={index} className='dropdown__li'>{item}</li>
                        ))}
                    </ul>
                ):
                    (<p className='dropdown__txt'>{contenu}</p>)
                }
            </div>
        </div>
    )
}