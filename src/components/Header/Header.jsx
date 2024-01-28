import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <header className='Header'>
      <a className='Header__LogoContainer' href="#">
        <img className='Header__LogoContainer__Logo'src="https://www.psicologos.com.ec/idioma/logo.gif" alt="Logo de Psicólogos Ecuador" />
      </a>
      <ul className='Header__ul'>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Compañía <FontAwesomeIcon icon={faChevronDown} /></a></li>
        <li><a href="#">Ayuda</a></li>
      </ul>
      <div className='Header__buttons'>
        <button>Iniciar Sesión</button>
        <button className='SignupButton'>Registrarse</button>
      </div>
    </header>
  );
}