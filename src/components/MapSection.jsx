export default function MapSection() {
    return (
        <section className="w-full h-[400px] relative">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.1843460643763!2d-76.6124961249259!3d2.445597397533339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e300311751f0e81%3A0x39a5f813750739da!2sServitaxi!5e0!3m2!1sen!2sco!4v1755207205210!5m2!1sen!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Ubicación de Servitaxi"
            />
        </section>
    );
}