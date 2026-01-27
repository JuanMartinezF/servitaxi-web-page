import { useState } from 'react';
import PropTypes from 'prop-types';

export default function ServiceCard({ service }) {
    const [imageError, setImageError] = useState(false);

    return (
        <article className="bg-yellow-200 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg 
                          hover:shadow-2xl transition-all duration-500 
                          hover:scale-105 hover:-translate-y-2
                          border border-yellow-300">
            <div className="overflow-hidden rounded-lg mb-4 sm:mb-6">
                {!imageError ? (
                    <img 
                        src={service.image}
                        alt={service.alt}
                        className="w-full h-80 sm:h-48 md:h-52 object-cover 
                                 transition-transform duration-500 hover:scale-110"
                        onError={() => setImageError(true)}
                        loading="lazy"
                    />
                ) : (
                    <div className="w-full h-80 sm:h-48 md:h-52 flex items-center justify-center 
                                  bg-gradient-to-br from-yellow-100 to-yellow-300">
                        <span className="text-6xl">🚕</span>
                    </div>
                )}
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 
                         text-center text-gray-800">
                {service.title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-justify 
                         leading-relaxed text-black">
                {service.description}
            </p>
        </article>
    );
}

ServiceCard.propTypes = {
    service: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
    }).isRequired
};
