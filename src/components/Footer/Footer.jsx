import { faMapLocationDot, faPhone, faEnvelope, faCopyright } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

import './Footer.css'
export default function Footer() {
    return (
        <footer className="footer flex flex-col py-4 px-8 bg-terciary-1">
            <div className='flex flex-col md:flex-row'>
                <div className='flex-1  space-y-3 p-3'>
                    <h2>Psicólogos Ecuador</h2>
                    <div className='flex items-center mb-2'>
                        <FontAwesomeIcon className="text-primary-2 p-1 rounded-full" icon={faPhone} size="sm" />
                        <a className="ml-2" href="">+02-2912786</a>
                    </div>
                    <div className='flex items-center mb-2'>
                        <FontAwesomeIcon className="text-primary-2 p-1 rounded-full" icon={faMapLocationDot} size="sm" />
                        <a className="ml-2" href="">PFC5+MJ4, Amazonas y Rio Coca, Quito 170804</a>
                    </div>
                    <div className='flex items-center mb-2'>
                        <FontAwesomeIcon className="text-primary-2 p-1 rounded-full" icon={faEnvelope} size="sm" />
                        <a className="ml-2" href="">psico.ecuador@hotmail.com</a>
                    </div>
                </div>
                <div className='flex flex-col flex-[0.5] space-y-3  p-3 '>
                    <h2>Compañía</h2>
                    <a className="block" href='#'>Servicios</a>
                    <a className="block" href='#'>Nuestro equipo</a>
                </div>
                <div className='flex-1  flex flex-col space-y-3 p-3 '>
                    <h2>Suscríbete a la página</h2>
                    <form className="flex flex-col space-y-3" action="submit">
                        <label htmlFor="subscribeMail">Tu email</label>
                        <input id="subscribeMail" type="email" placeholder='Ingresa tu email' className='bg-white p-2' />
                        <button className='navbar__alternativeButton max-w-[6rem] py-5 flex justify-center items-center'>Enviar</button>
                    </form>

                </div>
            </div>
            <div className="flex px-3 flex-col space-y-3 md:flex-row md:space-y-0 justify-between py-3">
                <div className='md:flex-[1.6]'>
                    <p className=' mr-2 inline '>Siguenos en:</p>
                    <a href="#">
                        <FontAwesomeIcon className="p-1 rounded-full hover:text-primary-1 transition-all delay-75" icon={faFacebookF} size="xl" />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon className="p-1 rounded-full hover:text-primary-1 transition-all delay-75" icon={faXTwitter} size="xl" />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon className="p-1 rounded-full hover:text-primary-1 transition-all delay-75" icon={faInstagram} size="xl" />
                    </a>
                </div>
                <div className='md:flex-[1]'>
                    <FontAwesomeIcon className="mr-1" icon={faCopyright} size='xl'/>
                    Copyright Psicólogos Ecuador 2024
                </div>
            </div>

        </footer>
    )
}