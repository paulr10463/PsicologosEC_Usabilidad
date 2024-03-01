import Rating from '../Rating/Rating'
import MapModal from '../MapModal/MapModal'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocationDot, faPhone, faEnvelope, faLocationDot, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next';

export default function PsychologistSearchElement() {
    const { t } = useTranslation();
    
    return (
        <div className='w-full px-3'>
        <div className='flex-col md:flex-row m-4 border-borderColor border-2 rounded-xl flex max-w-[1800px] mx-auto'>
            <div className='flex flex-col md:w-[30%] items-center justify-center'>
                <img tabIndex={0}
                    className="rounded-full h-auto w-[100%] object-cover max-w-[5rem]"
                    src="https://www.psicologos.com.ec/imagenes-ok/2018-09-14_16-24-33_ana-lucia.jpg" alt="Foto de psicólogo" />
                <Rating/>
                <div>
                    <div tabIndex={0} aria-label='Teléfono' className='flex items-center mb-2'>
                        <FontAwesomeIcon className="border-2 border-primary-2 p-1 rounded-full" icon={faPhone} size="2xs" />
                        <a className="text-[0.6rem] underline ml-2" href="">0983472881</a>
                    </div>
                    <div tabIndex={0} aria-label='Dirección' className='flex items-center mb-2'>
                        <FontAwesomeIcon className="border-2 border-primary-2 p-1 rounded-full" icon={faMapLocationDot} size="2xs" />
                        <MapModal/>
                    </div>
                    <div tabIndex={0} aria-label='Correo' className='flex items-center mb-2'>
                        <FontAwesomeIcon className="border-2 border-primary-2 p-1 rounded-full" icon={faEnvelope} size="2xs" />
                        <a className="text-[0.6rem] underline ml-2" href="">gustavo.valarezo@hotmail.com</a>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:w-[70%] bg-primary-5 md:rounded-tr-xl rounded-br-xl rounded-bl-xl md:rounded-bl-none py-3 px-5'>
                <div className='flex items-center justify-between mb-2'>
                    <h1 tabIndex={0} className='text-[2rem] font-medium text-white'>Gustavo Valarezo</h1>
                    <h2 tabIndex={0} className='text-[1.5rem] font-medium text-primary-2 mr-2 bg-white rounded-full py-[0.2rem] px-4'>$<span>30</span>.00</h2>
                </div>
                <div className='bg-white w-full rounded-2xl'>
                    <div className='flex flex-col lg:flex-row p-3'>
                        <div tabIndex={0} className='text-[0.7rem] lg:w-[70%]  px-4 py-4 rounded-2xl shadow-md leading-3'>
                            Atención online (Whatsapp, skype, zoom o cualquier otra) de niños, jóvenes, adultos. Parejas y Familias Problemas de Adicción a internet, Cáncer, Conductas Adictivas, Disfonías, Educación Hijos, Estrés...
                        </div>
                        <div className='flex w-full lg:w-[30%] mt-2 lg:mt-0 flex-row space-x-4 lg:flex-col lg:space-x-0 px-3 justify-evenly'>
                            <button className='w-full min-w-[7rem] bg-primary-5 py-1 rounded-full text-[0.7rem] text-white'>
                                <FontAwesomeIcon className='mr-3' icon={faLocationDot} />
                                Cumbayá
                            </button>
                            <Link to="/details">
                                <button className='w-full min-w-[7rem] bg-secondary-1 py-1 rounded-full text-[0.7rem] text-white' >
                                    Más información
                                    <FontAwesomeIcon className='ml-2' icon={faChevronRight} />
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-2 md:flex-row w-fit md:space-x-4 lg:space-y-0 px-5 mb-2 lg:items-center'>
                        <p tabIndex={0} className='text-[0.6rem] mr-2'>Especialidades:</p>
                        <p tabIndex={0} className='text-[0.7rem] bg-grey-1 text-white rounded-xl px-3 py-1'>Psicoanálisis</p>
                        <p tabIndex={0} className='text-[0.7rem] bg-grey-1 text-white rounded-xl px-3 py-1'>Psicoanálisis lacaniano</p>
                        <p tabIndex={0} className='text-[0.7rem] bg-grey-1 text-white rounded-xl px-3 py-1'>Psicoterapia psicoanalítica</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}