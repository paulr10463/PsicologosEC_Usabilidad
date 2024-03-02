import React, { useState, useEffect } from 'react';
import './HomePageVideo.css';
import { useTranslation } from 'react-i18next';

export default function HomePageVideo() {
    const { t, i18n } = useTranslation();
    const [videoKey, setVideoKey] = useState(0);

    const videoSource = (lang) => {
        switch (lang) {
            case 'en':
                return '/video/video-home-en.mp4';
            case 'fr':
                return '/video/video-home-fr.mp4';
            case 'zh':
                return '/video/video-home-zh.mp4';
            default:
                return '/video/video-home-es.mp4';
        }
    };

    useEffect(() => {
        setVideoKey((prevKey) => prevKey + 1);
    }, [i18n.language]);

    return (
        <div className="mx-auto p-4 psychologist-video">
            <h1 tabIndex={0} className="text-4xl font-bold mb-4 text-center psychologist-title">{t('Psicólogos Ecuador')}</h1>
            <div className="relative w-full max-w-lg mx-auto">
                <div className="video-container">
                    <video
                        key={videoKey}
                        aria-label={t('Video inicial de Psicólogos Ecuador')}
                        controls
                        className="absolute top-0 left-0 w-full h-full video">
                        <source src={videoSource(i18n.language)} type="video/mp4" />
                        {t('Su navegador no soporta la etiqueta de vídeo.')}
                    </video>
                </div>
            </div>
        </div>
    );
};

