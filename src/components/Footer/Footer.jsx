import { faMapLocationDot, faPhone, faEnvelope, faCopyright } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from 'react-i18next';

import './Footer.css'
export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="footer flex flex-col py-4 px-8 bg-terciary-1">
            <div className='flex flex-col md:flex-row'>
                <div className='flex-1  space-y-3 p-3'>
                    <h2 tabIndex={0}>Psicólogos Ecuador</h2>
                    <div tabIndex={0} aria-label='Teléfono' className='flex items-center mb-2'>
                        <FontAwesomeIcon className="text-primary-2 p-1 rounded-full" icon={faPhone} size="sm" />
                        <a className="ml-2" href="">+02-2912786</a>
                    </div>
                    <div tabIndex={0} aria-label='Dirección' className='flex items-center mb-2'>
                        <FontAwesomeIcon className="text-primary-2 p-1 rounded-full" icon={faMapLocationDot} size="sm" />
                        <a className="ml-2" href="">PFC5+MJ4, Amazonas y Rio Coca, Quito 170804</a>
                    </div>
                    <div tabIndex={0} aria-label='Correo' className='flex items-center mb-2'>
                        <FontAwesomeIcon className="text-primary-2 p-1 rounded-full" icon={faEnvelope} size="sm" />
                        <a className="ml-2" href="">psico.ecuador@hotmail.com</a>
                    </div>
                </div>
                <div className='flex-1 flex flex-col space-y-3  p-3'>
                    <h2 tabIndex={0}>Compañía</h2>
                    <a className="block" href='#'>Servicios</a>
                    <a className="block" href='#'>Nuestro equipo</a>
                </div>
            </div>
            <div className="flex px-3 flex-col space-y-3 md:flex-row md:space-y-0 justify-between py-3">
                <div className='md:flex-[1.6]'>
                    <p tabIndex={0} className=' mr-2 inline '>Siguenos en:</p>
                    <a aria-label="Facebook" href="#">
                        <FontAwesomeIcon className="p-1 rounded-full hover:text-primary-1 transition-all delay-75" icon={faFacebookF} size="xl"/>
                    </a>
                    <a aria-label="TwitterX" href="#">
                        <FontAwesomeIcon className="p-1 rounded-full hover:text-primary-1 transition-all delay-75" icon={faXTwitter} size="xl"/>
                    </a>
                    <a aria-label="Instagram" href="#">
                        <FontAwesomeIcon className="p-1 rounded-full hover:text-primary-1 transition-all delay-75" icon={faInstagram} size="xl"/>
                    </a>
                </div>
                <div tabIndex={0} className='md:flex-[1.6]'>
                    <FontAwesomeIcon className="mr-1" icon={faCopyright} size='xl'/>
                    Copyright Psicólogos Ecuador 2024
                </div>
            </div>

        </footer>
    )
}