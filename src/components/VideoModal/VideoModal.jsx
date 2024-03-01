import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

export default function VideoModal(){
  const openModal = () => {
    const modal = document.getElementById('my_modal_2');
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <>
      <a className="text-[0.6rem] underline ml-2" href="#" onClick={openModal} aria-label="Acerca de mí (Desplegar Video)">
        Acerca de mí
      </a>
      <dialog id="my_modal_2" className="flex-auto text-[0.7rem] bg-primary-4 px-4 py-4 rounded-2xl shadow-md leading-3">
        <div className="modal-box">
          <div className='flex justify-between'>
            <div className='text-[0.7rem] text-white text-center lg:w-fit bg-primary-6 ml-5 px-4 py-2 rounded-2xl shadow-md leading-3'>
              <h2 tabIndex="0" className="text-white">Presentación</h2>
            </div>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-9 top-5" onClick={() => document.getElementById('my_modal_2').close()} aria-label="Cerrar">
              <FontAwesomeIcon icon={faCircleXmark} className="text-white" size="2x" />
            </button>
          </div>
          <div className='flex justify-between'>
            <iframe 
            width="560em" 
            height="315em" 
            src="https://www.youtube.com/embed/iWinjE6iaQY?si=JB_HpCUs4DJdUkQh" 
            title="YouTube video player" 
            style={{ margin: '2em', borderRadius: '1em' }}
            frameborder="0" 
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            alt="Video de presentación del psicólogo"
            allowfullscreen>
              
            </iframe>
          </div>
        </div>
      </dialog>
    </>
  );
}