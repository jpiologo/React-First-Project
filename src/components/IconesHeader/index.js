import './estilo.css'
import perfil from '../../images/perfil.svg'
import sacola from '../../images/sacola.svg'

const icones = [perfil, sacola]

function IconesHeader() {
    return (
        <ul className='icones'>
          {icones.map( (icone) => (
            <li className='icone'><img src={icone} alt='Icones de Perfil e Sacola'></img></li>
          ) ) }
        </ul>
    )
}

export default IconesHeader;