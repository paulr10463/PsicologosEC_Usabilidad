import Rating from '../Rating/Rating'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocationDot, faPhone, faEnvelope, faPlayCircle, faGraduationCap, faChevronDown, faBriefcase, faUserNurse, faFileMedical, faLanguage} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp ,faXTwitter, faFacebookF, faInstagram, faTiktok, faTelegram } from '@fortawesome/free-brands-svg-icons'
import MapModal from '../MapModal/MapModal'
import VideoModal from '../VideoModal/VideoModal'
import { useTranslation } from 'react-i18next';

export default function PshychologistDetails() {
    const { t } = useTranslation();

    return (
        
        <div className='w-full px-3'>
        <div className='flex-col md:flex-row m-4 border-borderColor border-2 rounded-xl flex max-w-[1800px] mx-auto'>
            <div className='flex flex-col md:w-[30%] items-center justify-start pb-5'>
                <img tabIndex={0}
                    className="rounded-full h-auto w-[100%] object-cover max-w-[5rem] mt-3"
                    src="https://www.psicologos.com.ec/imagenes-ok/2018-09-14_16-24-33_ana-lucia.jpg" alt={t('Imagen de psicólogo')} />
                <Rating/>
                <div>
                    <div tabIndex={0} aria-label={t('Video presentación')} className='flex items-center mb-2'>
                        <FontAwesomeIcon className="border-2 border-primary-2 p-1 rounded-full" icon={faPlayCircle} size="2xs" />
                        <VideoModal/>
                    </div>
                    <div tabIndex={0} aria-label={t('Teléfono')} className='flex items-center mb-2'>
                        <FontAwesomeIcon className="border-2 border-primary-2 p-1 rounded-full" icon={faPhone} size="2xs" />
                        <a className="text-[0.6rem] underline ml-2" href="#">0983472881</a>
                    </div>
                    <div tabIndex={0} aria-label={t('Dirección')} className='flex items-center mb-2'>
                        <FontAwesomeIcon className="border-2 border-primary-2 p-1 rounded-full" icon={faMapLocationDot} size="2xs" />
                        <MapModal/>
                    </div>
                    <div tabIndex={0} aria-label={t('Correo')} className='flex items-center mb-2'>
                        <FontAwesomeIcon className="border-2 border-primary-2 p-1 rounded-full" icon={faEnvelope} size="2xs" />
                        <a className="text-[0.6rem] underline ml-2" href="#">gustavo.valarezo@hotmail.com</a>
                    </div>
                </div>
                <div className='flex items-center justify-between mb-2'>
                    <h1 tabIndex="0" className='text-sm font-bold text-black'>{t('Costo')}</h1>
                    <div className='text-lg text-center font-medium ml-5 w-full min-w-[7rem] py-2 px-4 bg-primary-5 rounded-full text-white' >
                        <h2 tabIndex="0" aria-label={t('Treinta dólares')} className='text-sm font-bold text-white'>$ 30.00</h2>
                    </div>
                </div>
                <div className='flex items-center justify-between mb-2'>
                    <h1 tabIndex="0" className='text-sm font-bold text-black'>{t('Compartir con un amigo:')}</h1>
                </div>
                <div className='text-[0.7rem] bg-terciary-2 text-white rounded-xl px-3 py-1'>
                    <div className='flex justify-between'>
                        <button className='flex items-center justify-center py-1 rounded-full text-black' aria-label="Whatsapp">
                            <FontAwesomeIcon className='p-2 rounded-full' icon={faWhatsapp} size="2x" />
                        </button>
                        <button className='flex items-center justify-center py-1 rounded-full text-black' aria-label="Facebook">
                            <FontAwesomeIcon className='p-2 rounded-full' icon={faFacebookF} size="2x" />
                        </button>
                        <button className='flex items-center justify-center py-1 rounded-full text-black' aria-label="Instagram">
                            <FontAwesomeIcon className='p-2 rounded-full' icon={faInstagram} size="2x" />
                        </button>
                        <button className='flex items-center justify-center py-1 rounded-full text-black' aria-label="Telegram">
                            <FontAwesomeIcon className='p-2 rounded-full' icon={faTelegram} size="2x" />
                        </button>
                        <button className='flex items-center justify-center py-1 rounded-full text-black' aria-label="Tiktok">
                            <FontAwesomeIcon className='p-2 rounded-full' icon={faTiktok} size="2x" />
                        </button>
                        <button className='flex items-center justify-center py-1 rounded-full text-black' aria-label="TwitterX">
                            <FontAwesomeIcon className='p-2 rounded-full' icon={faXTwitter} size="2x" />
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:w-[70%] bg-white md:rounded-tr-xl rounded-br-xl rounded-bl-xl md:rounded-bl-none py-3 px-5'>
                <div className='flex justify-between mb-2'>
                    <div className='justify-center flex flex-col text-normal text-center w-[60%] bg-primary-3.5 rounded-full px-5'>
                        <h1 tabIndex="0" className='text-lg font-medium text-white'>Gustavo Valarezo</h1>
                    </div>
                    <div className='justify-center flex flex-col text-normal text-center w-[38%] bg-primary-3.5 rounded-full px-5'>
                        <h1 tabIndex="0" className='text-lg font-medium text-white'>Quito, Cumbayá</h1>
                    </div>
                </div>
                <div className='bg-primary-5 w-full rounded-2xl'>
                    {// inside div component
                    }
                    <div className='flex flex-col lg:flex-row pt-6 pl-3 pr-3'>
                        <div className='flex w-full lg:w-[10%] mt-2 lg:mt-0 flex-row space-x-4 lg:flex-col lg:space-x-0 px-3 justify-evenly'>
                            <div className='flex items-center justify-center bg-primary-5 py-1 rounded-full text-black'>
                                <FontAwesomeIcon className='p-1 rounded-full' icon={faGraduationCap} />
                            </div>
                        </div>

                        <div className='text-[0.7rem] lg:w-[100%] bg-primary-3.5 px-4 py-4 rounded-2xl shadow-md leading-3'>
                            <div>
                                <h1 tabIndex="0" className='text-sm font-medium text-white mb-2'>{t('Formación')}</h1>
                            </div>
                            
                            <div id="FormationAccordions">
                                <div className="rounded-2xl shadow-md mb-2 dark:bg-primary-4">
                                    <h2 className="mb-0" id="headingOne">
                                        <button
                                            className="group relative flex w-full items-center rounded-2xl px-3 py-4 text-left text-xs text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-primary-4 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-primary-4 [&:not([data-te-collapse-collapsed])]:text-white [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(0,89,121)] dark:[&:not([data-te-collapse-collapsed])]:bg-primary-4 dark:[&:not([data-te-collapse-collapsed])]:text-white dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(0,89,121)]"
                                            type="button"
                                            data-te-collapse-init
                                            data-te-collapse-collapsed
                                            data-te-target="#collapseOne"
                                            aria-expanded="false"
                                            aria-controls="collapseOne">
                                                Université Paul Valery Montpellier 3 : Máster (BAC+5): Teoría, clínica y ética del Psicoanálisis. Oct 2021-Oct. 2023. Título aprobado, por validar en SENESCYT.
                                            <button
                                                className="ml-auto shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[primary-4] motion-reduce:transition-none dark:fill-primary-4 dark:group-[[data-te-collapse-collapsed]]:fill-primary-4" aria-label={t('Acordeón desplegable con documento/certificado')}>
                                                <FontAwesomeIcon className='p-2 rounded-full' icon={faChevronDown} size="2x" />
                                            </button>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseOne"
                                        className="!visible hidden"
                                        data-te-collapse-item
                                        aria-labelledby="headingOne">
                                        <div className="text-black px-1 py-3 bg-white rounded-2xl">
                                            <a className="text-[0.6rem] underline ml-2" href="#">Título de masterado en Teoría, clínica y ética del Psicoanálisis.pdf</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-2xl shadow-md mb-2 dark:bg-primary-4">
                                    <h2 className="mb-0" id="headingTwo">
                                        <button
                                            className="group relative flex w-full items-center rounded-2xl px-3 py-4 text-left text-xs text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-primary-4 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-primary-4 [&:not([data-te-collapse-collapsed])]:text-white [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(0,89,121)] dark:[&:not([data-te-collapse-collapsed])]:bg-primary-4 dark:[&:not([data-te-collapse-collapsed])]:text-white dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(0,89,121)]"
                                            type="button"
                                            data-te-collapse-init
                                            data-te-collapse-collapsed
                                            data-te-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo">
                                                    Institut International d’Études Françaises Université de Strasbourg, Estrasburgo- Francia Sept 2018-Jun 2019 Estudios culturales y diplomado C2.
                                            <button
                                                className="ml-auto shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[primary-4] motion-reduce:transition-none dark:fill-primary-4 dark:group-[[data-te-collapse-collapsed]]:fill-primary-4" aria-label={t('Acordeón desplegable con documento/certificado')}>
                                                <FontAwesomeIcon className='p-2 rounded-full' icon={faChevronDown} size="2x" />
                                            </button>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseTwo"
                                        className="!visible hidden"
                                        data-te-collapse-item
                                        aria-labelledby="headingTwo">
                                        <div className="text-black px-1 py-3 bg-white rounded-2xl">
                                            <a className="text-[0.6rem] underline ml-2" href="#">Título de Estudios culturales y diplomado C2.pdf</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-2xl shadow-md mb-2 dark:bg-primary-4">
                                    <h2 className="mb-0" id="headingThree">
                                        <button
                                            className="group relative flex w-full items-center rounded-2xl px-3 py-4 text-left text-xs text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-primary-4 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-primary-4 [&:not([data-te-collapse-collapsed])]:text-white [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(0,89,121)] dark:[&:not([data-te-collapse-collapsed])]:bg-primary-4 dark:[&:not([data-te-collapse-collapsed])]:text-white dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(0,89,121)]"
                                            type="button"
                                            data-te-collapse-init
                                            data-te-collapse-collapsed
                                            data-te-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseThree">
                                                PONTIFICIA UNIVERSIDAD CATÓLICA DEL ECUADOR, Quito – Ecuador. Ene 2011 – Dic 2015 Psicólogo clínico. reg. SENESCYT 1027-2018-1936436 Disertación: La relación de las Tecnologías de la Información y Comunicación (TIC) como servomecanismos, con el concepto de narcisismo en la teoría psicoanalítica.
                                            <button
                                                className="ml-auto shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[primary-4] motion-reduce:transition-none dark:fill-primary-4 dark:group-[[data-te-collapse-collapsed]]:fill-primary-4" aria-label={t('Acordeón desplegable con documento/certificado')}>
                                                <FontAwesomeIcon className='p-2 rounded-full' icon={faChevronDown} size="2x" />
                                            </button>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseThree"
                                        className="!visible hidden"
                                        data-te-collapse-item
                                        aria-labelledby="headingThree">
                                        <div className="text-black px-1 py-3 bg-white rounded-2xl">
                                            <a className="text-[0.6rem] underline ml-2" href="#">Título de Psicólogo clínico.pdf</a>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                    {// inside div component
                    }
                    <div className='flex flex-col lg:flex-row pt-3 pl-3 pr-3'>
                        <div className='flex w-full lg:w-[10%] mt-2 lg:mt-0 flex-row space-x-4 lg:flex-col lg:space-x-0 px-3 justify-evenly'>
                            <div className='flex items-center justify-center bg-primary-5 py-1 rounded-full text-black'>
                                <FontAwesomeIcon className='p-1 rounded-full' icon={faBriefcase} />
                            </div>
                        </div>

                        <div className='text-[0.7rem] lg:w-[100%] bg-primary-3.5 px-4 py-4 rounded-2xl shadow-md leading-3'>
                            <div>
                                <h1 tabIndex={0} className='text-sm font-medium text-white mb-2'>{t('Experiencia')}</h1>
                            </div>
                            
                            <div id="ExperienceAccordions">
                                <div className="rounded-2xl shadow-md mb-2 dark:bg-primary-4">
                                    <h2 className="mb-0" id="headingFour">
                                        <button
                                            className="group relative flex w-full items-center rounded-2xl px-3 py-4 text-left text-xs text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-primary-4 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-primary-4 [&:not([data-te-collapse-collapsed])]:text-white [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(0,89,121)] dark:[&:not([data-te-collapse-collapsed])]:bg-primary-4 dark:[&:not([data-te-collapse-collapsed])]:text-white dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(0,89,121)]"
                                            type="button"
                                            data-te-collapse-init
                                            data-te-collapse-collapsed
                                            data-te-target="#collapseFour"
                                            aria-expanded="false"
                                            aria-controls="collapseFour">
                                                EL BOSQUE ESCUELA Jul 2022- Presente Pedagogías y turismo experienciales.
                                            <button
                                                className="ml-auto shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[primary-4] motion-reduce:transition-none dark:fill-primary-4 dark:group-[[data-te-collapse-collapsed]]:fill-primary-4" aria-label={t('Acordeón desplegable con documento/certificado')}>
                                                <FontAwesomeIcon className='p-2 rounded-full' icon={faChevronDown} size="2x" />
                                            </button>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseFour"
                                        className="!visible hidden"
                                        data-te-collapse-item
                                        aria-labelledby="headingFour">
                                        <div className="text-black px-1 py-3 bg-white rounded-2xl">
                                            <a className="text-[0.6rem] underline ml-2" href="#">Certificado de trabajo - EL BOSQUE ESCUELA.pdf</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-2xl shadow-md mb-2 dark:bg-primary-4">
                                    <h2 className="mb-0" id="headingFive">
                                        <button
                                            className="group relative flex w-full items-center rounded-2xl px-3 py-4 text-left text-xs text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-primary-4 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-primary-4 [&:not([data-te-collapse-collapsed])]:text-white [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(0,89,121)] dark:[&:not([data-te-collapse-collapsed])]:bg-primary-4 dark:[&:not([data-te-collapse-collapsed])]:text-white dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(0,89,121)]"
                                            type="button"
                                            data-te-collapse-init
                                            data-te-collapse-collapsed
                                            data-te-target="#collapseFive"
                                            aria-expanded="false"
                                            aria-controls="collapseFive">
                                                TUTOR DOCTOR Dic. 2013- Feb 2020 Tutorías privadas en cálculo, matemáticas, física, lenguaje.
                                            <button
                                                className="ml-auto shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[primary-4] motion-reduce:transition-none dark:fill-primary-4 dark:group-[[data-te-collapse-collapsed]]:fill-primary-4" aria-label={t('Acordeón desplegable con documento/certificado')}>
                                                <FontAwesomeIcon className='p-2 rounded-full' icon={faChevronDown} size="2x" />
                                            </button>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseFive"
                                        className="!visible hidden"
                                        data-te-collapse-item
                                        aria-labelledby="headingFive">
                                        <div className="text-black px-1 py-3 bg-white rounded-2xl">
                                            <a className="text-[0.6rem] underline ml-2" href="#">Certificado de trabajo - TUTOR DOCTOR.pdf</a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="rounded-2xl shadow-md mb-2 dark:bg-primary-4">
                                    <h2 className="mb-0" id="headingSix">
                                        <button
                                            className="group relative flex w-full items-center rounded-2xl px-3 py-4 text-left text-xs text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-primary-4 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-primary-4 [&:not([data-te-collapse-collapsed])]:text-white [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(0,89,121)] dark:[&:not([data-te-collapse-collapsed])]:bg-primary-4 dark:[&:not([data-te-collapse-collapsed])]:text-white dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(0,89,121)]"
                                            type="button"
                                            data-te-collapse-init
                                            data-te-collapse-collapsed
                                            data-te-target="#collapseSix"
                                            aria-expanded="false"
                                            aria-controls="collapseSix">
                                                COLEGIO JOSÉ ENGLING. Quito - Ecuador Feb. 2016-Jun. 2018 Psicólogo Sección secundaria.
                                            <button
                                                className="ml-auto shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[primary-4] motion-reduce:transition-none dark:fill-primary-4 dark:group-[[data-te-collapse-collapsed]]:fill-primary-4" aria-label={t('Acordeón desplegable con documento/certificado')}>
                                                <FontAwesomeIcon className='p-2 rounded-full' icon={faChevronDown} size="2x" />
                                            </button>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseSix"
                                        className="!visible hidden"
                                        data-te-collapse-item
                                        aria-labelledby="headingSix">
                                        <div className="text-black px-1 py-3 bg-white rounded-2xl">
                                            <a className="text-[0.6rem] underline ml-2" href="#">Certificado de trabajo - COLEGIO JOSÉ ENGLING.pdf</a>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                            
                        </div>
                    </div>

                    {// inside div component
                    }
                    <div className='flex flex-col lg:flex-row pt-3 pl-3 pr-3'>
                        <div className='flex w-full lg:w-[10%] mt-2 lg:mt-0 flex-row space-x-4 lg:flex-col lg:space-x-0 px-3 justify-evenly'>
                            <div className='flex items-center justify-center bg-primary-5 py-1 rounded-full text-black'>
                                <FontAwesomeIcon className='p-1 rounded-full' icon={faUserNurse} />
                            </div>
                        </div>

                        <div className='text-[0.7rem] lg:w-[100%] bg-primary-3.5 px-4 py-4 rounded-2xl shadow-md leading-3'>
                            <div>
                                <h1 tabIndex={0} className='text-sm font-medium text-white mb-2'>{t('Especialidades')}</h1>
                            </div>
                            <div className='flex justify-evenly'>
                                <div className='text-[0.7rem] text-center w-[47%] bg-primary-4 mb-2 px-4 py-4 rounded-2xl shadow-md leading-3'>
                                    <h2 tabIndex={0} className='text-white'>{t('Psicoanálisis')}</h2>
                                </div>
                                <div className='text-[0.7rem] text-center w-[47%] bg-primary-4 mb-2 px-4 py-4 rounded-2xl shadow-md leading-3'>
                                    <h2 tabIndex={0} className='text-white'>{t('Psicoanálisis lacaniano')}</h2>
                                </div>
                            </div>
                            <div className='flex justify-evenly'>
                                <div className='text-[0.7rem] text-center w-[47%] bg-primary-4 mb-2 px-4 py-4 rounded-2xl shadow-md leading-3'>
                                    <h2 tabIndex={0} className='text-white'>{t('Psicopedagogia')}</h2>
                                </div>
                                <div className='text-[0.7rem] text-center w-[47%] bg-primary-4 mb-2 px-4 py-4 rounded-2xl shadow-md leading-3'>
                                    <h2 tabIndex={0} className='text-white'>{t('Psicoterapia psicoanalítica')}</h2>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    {// inside div component
                    }
                    <div className='flex flex-col lg:flex-row pt-3 pl-3 pr-3'>
                        <div className='flex w-full lg:w-[10%] mt-2 lg:mt-0 flex-row space-x-4 lg:flex-col lg:space-x-0 px-3 justify-evenly'>
                            <div className='flex items-center justify-center bg-primary-5 py-1 rounded-full text-black'>
                                <FontAwesomeIcon className='p-1 rounded-full' icon={faFileMedical} />
                            </div>
                        </div>

                        <div className='text-[0.7rem] lg:w-[100%] bg-primary-3.5 px-4 py-4 rounded-2xl shadow-md leading-3'>
                            <div>
                                <h1 tabIndex={0} className='text-sm font-medium text-white mb-2'>{t('Tratamientos')}</h1>
                            </div>
                            <div className='flex justify-evenly'>
                                <div className='text-[0.7rem] text-center w-[47%] bg-primary-4 mb-2 px-4 py-4 rounded-2xl shadow-md leading-3'>
                                    <h2 tabIndex={0} className='text-white'>{t('Adicción a internet')}</h2>
                                </div>
                                <div className='text-[0.7rem] text-center w-[47%] bg-primary-4 mb-2 px-4 py-4 rounded-2xl shadow-md leading-3'>
                                    <h2 tabIndex={0} className='text-white'>{t('Alcoholismo')}</h2>
                                </div>
                            </div>
                            <div className='flex justify-evenly'>
                                <div className='text-[0.7rem] text-center w-[47%] bg-primary-4 mb-2 px-4 py-4 rounded-2xl shadow-md leading-3'>
                                    <h2 tabIndex={0} className='text-white'>{t('Aborto')}</h2>
                                </div>
                                <div className='text-[0.7rem] text-center w-[47%] bg-primary-4 mb-2 px-4 py-4 rounded-2xl shadow-md leading-3'>
                                    <h2 tabIndex={0} className='text-white'>{t('Ansiedad')}</h2>
                                </div>
                            </div>

                            <div className='flex justify-evenly'>
                                <div className='text-[0.7rem] text-center w-[47%] bg-primary-4 mb-2 px-4 py-4 rounded-2xl shadow-md leading-3'>
                                    <h2 tabIndex={0} className='text-white'>{t('Depresión')}</h2>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    {// inside div component
                    }
                    <div className='flex flex-col lg:flex-row pt-3 pb-6 pl-3 pr-3'>
                        <div className='flex w-full lg:w-[10%] mt-2 lg:mt-0 flex-row space-x-4 lg:flex-col lg:space-x-0 px-3 justify-evenly'>
                            <div className='flex items-center justify-center bg-primary-5 py-1 rounded-full text-black'>
                                <FontAwesomeIcon className='p-1 rounded-full' icon={faLanguage} />
                            </div>
                        </div>

                        <div className='text-[0.7rem] lg:w-[100%] bg-primary-3.5 px-4 py-4 rounded-2xl shadow-md leading-3'>
                            <div>
                                <h1 tabIndex={0} className='text-sm font-medium text-white mb-2'>{t('Idiomas conocidos')}</h1>
                            </div>
                            <div className='flex justify-evenly'>
                                <div className='text-[0.7rem] text-center w-[47%] bg-primary-4 mb-2 px-4 py-4 rounded-2xl shadow-md leading-3'>
                                    <h2 tabIndex={0} className='text-white'>{t('Inglés')}</h2>
                                </div>
                                <div className='text-[0.7rem] text-center w-[47%] bg-primary-4 mb-2 px-4 py-4 rounded-2xl shadow-md leading-3'>
                                    <h2 tabIndex={0} className='text-white'>{t('Francés')}</h2>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
        </div>
    )
}