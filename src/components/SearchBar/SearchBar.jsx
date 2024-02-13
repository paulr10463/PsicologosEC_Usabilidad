
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar() {
    return (
        <div className='bg-primary-1 px-2 h-8 flex py-1 items-center justify-center'>
            <div className='flex w-full items-center justify-center'>
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
                            hover:text-white'
                            >
                        <p className='hidden lg:block'>Filtrar</p>
                        <FontAwesomeIcon className="ml-0 lg:ml-1" icon={faFilter} />
                    </button>
                </div>

                <div className="relative flex items-stretch max-w-[25rem] w-full">
                    <input
                        type="search"
                        className="
                    min-w-[10ch]
                    w-full
                    max-w-[66ch]
                    px-3
                    py-[0.15rem]
                    leading-[1.6]
                    border-r-2
                    border-r-[#cccbcb]
                    outline-none
                    text-xs 
                    rounded-tl-xl rounded-tr-0 rounded-bl-xl rounded-br-0
                    bg-terciary-1
                    dark:border-neutral-600
                    dark:text-neutral-200
                  dark:placeholder:text-neutral-200 
                    dark:focus:border-primary"
                        placeholder="Buscar psicólogos en Ecuador"

                        aria-describedby="button-addon1" />

                    <button
                        className="
                     
                    min-w-[0.1rem]  
                    z-[2] 
                    flex 
                    items-center  
                    justify-center
                    bg-terciary-1 
                    text-black 
                    rounded-tl-0 
                    rounded-tr-xl 
                    rounded-bl-0 
                    rounded-br-xl 
                    px-6 
                    text-xs                     
                    shadow-md 
                    transition 
                    duration-150 
                    ease-in-out
                     hover:bg-primary-1 
                     hover:text-white
                     hover:shadow-lg 
                     focus:bg-primary-700 
                     focus:shadow-lg 
                     focus:outline-none 
                     focus:ring-0 
                     active:bg-primary-800 
                     active:shadow-lg"
                        type="button"
                        id="button-addon1"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>
        </div>
    );
}
