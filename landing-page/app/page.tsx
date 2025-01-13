'use client';

import { useState } from 'react';
import Image from 'next/image';
import ServiceCarousel from '../components/ServiceCarousel';

// Objeto com as traduções
const translations = {
  pt: {
    title: "Carol Lopes Salão",
    subtitle: "Experiência única em beleza e sofisticação",
    bookNow: "Agende Agora",
    servicesTitle: "Nossos Serviços",
    haircut: "Corte",
    haircutDesc: "Cortes personalizados com as últimas tendências",
    color: "Coloração",
    colorDesc: "Técnicas exclusivas de coloração",
    treatment: "Tratamentos",
    treatmentDesc: "Tratamentos premium para seus cabelos",
    contactTitle: "Contato",
    contactDesc: "Entre em contato para agendar seu horário",
    callUs: "Ligue Agora",
    whatsapp: "WhatsApp",
    location: "Nossa Localização",
    address: "Tv. Dr. Moraes, 710 - Batista Campos, Belém - PA, 66035-125, Brasil",
    ourWorks: "Nossos Trabalhos",
    viewMore: "Veja mais trabalhos"
  },
  en: {
    title: "Carol Lopes Salon",
    subtitle: "Unique experience in beauty and sophistication",
    bookNow: "Book Now",
    servicesTitle: "Our Services",
    haircut: "Haircut",
    haircutDesc: "Personalized cuts with the latest trends",
    color: "Color",
    colorDesc: "Exclusive coloring techniques",
    treatment: "Treatments",
    treatmentDesc: "Premium hair treatments",
    contactTitle: "Contact",
    contactDesc: "Get in touch to schedule your appointment",
    callUs: "Call Now",
    whatsapp: "WhatsApp",
    location: "Our Location",
    address: "Tv. Dr. Moraes, 710 - Batista Campos, Belém - PA, 66035-125, Brasil",
    ourWorks: "Our Works",
    viewMore: "View more works"
  },
  es: {
    title: "Salón Carol Lopes",
    subtitle: "Experiencia única en belleza y sofisticación",
    bookNow: "Reserve Ahora",
    servicesTitle: "Nuestros Servicios",
    haircut: "Corte",
    haircutDesc: "Cortes personalizados con las últimas tendencias",
    color: "Coloración",
    colorDesc: "Técnicas exclusivas de coloración",
    treatment: "Tratamientos",
    treatmentDesc: "Tratamientos premium para tu cabello",
    contactTitle: "Contacto",
    contactDesc: "Contáctanos para programar tu cita",
    callUs: "Llame Ahora",
    whatsapp: "WhatsApp",
    location: "Nuestra Ubicación",
    address: "Tv. Dr. Moraes, 710 - Batista Campos, Belém - PA, 66035-125, Brasil",
    ourWorks: "Nuestros Trabajos",
    viewMore: "Ver más trabajos"
  },
  fr: {
    title: "Salon Carol Lopes",
    subtitle: "Une expérience unique en beauté et sophistication",
    bookNow: "Réserver",
    servicesTitle: "Nos Services",
    haircut: "Coupe",
    haircutDesc: "Coupes personnalisées avec les dernières tendances",
    color: "Coloration",
    colorDesc: "Techniques exclusives de coloration",
    treatment: "Traitements",
    treatmentDesc: "Traitements premium pour vos cheveux",
    contactTitle: "Contact",
    contactDesc: "Contactez-nous pour prendre rendez-vous",
    callUs: "Appelez Maintenant",
    whatsapp: "WhatsApp",
    location: "Notre Emplacement",
    address: "Tv. Dr. Moraes, 710 - Batista Campos, Belém - PA, 66035-125, Brasil",
    ourWorks: "Nos Réalisations",
    viewMore: "Voir plus de travaux"
  }
};

export default function Home() {
  const [currentLang, setCurrentLang] = useState('pt');

  const t = (key: string) => {
    return translations[currentLang as keyof typeof translations][key as keyof typeof translations['pt']];
  };

  const services = [
    {
      title: 'haircut',
      desc: 'haircutDesc',
      icon: '✂️'
    },
    {
      title: 'color',
      desc: 'colorDesc',
      icon: '🎨'
    },
    {
      title: 'treatment',
      desc: 'treatmentDesc',
      icon: '✨'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Language Selector */}
      <div className="fixed top-6 right-6 z-50">
        <select
          onChange={(e) => setCurrentLang(e.target.value)}
          value={currentLang}
          className="pl-8 pr-4 py-2 border border-gray-200 rounded-md shadow-sm bg-white/80 backdrop-blur-sm text-black appearance-none cursor-pointer"
          style={{
            backgroundImage: `url(${currentLang === 'pt' ? '/img/flags/br.svg' :
                currentLang === 'en' ? '/img/flags/gb.svg' :
                  currentLang === 'es' ? '/img/flags/es.svg' :
                    '/img/flags/fr.svg'
              })`,
            backgroundPosition: '8px center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '20px'
          }}
        >
          <option value="pt" style={{ backgroundImage: 'url(/img/flags/br.svg)' }}>🇧🇷 Português</option>
          <option value="en" style={{ backgroundImage: 'url(/img/flags/gb.svg)' }}>🇬🇧 English</option>
          <option value="es" style={{ backgroundImage: 'url(/img/flags/es.svg)' }}>🇪🇸 Español</option>
          <option value="fr" style={{ backgroundImage: 'url(/img/flags/fr.svg)' }}>🇫🇷 Français</option>
        </select>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/img/background.jpg"
          alt="Carol Lopes Salão"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="px-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-[#FFD700] font-light mb-6">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              {t('subtitle')}
            </p>
            <a
              href="#contact"
              className="px-8 py-4 bg-[#FFD700] hover:bg-[#FFE55C] transition-colors duration-300 text-black rounded-md text-lg"
            >
              {t('bookNow')}
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-16 text-[#FFD700]">
            {t('servicesTitle')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-1 transition-transform duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl mb-4 text-[#FFD700]">{t(service.title)}</h3>
                <p className="text-black">{t(service.desc)}</p>
              </div>
            ))}
          </div>

          {/* Our Works Section with Carousel */}
          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl text-center mb-8 text-[#FFD700]">
              {t('ourWorks')}
            </h2>
            <ServiceCarousel />
            <div className="text-center mt-8">
              <a
                href="https://www.instagram.com/salaocarollopes?igsh=ZGJxcmNmOHBsdWF3"
                className="inline-block px-6 py-3 bg-[#FFD700] hover:bg-[#FFE55C] transition-colors duration-300 text-black rounded-md"
              >
                {t('viewMore')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-[#FFD700]">
            {t('contactTitle')}
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-black">
            {t('contactDesc')}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+5591984330350"
              className="inline-flex items-center px-8 py-4 bg-[#FFD700] hover:bg-[#FFE55C] transition-colors duration-300 text-black rounded-md text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
              {t('callUs')}
            </a>

            <a
              href="https://wa.me/5591984330350"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-[#25D366] hover:bg-[#20BD5A] transition-colors duration-300 text-white rounded-md text-lg"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              {t('whatsapp')}
            </a>
          </div>
        </div>
      </section>

      {/* Footer with Map */}
      <footer className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl text-center mb-8 text-[#FFD700]">
            {t('location')}
          </h2>
          <p className="text-center mb-8 text-black">{t('address')}</p>
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA09Jv2bQ8DcdqtbL4Zje5WM2YAGJFI8S8&q=Tv.+Dr.+Moraes,+710+-+Batista+Campos,+Belém+-+PA,+66035-125,+Brasil&zoom=17"
            ></iframe>
          </div>
        </div>
      </footer>
    </div>
  );
}