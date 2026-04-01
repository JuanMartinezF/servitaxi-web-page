import PropTypes from 'prop-types';

export default function VideoCard({ video }) {
    return (
        <div className="flex flex-col items-center w-full max-w-sm sm:max-w-md">
            <div
                className="relative w-full overflow-hidden rounded-2xl shadow-xl border border-gray-200"
                style={{ aspectRatio: video.aspectRatio || '9/16' }}
            >
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    controls
                    muted
                    playsInline
                    preload="metadata"
                    poster={video.poster || undefined}
                >
                    <source src={video.src} type="video/mp4" />
                </video>
            </div>
            {video.titulo && (
                <p className="mt-3 text-center font-semibold text-gray-700 text-base">
                    {video.titulo}
                </p>
            )}
        </div>
    );
}

VideoCard.propTypes = {
    video: PropTypes.shape({
        id: PropTypes.number.isRequired,
        titulo: PropTypes.string,
        descripcion: PropTypes.string,
        src: PropTypes.string.isRequired,
        poster: PropTypes.string,
        aspectRatio: PropTypes.string
    }).isRequired
};
