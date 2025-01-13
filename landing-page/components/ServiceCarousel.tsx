import React, { useState, useEffect } from 'react';

interface ServiceCarouselProps {
  currentLang: string;
}

interface TranslationType {
  service1Title: string;
  service1Desc: string;
  service2Title: string;
  service2Desc: string;
  service3Title: string;
  service3Desc: string;
  service4Title: string;
  service4Desc: string;
}

const translations: Record<string, TranslationType> = {
  pt: {
    service1Title: "Corte Moderno",
    service1Desc: "Cortes personalizados para todos os tipos de cabelo",
    service2Title: "Coloração",
    service2Desc: "Técnicas exclusivas de coloração",
    service3Title: "Tratamentos",
    service3Desc: "Hidratação e reconstrução capilar",
    service4Title: "Penteados",
    service4Desc: "Penteados para ocasiões especiais"
  },
  en: {
    service1Title: "Modern Cut",
    service1Desc: "Personalized cuts for all hair types",
    service2Title: "Hair Color",
    service2Desc: "Exclusive coloring techniques",
    service3Title: "Treatments",
    service3Desc: "Hair hydration and reconstruction",
    service4Title: "Hairstyles",
    service4Desc: "Hairstyles for special occasions"
  },
  es: {
    service1Title: "Corte Moderno",
    service1Desc: "Cortes personalizados para todo tipo de cabello",
    service2Title: "Coloración",
    service2Desc: "Técnicas exclusivas de coloración",
    service3Title: "Tratamientos",
    service3Desc: "Hidratación y reconstrucción capilar",
    service4Title: "Peinados",
    service4Desc: "Peinados para ocasiones especiales"
  },
  fr: {
    service1Title: "Coupe Moderne",
    service1Desc: "Coupes personnalisées pour tous types de cheveux",
    service2Title: "Coloration",
    service2Desc: "Techniques exclusives de coloration",
    service3Title: "Traitements",
    service3Desc: "Hydratation et reconstruction capillaire",
    service4Title: "Coiffures",
    service4Desc: "Coiffures pour occasions spéciales"
  }
};

const ServiceCarousel: React.FC<ServiceCarouselProps> = ({ currentLang }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const t = translations[currentLang] || translations.pt; // Fallback para português se o idioma não existir

  const services = [
    {
      id: 1,
      image: "/img/corte.jpg",
      title: t.service1Title,
      description: t.service1Desc
    },
    {
      id: 2,
      image: "/img/coloração.jpg",
      title: t.service2Title,
      description: t.service2Desc
    },
    {
      id: 3,
      image: "/img/tratamento.jpg",
      title: t.service3Title,
      description: t.service3Desc
    },
    {
      id: 4,
      image: "/img/penteado.jpg",
      title: t.service4Title,
      description: t.service4Desc
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-12 mb-20">
      <div className="relative h-[500px] overflow-hidden rounded-xl">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`absolute w-full h-full transition-all duration-500 ease-in-out transform ${
              index === currentIndex ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-6">
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-lg">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navegação */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow-lg transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow-lg transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Indicadores */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-[#FFD700] w-6' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCarousel;