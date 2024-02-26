import './HomePageVideo.css';

export default function HomePageVideo() {

    return (
        <div className="mx-auto p-4 psychologist-video">
            <h1 className="text-4xl font-bold mb-4 text-center psychologist-title">Psicólogos Ecuador</h1>
            <div className="relative w-full max-w-lg mx-auto">
                <div className="video-container">
                    <video
                        controls
                        className="absolute top-0 left-0 w-full h-full video"
                    >
                        <source src="/video/video-home.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
};

