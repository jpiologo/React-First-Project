import './estilo.css'

const textOptions = ['CATEGORIAS', 'ESTANTE', 'FAVORITOS'];

function OpcoesHeader() {
    return (
        <ul className='opcoes'>
            {textOptions.map( (texto) => (
            <li className='opcao'><p>{texto}</p></li>
          ) ) }
        </ul>
    )
}

export default OpcoesHeader;