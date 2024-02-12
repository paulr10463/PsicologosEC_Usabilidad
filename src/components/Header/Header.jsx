
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faBars } from '@fortawesome/free-solid-svg-icons'
import { Collapse, Dropdown, Ripple, initTE } from 'tw-elements';
import { useEffect } from 'react';
import './Header.css';

export default function Header() {
  useEffect(() => {
    initTE({ Collapse, Dropdown, Ripple });
  }, []);

  return (
    <nav
      className="flex w-full flex-wrap items-center justify-between  text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 "
      data-te-navbar-ref>
      <div className="  flex w-full flex-wrap justify-between px-3">
          <a
            className="mx-2 flex"
            href="#">
            <img
              className="mr-2 h-[3em] max-h-[80px]"
              src="https://www.psicologos.com.ec/idioma/logo.gif"
              alt="TE Logo"
              loading="lazy" />
          </a>

        <button
          className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
          type="button"
          data-te-collapse-init
          data-te-target="#navbarSupportedContent4"
          aria-controls="navbarSupportedContent4"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="w-7">
            <FontAwesomeIcon icon={faBars} />
          </span>
        </button>

        <div
          className="!visible  ml-[-1rem] hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto "
          id="navbarSupportedContent4"
          data-te-collapse-item>
          <ul
            className=" list-style-none mr-auto flex flex-col pl-0 lg:mt-0 lg:flex-row lg:items-center"
            data-te-navbar-nav-ref>
            <li 
              className="block mt-3 lg:mt-0 ml-3"
              data-te-nav-item-ref>
              <a
                className="navbar__button "
                aria-current="page"
                href="#"
                data-te-nav-link-ref
              >Inicio</a
              >
            </li>
            <li>
              <div className="relative mt-3  ml-3 lg:mt-0 lg:ml-0" >
                <a
                  className="navbar__button"
                  href="#"
                  data-te-dropdown-toggle-ref
                  aria-expanded="false"
                  >
                  Compañía
                  <span className="ml-2">
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                </a>
                <ul
                  className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                  aria-labelledby="dropdownMenuButton2"
                  data-te-dropdown-menu-ref>
                  <li>
                    <a
                      className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-xs font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                      href="#"
                      data-te-dropdown-item-ref
                    >Action</a
                    >
                  </li>
                  <li>
                    <a
                      className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-xs font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                      href="#"
                      data-te-dropdown-item-ref
                    >Another action</a
                    >
                  </li>
                  <li>
                    <a
                      className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-xs font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                      href="#"
                      data-te-dropdown-item-ref
                    >Something else here</a
                    >
                  </li>
                </ul>
              </div>
              
            </li>
            <li
              className="relative mt-3 ml-3 lg:mt-0 lg:ml-0"
              data-te-nav-item-ref>
              <a
                className="navbar__button"
                aria-current="page"
                href="#"
                data-te-nav-link-ref
              >Ayuda</a
              >
            </li>
          </ul>

          <div className="flex flex-column items-center my-3 ml-3 lg:my-0 lg:flex-row">
            <button
              data-te-ripple-init
              data-te-ripple-color="light"
              className="navbar__button block relative lg:my-auto">
              Iniciar Sesión
            </button>
            <button
              data-te-ripple-init
              data-te-ripple-color="light"
              className="navbar__alternativeButton relative lg:my-auto"
            >
              Registrarse
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}