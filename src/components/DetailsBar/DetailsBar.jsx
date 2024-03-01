import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next';

export default function DetailsBar() {
    const { t } = useTranslation();
    
    return (
        <div className='bg-primary-5 px-2 h-8 flex py-1 items-center'>
            <div className=''>
                <Link to="/search" aria-label="Lista de psicólogos">
                    <button 
                        data-te-ripple-init
                        data-te-ripple-color="dark"
                        className='
                        bg-terciary-1 
                        text-xs 
                        px-2 
                        py-1 
                        rounded-xl 
                        mr-2 
                        flex 
                        items-center 
                        border-transparent 
                        transition 
                        all 
                        ease-in-out 
                        200ms 
                        justify-center 
                        hover:outline-[2px]
                        hover:outline-red-500 
                        hover:bg-primary-1 
                        hover:text-white
                        shadow-md '
                        aria-label="Regresar a lista">
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </button>
                </Link>
            </div>
            <div className='flex items-center justify-center w-full text-white'>
                <div className='text-lg font-bold'>
                    <h1 tabIndex="0">Detalles</h1>
                </div>
            </div>
        </div>
    );
}