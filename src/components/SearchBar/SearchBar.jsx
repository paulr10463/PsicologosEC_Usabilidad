import './SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter , faSearch } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar() {
    return (
        <div className='SearchBar'>
            <button>Filtrar <FontAwesomeIcon icon={faFilter} /></button>
            <div className='SearchBar__Container'>
                <input className='SearchBar__Container__Input' type="text" placeholder='Buscar psicólogos en Ecuador...' />
                <FontAwesomeIcon icon={faSearch} />
            </div>
        </div>
    );
}
