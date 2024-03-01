import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'
import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();

    return (
        <div className="mx-auto">
            <div className="flex justify-center my-4">
                <Link to="/search" className="max-w-[6rem] py-5 flex justify-center items-center navbar__alternativeButton">
                    {t('Buscar')}
                </Link>
            </div>

            <div className="m-4">
                <h2 tabIndex={0} className="my-4 font-bold text-3xl">{t('Lista de psicólogos y terapeutas')}</h2>
                <div className="flex flex-col md:flex-row items-center">
                    <img
                        src="images/psicologos-lista.png"
                        alt="imagen psicólogo"
                        className="w-1/3 h-auto mx-auto mb-2"
                    />
                    <div className="md:pl-8">
                        <p tabIndex={0} className="text-justify mb-2">
                            Los mejores psicólogos de Ecuador. Con la opción “Buscar” se
                            mostrarán los siguientes centros o consultorios psicológicos que
                            están situados en Ecuador.
                        </p>
                        <p tabIndex={0} className="text-justify mb-2">
                            Le ayudaran a resolver sus problemas. Aquí encontrará psicólogos
                            de todas las ciudades de Ecuador para el tratamiento de distintos
                            trastornos.
                        </p>
                        <p tabIndex={0} className="text-justify mb-2">
                            Contacte con un psicólogo por teléfono o por email. ¿Necesita
                            ayuda psicológica? Psicologos.com.ec, directorio líder en
                            psicología de Ecuador y plataforma de psicólogos, acerca al
                            paciente la psicología en todo Ecuador.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between">
                <div className="m-4">
                    <h2 tabIndex={0} className='font-bold text-3xl'>Sobre nosotros</h2>
                    <p className="text-justify" tabIndex={0}>
                        Asociación Ecuatoriana de Psicólogos. Descubre los mejores
                        psicólogos en Quito y todo Ecuador en Psicologos.com.ec. Conectamos
                        a pacientes con profesionales de confianza. Encuentra ayuda para tus
                        preocupaciones psicológicas, ya sea por teléfono, correo o nuestro
                        formulario de contacto. Tu bienestar emocional es nuestra prioridad.
                    </p>
                </div>

                <div className="m-4">
                    <h2 tabIndex={0} className='font-bold text-3xl'>Público objetivo</h2>
                    <p className="text-justify" tabIndex={0}>
                        Personas en busca de apoyo psicológico en Quito y Ecuador. Nuestros
                        servicios se adaptan a aquellos que buscan profesionales
                        cualificados para abordar diversas preocupaciones emocionales y
                        trastornos. En Psicologos.com.ec, conectamos a individuos con los
                        mejores expertos para proporcionar el apoyo necesario en su viaje
                        hacia el bienestar.
                    </p>
                </div>
            </div>
        </div>
    )
}