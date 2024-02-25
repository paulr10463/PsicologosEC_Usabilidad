
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

export default function DetailsBar() {
    return (
        <div className='bg-primary-5 px-2 h-8 flex py-1 items-center'>
            <div className=''>
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
                        >
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
            </div>
            <div className='flex items-center justify-center w-full text-white'>
                <div className='text-lg font-bold'>
                    <h1>Detalles</h1>
                </div>
            </div>
        </div>
    );
}