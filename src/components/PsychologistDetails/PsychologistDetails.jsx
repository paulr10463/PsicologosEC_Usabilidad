import Rating from '../Rating/Rating'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocationDot, faPhone, faEnvelope, faPlayCircle, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import {  faWhatsapp ,faXTwitter, faFacebookF, faInstagram, faTiktok, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function PshychologistDetails() {
    return (
        <div className='w-full px-3'>
        <div className='flex-col md:flex-row m-4 border-borderColor border-2 rounded-xl flex max-w-[1800px] mx-auto'>
            <div className='flex flex-col md:w-[30%] items-center justify-center pb-5'>
                <img
                    className="rounded-full h-auto w-[100%] object-cover max-w-[5rem] mt-3"
                    src="https://www.psicologos.com.ec/imagenes-ok/2018-09-14_16-24-33_ana-lucia.jpg" alt="Foto de psicólogo" />
                <Rating />
                <div>
                    <div className='flex items-center mb-2'>
                        <FontAwesomeIcon className="border-2 border-primary-2 p-1 rounded-full" icon={faPlayCircle} size="2xs" />
                        <a className="text-[0.6rem] underline ml-2" href="">Acerca de mí</a>
                    </div>
                    <div className='flex items-center mb-2'>
                        <FontAwesomeIcon className="border-2 border-primary-2 p-1 rounded-full" icon={faPhone} size="2xs" />
                        <a className="text-[0.6rem] underline ml-2" href="">0983472881</a>
                    </div>
                    <div className='flex items-center mb-2'>
                        <FontAwesomeIcon className="border-2 border-primary-2 p-1 rounded-full" icon={faMapLocationDot} size="2xs" />
                        <a className="text-[0.6rem] underline ml-2" href="">Av. Colón y Tamayo</a>
                    </div>
                    <div className='flex items-center mb-2'>
                        <FontAwesomeIcon className="border-2 border-primary-2 p-1 rounded-full" icon={faEnvelope} size="2xs" />
                        <a className="text-[0.6rem] underline ml-2" href="">gustavo.valarezo@hotmail.com</a>
                    </div>
                </div>
                <div className='flex items-center justify-between mb-2'>
                    <h1 className='text-sm font-bold text-black'>Costo</h1>
                    <div className='text-lg text-center font-medium ml-5 w-full min-w-[7rem] py-2 px-4 bg-primary-5 rounded-full text-white'>
                        $30.00
                    </div>
                </div>
                <div className='flex items-center justify-between mb-2'>
                    <h1 className='text-sm font-bold text-black'>Compartir con un amigo:</h1>
                </div>
                <div className='text-[0.7rem] bg-terciary-2 text-white rounded-xl px-3 py-1'>
                    <div className='flex justify-between'>
                        <button className='flex items-center justify-center py-1 rounded-full text-black'>
                            <FontAwesomeIcon className='p-2 rounded-full' icon={faWhatsapp} size="2x" />
                        </button>
                        <button className='flex items-center justify-center py-1 rounded-full text-black'>
                            <FontAwesomeIcon className='p-2 rounded-full' icon={faFacebookF} size="2x" />
                        </button>
                        <button className='flex items-center justify-center py-1 rounded-full text-black'>
                            <FontAwesomeIcon className='p-2 rounded-full' icon={faInstagram} size="2x" />
                        </button>
                        <button className='flex items-center justify-center py-1 rounded-full text-black'>
                            <FontAwesomeIcon className='p-2 rounded-full' icon={faTelegram} size="2x" />
                        </button>
                        <button className='flex items-center justify-center py-1 rounded-full text-black'>
                            <FontAwesomeIcon className='p-2 rounded-full' icon={faTiktok} size="2x" />
                        </button>
                        <button className='flex items-center justify-center py-1 rounded-full text-black'>
                            <FontAwesomeIcon className='p-2 rounded-full' icon={faTwitter} size="2x" />
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:w-[70%] bg-white md:rounded-tr-xl rounded-br-xl rounded-bl-xl md:rounded-bl-none py-3 px-5'>
                <div className='flex justify-between mb-2'>
                    <div className='flex flex-col text-normal text-center w-3/5 md:w-[60%] bg-primary-3.5 rounded-full px-5'>
                        <h1 className='text-lg font-medium text-white'>Gustavo Valarezo</h1>
                    </div>
                    <div className='flex flex-col text-normal text-center w-1/3 md:w-[35%] bg-primary-3.5 rounded-full px-5'>
                        <h1 className='text-lg font-medium text-white'>Quito, Cumbaya</h1>
                    </div>
                </div>
                <div className='bg-primary-5 w-full rounded-2xl'>
                    <div className='flex flex-col lg:flex-row p-3'>
                    <div className='flex w-full lg:w-[10%] mt-2 lg:mt-0 flex-row space-x-4 lg:flex-col lg:space-x-0 px-3 justify-evenly'>
                        <div className='flex items-center justify-center bg-primary-5 py-1 rounded-full text-black'>
                            <FontAwesomeIcon className='p-1 rounded-full' icon={faGraduationCap} />
                        </div>
                    </div>
                        <div className='text-[0.7rem] lg:w-[90%] bg-primary-3.5 px-4 py-4 rounded-2xl shadow-md leading-3'>
                            <div>
                            <h1 className='text-xm font-medium text-white mb-2'>Formación</h1>
                            </div>
                            <div className='text-[0.7rem] lg:w-[100%] bg-primary-4 px-4 py-4 rounded-2xl shadow-md leading-3'>
                                Atención online (Whatsapp, skype, zoom o cualquier otra) de niños, jóvenes, adultos. Parejas y Familias Problemas de Adicción a internet, Cáncer, Conductas Adictivas, Disfonías, Educación Hijos, Estrés...
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-2 md:flex-row w-fit md:space-x-4 lg:space-y-0 px-5 mb-2 lg:items-center'>
                        <p className='text-[0.6rem] mr-2'>Especialidades:</p>
                        <p className='text-[0.7rem] bg-grey-1 text-white rounded-xl px-3 py-1'>Psicoanálisis</p>
                        <p className='text-[0.7rem] bg-grey-1 text-white rounded-xl px-3 py-1'>Psicoanálisis lacaniano</p>
                        <p className='text-[0.7rem] bg-grey-1 text-white rounded-xl px-3 py-1'>Psicoterapia psicoanalítica</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}