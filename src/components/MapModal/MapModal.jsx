import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next';

export default function MapModal() {
  const { t } = useTranslation();

  const openModal = () => {
    const modal = document.getElementById('my_modal_1');
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <>
      <a className="text-[0.6rem] underline ml-2" href="#" onClick={openModal} aria-label={`Av. Colón y Tamayo (${t('Desplegar Mapa')})`}>
        Av. Colón y Tamayo
      </a>
      <dialog id="my_modal_1" className="flex-auto text-[0.7rem] bg-primary-4 px-4 py-4 rounded-2xl shadow-md leading-3" aria-label={`${t('Mapa de Ubicación')} Av. Colón y Tamayo`}>
        <div className="modal-box" >
          <div className='flex justify-between'>
            <div className='text-[0.7rem] text-center lg:w-fit bg-primary-6 ml-5 px-4 py-2 rounded-2xl shadow-md leading-3'>
              <h2 tabIndex="0" className='text-white'>{t('Ubicación')}</h2>
            </div>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-9 top-5" onClick={() => document.getElementById('my_modal_1').close()} aria-label={t('Cerrar')}>
              <FontAwesomeIcon icon={faCircleXmark} className="text-white" size="2x" />
            </button>
          </div>
          <div className='flex justify-between'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7933462816245!2d-78.48758632569196!3d-0.2027243354003285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a0d15945ea3%3A0x2fdc3cd8d43e4d38!2sAvenida%20Crist%C3%B3bal%20Col%C3%B3n%20%26%20Jos%C3%A9%20Tamayo%2C%20170109%20Quito!5e0!3m2!1ses-419!2sec!4v1708921809656!5m2!1ses-419!2sec"
              width="800em"
              height="400em"
              style={{ margin: '2em', borderRadius: '1em' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </dialog>
    </>
  );
}