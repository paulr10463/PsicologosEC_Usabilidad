import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next';

export default function VideoModal() {
  const { t, i18n } = useTranslation();
  const [videoKey, setVideoKey] = useState(0);

  const videoSource = (lang) => {
    switch (lang) {
      case 'en':
        return '/video/video-details-en.mp4';
      case 'fr':
        return '/video/video-details-fr.mp4';
      case 'zh':
        return '/video/video-details-zh.mp4';
      default:
        return '/video/video-details-es.mp4';
    }
  };

  useEffect(() => {
    setVideoKey((prevKey) => prevKey + 1);
  }, [i18n.language]);

  const openModal = () => {
    const modal = document.getElementById('my_modal_2');
    if (modal) {
      modal.showModal();
    }
  };

  const closeModal = () => {
    const modal = document.getElementById('my_modal_2');
    if (modal) {
      modal.close();
    }
  };

  return (
    <>
      <a className="text-[0.6rem] underline ml-2" href="#" onClick={openModal} aria-label={t('Acerca de mí (Desplegar Video)')}>
        {t('Acerca de mí')}
      </a>
      <dialog id="my_modal_2" className="flex-auto text-[0.7rem] bg-primary-4 px-4 py-4 rounded-2xl shadow-md leading-3">
        <div className="modal-box">
          <div className='flex justify-between'>
            <div className='text-[0.7rem] text-white text-center lg:w-fit bg-primary-6 ml-5 px-4 py-2 rounded-2xl shadow-md leading-3'>
              <h2 tabIndex="0" className="text-white">{t('Presentación')}</h2>
            </div>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-9 top-5" onClick={closeModal} aria-label={t('Cerrar')}>
              <FontAwesomeIcon icon={faCircleXmark} className="text-white" size="2x" />
            </button>
          </div>
          <div className='flex justify-between'>
            <video
              key={videoKey}
              autoPlay={false}
              width="560em"
              height="315em"
              style={{ margin: '2em', borderRadius: '1em' }}
              aria-label={t('Video de presentación del psicólogo')}
              controls
              className="video">
              <source src={videoSource(i18n.language)} type="video/mp4"/>
              {t('Su navegador no soporta la etiqueta de vídeo.')}
            </video>
          </div>
        </div>
      </dialog>
    </>
  );
}