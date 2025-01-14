'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Instagram, Facebook, Phone, Mail, Clock, MapPin } from 'lucide-react';

// TypeScript interfaces
interface Translation {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  services: {
    title: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  team: {
    title: string;
    members: Array<{
      name: string;
      role: string;
      description: string;
    }>;
  };
  gallery: {
    productsTitle: string;
    spaceTitle: string;
  };
  footer: {
    contact: string;
    address: string;
    addressText: string;
    hours: string;
    schedule: string;
    time: string;
    social: string;
  };
}

interface Translations {
  [key: string]: Translation;
}

interface LanguageSelectorProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

// Translations object
const translations: Translations = {
  pt: {
    hero: {
      title: "Carol Lopes Salão",
      subtitle: "Experiência única em beleza e sofisticação",
      cta: "Agende Agora"
    },
    services: {
      title: "Nossos Serviços",
      items: [
        {
          icon: '✂️',
          title: 'Corte Moderno',
          description: 'Cortes personalizados para todos os tipos de cabelo'
        },
        {
          icon: '🎨',
          title: 'Coloração',
          description: 'Técnicas exclusivas de coloração'
        },
        {
          icon: '✨',
          title: 'Tratamentos',
          description: 'Hidratação e reconstrução capilar'
        },
        {
          icon: '💇‍♀️',
          title: 'Penteados',
          description: 'Penteados para ocasiões especiais'
        }
      ]
    },
    team: {
      title: "Nossa Equipe",
      members: [
        {
          name: 'Carol Lopes',
          role: 'Hair Stylist',
          description: 'Especialista em coloração e cortes modernos'
        },
        {
          name: 'Agatha Silva',
          role: 'Colorista',
          description: 'Expert em mechas e coloração'
        },
        {
          name: 'Pedro Santos',
          role: 'Hair Stylist',
          description: 'Especializado em cortes masculinos'
        }
      ]
    },
    gallery: {
      productsTitle: "Nossos Produtos",
      spaceTitle: "Nosso Espaço"
    },
    footer: {
      contact: "Contato",
      address: "Endereço",
      addressText: "Tv. Dr. Moraes, 710 - Batista Campos, Belém - PA, 66035-125",
      hours: "Horário",
      schedule: "Segunda a Sábado",
      time: "9h às 20h",
      social: "Redes Sociais"
    }
  },
  en: {
    hero: {
      title: "Carol Lopes Salon",
      subtitle: "Unique experience in beauty and sophistication",
      cta: "Book Now"
    },
    services: {
      title: "Our Services",
      items: [
        {
          icon: '✂️',
          title: 'Modern Cut',
          description: 'Personalized cuts for all hair types'
        },
        {
          icon: '🎨',
          title: 'Coloring',
          description: 'Exclusive coloring techniques'
        },
        {
          icon: '✨',
          title: 'Treatments',
          description: 'Hair hydration and reconstruction'
        },
        {
          icon: '💇‍♀️',
          title: 'Hairstyles',
          description: 'Hairstyles for special occasions'
        }
      ]
    },
    team: {
      title: "Our Team",
      members: [
        {
          name: 'Carol Lopes',
          role: 'Hair Stylist',
          description: 'Specialist in coloring and modern cuts'
        },
        {
          name: 'Agatha Silva',
          role: 'Colorist',
          description: 'Expert in highlights and coloring'
        },
        {
          name: 'Pedro Santos',
          role: 'Hair Stylist',
          description: 'Specialized in men\'s cuts'
        }
      ]
    },
    gallery: {
      productsTitle: "Our Products",
      spaceTitle: "Our Space"
    },
    footer: {
      contact: "Contact",
      address: "Address",
      addressText: "710 Dr. Moraes St. - Batista Campos, Belém - PA, 66035-125",
      hours: "Hours",
      schedule: "Monday to Saturday",
      time: "9AM to 8PM",
      social: "Social Media"
    }
  },
  es: {
    hero: {
      title: "Carol Lopes Salón",
      subtitle: "Experiencia única en belleza y sofisticación",
      cta: "Reserve Ahora"
    },
    services: {
      title: "Nuestros Servicios",
      items: [
        {
          icon: '✂️',
          title: 'Corte Moderno',
          description: 'Cortes personalizados para todo tipo de cabello'
        },
        {
          icon: '🎨',
          title: 'Coloración',
          description: 'Técnicas exclusivas de coloración'
        },
        {
          icon: '✨',
          title: 'Tratamientos',
          description: 'Hidratación y reconstrucción capilar'
        },
        {
          icon: '💇‍♀️',
          title: 'Peinados',
          description: 'Peinados para ocasiones especiales'
        }
      ]
    },
    team: {
      title: "Nuestro Equipo",
      members: [
        {
          name: 'Carol Lopes',
          role: 'Estilista',
          description: 'Especialista en coloración y cortes modernos'
        },
        {
          name: 'Agatha Silva',
          role: 'Colorista',
          description: 'Experta en mechas y coloración'
        },
        {
          name: 'Pedro Santos',
          role: 'Estilista',
          description: 'Especializado en cortes masculinos'
        }
      ]
    },
    gallery: {
      productsTitle: "Nuestros Productos",
      spaceTitle: "Nuestro Espacio"
    },
    footer: {
      contact: "Contacto",
      address: "Dirección",
      addressText: "Tv. Dr. Moraes, 710 - Batista Campos, Belém - PA, 66035-125",
      hours: "Horario",
      schedule: "Lunes a Sábado",
      time: "9h a 20h",
      social: "Redes Sociales"
    }
  },
  fr: {
    hero: {
      title: "Salon Carol Lopes",
      subtitle: "Une expérience unique en beauté et sophistication",
      cta: "Réserver Maintenant"
    },
    services: {
      title: "Nos Services",
      items: [
        {
          icon: '✂️',
          title: 'Coupe Moderne',
          description: 'Coupes personnalisées pour tous types de cheveux'
        },
        {
          icon: '🎨',
          title: 'Coloration',
          description: 'Techniques exclusives de coloration'
        },
        {
          icon: '✨',
          title: 'Traitements',
          description: 'Hydratation et reconstruction capillaire'
        },
        {
          icon: '💇‍♀️',
          title: 'Coiffures',
          description: 'Coiffures pour occasions spéciales'
        }
      ]
    },
    team: {
      title: "Notre Équipe",
      members: [
        {
          name: 'Carol Lopes',
          role: 'Coiffeuse Styliste',
          description: 'Spécialiste en coloration et coupes modernes'
        },
        {
          name: 'Agatha Silva',
          role: 'Coloriste',
          description: 'Experte en mèches et coloration'
        },
        {
          name: 'Pedro Santos',
          role: 'Coiffeur Styliste',
          description: 'Spécialisé en coupes masculines'
        }
      ]
    },
    gallery: {
      productsTitle: "Nos Produits",
      spaceTitle: "Notre Espace"
    },
    footer: {
      contact: "Contact",
      address: "Adresse",
      addressText: "Tv. Dr. Moraes, 710 - Batista Campos, Belém - PA, 66035-125",
      hours: "Horaires",
      schedule: "Lundi à Samedi",
      time: "9h à 20h",
      social: "Réseaux Sociaux"
    }
  }
};

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ currentLang, onLanguageChange }) => {
  const languages = [
    { code: 'pt', name: 'Português' },
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' }
  ];

  return (
    <div className="fixed top-4 right-4 z-50">
      <select
        value={currentLang}
        onChange={(e) => onLanguageChange(e.target.value)}
        className="bg-white/80 backdrop-blur-sm rounded-md px-3 py-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFD700] text-gray-700"
        aria-label="Select language"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

interface HeroCarouselProps {
  t: Translation['hero'];
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ t }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { type: 'video' as const, src: '/vid/take1.mp4' },
    { type: 'video' as const, src: '/vid/take2mp4' },
    { type: 'video' as const, src: '/vid/take3.mp4' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleScheduling = () => {
    const phoneNumber = "5591984330350";
    const message = encodeURIComponent("Olá, gostaria de agendar um horário");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
        >
          {slide.type === 'video' && (
            <video
              src={slide.src}
              autoPlay
              muted
              loop
              playsInline
              className="object-cover w-full h-full"
            />
          )}
        </div>
      ))}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-[#FFD700] font-playfair mb-6">
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            {t.subtitle}
          </p>
          <button
            onClick={handleScheduling}
            className="px-8 py-4 bg-[#FFD700] hover:bg-[#FFE55C] transition-colors duration-300 text-black rounded-md text-lg"
          >
            {t.cta}
          </button>
        </div>
      </div>
    </div>
  );
};

interface ServicesSectionProps {
  t: Translation['services'];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ t }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-playfair md:text-4xl text-center mb-16 text-black">
          {t.title}
        </h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {t.items.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-1 transition-transform duration-300 border border-gray-100"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl mb-4 text-black">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
interface TeamCarouselProps {
  t: Translation['team'];
}

const TeamCarousel: React.FC<TeamCarouselProps> = ({ t }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const team = [
    {
      ...t.members[0],
      instagram: 'https://www.instagram.com/carolcolorista/',
      image: '/img/team/carol-lopes2.jpg'
    },
    {
      ...t.members[1],
      instagram: 'https://instagram.com/agathasilva',
      image: '/img/team/ana-silva.jpg'
    },
    {
      ...t.members[2],
      instagram: 'https://instagram.com/pedrosantos',
      image: '/img/team/pedro-santos.jpg'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % team.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [team.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {team.map((member, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${currentSlide === index
              ? 'opacity-100 pointer-events-auto z-10'
              : 'opacity-0 pointer-events-none z-0'
            }`}
        >
          <img
            src={member.image}
            alt={member.name}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="px-4 max-w-2xl">
              <h2 className="text-4xl md:text-6xl text-[#FFD700] font-playfair mb-4">
                {member.name}
              </h2>
              <p className="text-xl md:text-2xl text-white mb-4">
                {member.role}
              </p>
              <p className="text-lg text-white/90 mb-6">
                {member.description}
              </p>
              {member.instagram && (
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFD700] hover:bg-[#FFE55C] text-black rounded-full transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                  Siga no Instagram
                </a>
              )}
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? team.length - 1 : prev - 1))}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors duration-300 z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev === team.length - 1 ? 0 : prev + 1))}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors duration-300 z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </section>
  );
};
interface GalleryProps {
  t: Translation['gallery'];
}

const Gallery: React.FC<GalleryProps> = ({ t }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const salonImages = [
    '/img/salon/space1.jpg',
    '/img/salon/space2.jpg'
  ];

  const brands = [
    '/img/brands/brand1.jpg',
    '/img/brands/brand2.jpg',
    '/img/brands/brand3.jpg',
    '/img/brands/brand4.jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % salonImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [salonImages.length]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-playfair md:text-4xl text-center mb-16 text-black">
          {t.productsTitle}
        </h2>

        {/* Brands row */}
        <div className="flex justify-center items-center gap-8 mb-20">
          {brands.map((brand, index) => (
            <div key={index} className="w-32 h-32 relative bg-black rounded-lg p-4">
              <img
                src={brand}
                alt={`Brand ${index + 1}`}
                className="object-contain w-full h-full hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Salon images carousel */}
        <h2 className="text-3xl font-playfair md:text-4xl text-center mb-16 text-black">
          {t.spaceTitle}
        </h2>
        <div className="relative h-[600px] w-full overflow-hidden rounded-lg">
          {salonImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <img
                src={image}
                alt={`Salon space ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}

          {/* Carousel Controls */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? salonImages.length - 1 : prev - 1))}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors duration-300"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev === salonImages.length - 1 ? 0 : prev + 1))}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors duration-300"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {salonImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${currentSlide === index ? 'bg-white' : 'bg-white/50'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
interface FooterProps {
  t: Translation['footer'];
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-playfair mb-4">{t.contact}</h3>
            <div className="space-y-2">
              <a
                href="tel:+5591984330350"
                className="flex items-center gap-2 hover:text-[#FFD700] transition-colors duration-300"
                aria-label="Phone number"
              >
                <Phone className="w-4 h-4" />
                (91) 98433-0350
              </a>
              <a
                href="mailto:contato@carollopes.com"
                className="flex items-center gap-2 hover:text-[#FFD700] transition-colors duration-300"
                aria-label="Email address"
              >
                <Mail className="w-4 h-4" />
                contato@carollopes.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-playfair mb-4">{t.address}</h3>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1" />
              <p>{t.addressText}</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-playfair mb-4">{t.hours}</h3>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <div>
                <p>{t.schedule}</p>
                <p>{t.time}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-playfair mb-4">{t.social}</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/salaocarollopes"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFD700] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com/salaocarollopes"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFD700] transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  const [language, setLanguage] = useState('pt');
  const t = translations[language];

  return (
    <div className="min-h-screen">
      <LanguageSelector currentLang={language} onLanguageChange={setLanguage} />
      <HeroCarousel t={t.hero} />
      <ServicesSection t={t.services} />
      <TeamCarousel t={t.team} />
      <Gallery t={t.gallery} />
      <Footer t={t.footer} />
    </div>
  );
}