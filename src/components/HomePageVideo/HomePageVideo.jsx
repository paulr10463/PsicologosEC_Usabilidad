import './HomePageVideo.css';
import { useTranslation } from 'react-i18next';

export default function HomePageVideo() {
    const { t } = useTranslation();

    return (
        <div className="mx-auto p-4 psychologist-video">
            <h1 tabIndex={0} className="text-4xl font-bold mb-4 text-center psychologist-title">{t('Psicólogos Ecuador')}</h1>
            <div className="relative w-full max-w-lg mx-auto">
                <div className="video-container">
                    <video
                        aria-label={t('Video inicial de Psicólogos Ecuador')}
                        controls
                        className="absolute top-0 left-0 w-full h-full video">
                        <source src="/video/video-home.mp4" type="video/mp4" />
                        {t('Su navegador no soporta la etiqueta de vídeo.')}
                    </video>
                </div>
            </div>
        </div>
    );
};

