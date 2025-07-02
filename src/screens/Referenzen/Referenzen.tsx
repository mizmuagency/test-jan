import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown, Menu, X, FacebookIcon, InstagramIcon, MapPin, Phone, Mail } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Referenzen = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Main navigation items
  const mainNavItems = [
    { name: "REFERENZEN", path: "/referenzen" },
    { name: "LEISTUNGEN", path: "/leistungen" },
    { name: "UNTERNEHMEN", path: "/unternehmen" },
    { name: "KONTAKT", path: "/kontakt" }
  ];

  // Sample project data
  const projects = [
    {
      id: 1,
      title: "ZÜRICH | OBJEKT",
      images: [
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      details: {
        objekt: "Geschäftshaus",
        ort: "8800 Zürich",
        auftraggeber: "BH Immo AG",
        auftrag: "Brandschutz",
        jahr: "2024"
      }
    },
    {
      id: 2,
      title: "ZÜRICH | OBJEKT",
      images: [
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      details: {
        objekt: "Wohnkomplex",
        ort: "4000 Basel",
        auftraggeber: "Basel Wohnen AG",
        auftrag: "Trockenbau",
        jahr: "2023"
      }
    },
    {
      id: 3,
      title: "ZÜRICH | OBJEKT",
      images: [
        "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/2102588/pexels-photo-2102588.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      details: {
        objekt: "Bürokomplex",
        ort: "3000 Bern",
        auftraggeber: "Bern Office GmbH",
        auftrag: "Akustikbau",
        jahr: "2023"
      }
    },
    {
      id: 4,
      title: "ZÜRICH | OBJEKT",
      images: [
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      details: {
        objekt: "Industriebau",
        ort: "6000 Luzern",
        auftraggeber: "Luzern Industries",
        auftrag: "Spachtelarbeiten",
        jahr: "2024"
      }
    }
  ];

  const nextImage = () => {
    if (expandedProject !== null) {
      const project = projects.find(p => p.id === expandedProject);
      if (project) {
        setCurrentImageIndex((prev) => 
          prev === project.images.length - 1 ? 0 : prev + 1
        );
      }
    }
  };

  const prevImage = () => {
    if (expandedProject !== null) {
      const project = projects.find(p => p.id === expandedProject);
      if (project) {
        setCurrentImageIndex((prev) => 
          prev === 0 ? project.images.length - 1 : prev - 1
        );
      }
    }
  };

  const toggleProject = (projectId: number) => {
    if (expandedProject === projectId) {
      setExpandedProject(null);
    } else {
      setExpandedProject(projectId);
      setCurrentImageIndex(0);
    }
  };

  // WhatsApp Icon Component
  const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
    </svg>
  );

  return (
    <div className="bg-white w-full min-h-screen">
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        {/* Desktop Header */}
        <header className="bg-white px-8 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="w-12 h-12">
              <img
                src="https://pub-45b3416510f04b53aa169f591957c686.r2.dev/janbau%20weissneu.png"
                alt="J.A.N. BAU Home"
                className="w-full h-full object-contain"
              />
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="flex space-x-8">
              {mainNavItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="text-black [font-family:'Roboto',Helvetica] font-medium text-sm hover:text-[#e53935] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        {/* Desktop Main Content - Dark Background */}
        <main className="bg-[#262a28] min-h-screen">
          {/* Hero Section with Construction Image - No Title Overlay */}
          <div className="relative h-[400px] overflow-hidden">
            <img
              src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Construction project"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>

          {/* Content Section */}
          <div className="max-w-7xl mx-auto px-8 py-16">
            {/* Title Section */}
            <div className="mb-16">
              <h1 className="text-5xl font-bold text-white [font-family:'Roboto',Helvetica] tracking-wide mb-8">
                REFERENZEN
              </h1>
              
              {/* Description Text */}
              <div className="max-w-4xl">
                <p className="text-white [font-family:'Roboto',Helvetica] text-lg leading-relaxed mb-6">
                  Eine echte Partnerschaft ist eine Einbahnstraße – Ideen und Informationen 
                  fließen offen und regelmäßig, basierend auf gegenseitigem Vertrauen und 
                  Respekt für das gegenseitige Fachwissen – und unsere Kunden begrüßen 
                  diese Philosophie.
                </p>
                
                <p className="text-white [font-family:'Roboto',Helvetica] text-lg leading-relaxed">
                  Die besten und produktivsten Beziehungen sind synergetisch und 
                  zielorientiert, und eine langfristige Beziehung bietet die Mehrwert tief 
                  verwurzelter Branchen- und Unternehmenskenntnisse und -beziehungen.
                </p>
              </div>
            </div>

            {/* Projects Grid - Compact 2x2 Grid matching screenshot exactly */}
            <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
              {projects.map((project, index) => (
                <div key={project.id} className="mb-4">
                  {/* Project Image Container - Small square matching screenshot */}
                  <div className="relative w-48 h-48 mx-auto overflow-hidden rounded-lg mb-3">
                    <img
                      src={project.images[expandedProject === project.id ? currentImageIndex : 0]}
                      alt={project.title}
                      className="w-full h-full object-cover filter grayscale transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    
                    {/* Navigation arrows for image carousel when expanded */}
                    {expandedProject === project.id && project.images.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                          }}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-1 rounded-full hover:bg-opacity-80 transition-all z-10"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                          }}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-1 rounded-full hover:bg-opacity-80 transition-all z-10"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Project Title and Toggle - Compact spacing */}
                  <div 
                    className="flex justify-between items-center cursor-pointer py-1"
                    onClick={() => toggleProject(project.id)}
                  >
                    <h3 className="text-lg font-bold text-white [font-family:'Roboto',Helvetica] tracking-wide">
                      {project.title}
                    </h3>
                    <ChevronUp 
                      className={`w-5 h-5 text-white transition-transform duration-300 ${
                        expandedProject === project.id ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  {/* Expanded Project Details - Same background color as main background */}
                  {expandedProject === project.id && (
                    <div className="bg-[#262a28] rounded-lg overflow-hidden mt-2">
                      {/* Project Details Table - Very compact spacing matching screenshot */}
                      <div className="p-3">
                        <div className="space-y-0.5">
                          {/* Objekt */}
                          <div className="flex justify-between items-center">
                            <span className="text-white [font-family:'Roboto',Helvetica] font-normal text-sm">Objekt</span>
                            <span className="text-white [font-family:'Roboto',Helvetica] font-normal text-sm">{project.details.objekt}</span>
                          </div>
                          
                          {/* Ort */}
                          <div className="flex justify-between items-center">
                            <span className="text-white [font-family:'Roboto',Helvetica] font-normal text-sm">Ort</span>
                            <span className="text-white [font-family:'Roboto',Helvetica] font-normal text-sm">{project.details.ort}</span>
                          </div>
                          
                          {/* Auftraggeber */}
                          <div className="flex justify-between items-center">
                            <span className="text-white [font-family:'Roboto',Helvetica] font-normal text-sm">Auftraggeber</span>
                            <span className="text-white [font-family:'Roboto',Helvetica] font-normal text-sm">{project.details.auftraggeber}</span>
                          </div>
                          
                          {/* Auftrag */}
                          <div className="flex justify-between items-center">
                            <span className="text-white [font-family:'Roboto',Helvetica] font-normal text-sm">Auftrag</span>
                            <span className="text-white [font-family:'Roboto',Helvetica] font-normal text-sm">{project.details.auftrag}</span>
                          </div>
                          
                          {/* Jahr */}
                          <div className="flex justify-between items-center">
                            <span className="text-white [font-family:'Roboto',Helvetica] font-normal text-sm">Jahr</span>
                            <span className="text-white [font-family:'Roboto',Helvetica] font-normal text-sm">{project.details.jahr}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Desktop Footer Section */}
        <div className="w-full bg-[#262a28] px-8 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Company logo and name - left aligned */}
            <div className="flex flex-col items-start mb-8">
              <img
                className="w-24 h-[88px] object-cover mb-4"
                alt="Jan bau"
                src="/jan-bau-1.png"
              />
              <div className="[font-family:'Roboto',Helvetica] font-bold text-white text-[23px] tracking-[0] leading-[57.5px] text-left">
                J.A.N. BAU GmbH
              </div>
            </div>

            {/* Company description with proper line breaks */}
            <div className="mb-12 [font-family:'Roboto',Helvetica] font-normal text-white text-base tracking-[0] leading-[22px] max-w-3xl">
              Wir sind ein Unternehmen der Bauindustrie im<br />
              Bereich Trockenes, Akustik und Spachtelarbeiten.<br />
              Unser Leistungsspektrum umfasst die gesamte<br />
              Trockenbau, Akustik, Brandschutz und<br />
              Schallschutz, Türmontagen, Abbruch und<br />
              Entsorgung sowie Spachtelarbeiten.
            </div>

            {/* Social media icons */}
            <div className="flex gap-12 mb-12">
              <FacebookIcon className="w-12 h-12 text-white hover:text-[#e53935] cursor-pointer transition-colors" />
              <InstagramIcon className="w-12 h-12 text-white hover:text-[#e53935] cursor-pointer transition-colors" />
              <WhatsAppIcon className="w-12 h-12 text-white hover:text-[#e53935] cursor-pointer transition-colors" />
            </div>

            {/* Contact information */}
            <div className="mb-12">
              <div className="mb-6 text-[#e53935] [font-family:'Roboto',Helvetica] font-bold text-xl tracking-[0] leading-[22px]">
                KONTAKT
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                <div className="[font-family:'Roboto',Helvetica] font-normal text-white text-base tracking-[0] leading-[22px]">
                  Tödistrasse 2, 8854 Siebnen
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-6 h-6 text-white flex-shrink-0" />
                <div className="[font-family:'Roboto',Helvetica] font-normal text-white text-base tracking-[0] leading-[22px]">
                  +41 76 220 46 53
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 mb-8">
                <Mail className="w-6 h-6 text-white flex-shrink-0" />
                <div className="[font-family:'Roboto',Helvetica] font-normal text-white text-base tracking-[0] leading-[22px]">
                  info@jan-bau.ch
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mb-12">
              <div className="mb-4 [font-family:'Roboto',Helvetica] font-bold text-[#f84646] text-xl tracking-[0] leading-[22px]">
                Navigation
              </div>
              <div className="[font-family:'Roboto',Helvetica] font-normal text-white text-base tracking-[0] leading-[22px] space-y-1">
                <Link to="/" className="block hover:text-[#e53935] transition-colors">Startseite</Link>
                <Link to="/referenzen" className="block hover:text-[#e53935] transition-colors">Referenzen</Link>
                <Link to="/leistungen" className="block hover:text-[#e53935] transition-colors">Leistungen</Link>
                <Link to="/unternehmen" className="block hover:text-[#e53935] transition-colors">Unternehmen</Link>
                <Link to="/kontakt" className="block hover:text-[#e53935] transition-colors">Kontakt</Link>
                <Link to="/datenschutz" className="block hover:text-[#e53935] transition-colors">Datenschutz</Link>
              </div>
            </div>

            {/* Copyright */}
            <div className="[font-family:'Roboto',Helvetica] font-normal text-white text-base tracking-[0] leading-[30px]">
              ©&nbsp;&nbsp;J.A.N Bau GmbH. Alle Rechte vorbehalten. Webseite
              Design: mizmu.ch
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Keep existing mobile design */}
      <div className="lg:hidden bg-white max-w-md mx-auto relative min-h-screen">
        {/* Header with logo and menu */}
        <div className="flex justify-between items-center p-4 relative z-10">
          <Link to="/" className="w-8 h-8 sm:w-10 sm:h-10">
            <img
              src="https://pub-45b3416510f04b53aa169f591957c686.r2.dev/janbau%20weissneu.png"
              alt="J.A.N. BAU Home"
              className="w-full h-full object-contain"
            />
          </Link>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6 text-black" />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 bg-[#3a3a3a]">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </button>

            <div className="pt-16 sm:pt-20 px-6 sm:px-8">
              <nav className="space-y-6 sm:space-y-8">
                {mainNavItems.map((item, index) => (
                  <div key={index}>
                    <Link
                      to={item.path}
                      className="block text-white text-xl sm:text-2xl font-bold [font-family:'Roboto',Helvetica] tracking-wide hover:text-gray-300 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* Hero Image */}
        <div className="relative h-[300px] sm:h-[400px] overflow-hidden">
          <img
            src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Construction project"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Title Section */}
        <div className="px-6 py-8 bg-white">
          <h1 className="text-3xl sm:text-4xl font-bold text-black [font-family:'Roboto',Helvetica] mb-4">
            REFERENZEN
          </h1>
          <p className="text-gray-700 [font-family:'Roboto',Helvetica] text-sm sm:text-base leading-relaxed">
            Wir lieben und leben Gips. Mit viel Know-how und hohem Engagement setzen wir 
            die Wünsche unserer Kunden präzise und vor allem pünktlich um.
          </p>
        </div>

        {/* Projects Section - Mobile keeps rectangular format for better mobile viewing */}
        <div className="px-6 pb-8">
          {projects.slice(0, 3).map((project, index) => (
            <div key={project.id} className="mb-6">
              {/* Project Preview */}
              <div className="relative h-[200px] sm:h-[250px] overflow-hidden rounded-lg mb-4">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                
                {/* Navigation arrows for image carousel when expanded */}
                {expandedProject === project.id && project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Project Title and Toggle */}
              <div 
                className="flex justify-between items-center cursor-pointer py-2"
                onClick={() => toggleProject(project.id)}
              >
                <h3 className="text-lg sm:text-xl font-bold text-black [font-family:'Roboto',Helvetica]">
                  {project.title}
                </h3>
                <ChevronUp 
                  className={`w-6 h-6 text-black transition-transform duration-300 ${
                    expandedProject === project.id ? 'rotate-180' : ''
                  }`}
                />
              </div>

              {/* Expanded Project Details */}
              {expandedProject === project.id && (
                <div className="bg-gray-50 p-4 rounded-lg mt-2 space-y-3">
                  {/* Additional Images */}
                  {project.images.length > 1 && (
                    <div className="mb-4">
                      <img
                        src={project.images[currentImageIndex]}
                        alt={`${project.title} - Image ${currentImageIndex + 1}`}
                        className="w-full h-[200px] object-cover rounded-lg"
                      />
                      <div className="flex justify-center mt-2 space-x-2">
                        {project.images.map((_, imgIndex) => (
                          <button
                            key={imgIndex}
                            onClick={() => setCurrentImageIndex(imgIndex)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              currentImageIndex === imgIndex ? 'bg-[#e53935]' : 'bg-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-gray-600">Objekt:</span>
                      <p className="text-black">{project.details.objekt}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-600">Ort:</span>
                      <p className="text-black">{project.details.ort}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-600">Auftraggeber:</span>
                      <p className="text-black">{project.details.auftraggeber}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-600">Auftrag:</span>
                      <p className="text-black">{project.details.auftrag}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-600">Jahr:</span>
                      <p className="text-black">{project.details.jahr}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Complete Footer Section - Same as front page */}
        <div className="w-full bg-[#262a28] px-6 sm:px-8 py-12 sm:py-16">
          {/* Company logo and name - left aligned */}
          <div className="flex flex-col items-start mb-6 sm:mb-8">
            <img
              className="w-20 h-[70px] sm:w-24 sm:h-[88px] object-cover mb-3 sm:mb-4"
              alt="Jan bau"
              src="/jan-bau-1.png"
            />
            <div className="[font-family:'Roboto',Helvetica] font-bold text-white text-lg sm:text-[23px] tracking-[0] leading-[40px] sm:leading-[57.5px] text-left">
              J.A.N. BAU GmbH
            </div>
          </div>

          {/* Company description */}
          <div className="mb-8 sm:mb-12 [font-family:'Roboto',Helvetica] font-normal text-white text-sm sm:text-base tracking-[0] leading-[20px] sm:leading-[22px]">
            Wir sind ein Unternehmen der Bauindustrie im<br />
            Bereich Trockenes, Akustik und Spachtelarbeiten.<br />
            Unser Leistungsspektrum umfasst die gesamte<br />
            Trockenbau, Akustik, Brandschutz und<br />
            Schallschutz, Türmontagen, Abbruch und<br />
            Entsorgung sowie Spachtelarbeiten.
          </div>

          {/* Social media icons */}
          <div className="flex gap-8 sm:gap-12 mb-8 sm:mb-12">
            <FacebookIcon className="w-10 h-10 sm:w-12 sm:h-12 text-white hover:text-[#e53935] cursor-pointer transition-colors" />
            <InstagramIcon className="w-10 h-10 sm:w-12 sm:h-12 text-white hover:text-[#e53935] cursor-pointer transition-colors" />
            <WhatsAppIcon className="w-10 h-10 sm:w-12 sm:h-12 text-white hover:text-[#e53935] cursor-pointer transition-colors" />
          </div>

          {/* Contact information */}
          <div className="mb-8 sm:mb-12">
            <div className="mb-4 sm:mb-6 text-[#e53935] [font-family:'Roboto',Helvetica] font-bold text-lg sm:text-xl tracking-[0] leading-[22px]">
              KONTAKT
            </div>

            {/* Address */}
            <div className="flex items-start gap-3 mb-3 sm:mb-4">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0 mt-0.5" />
              <div className="[font-family:'Roboto',Helvetica] font-normal text-white text-sm sm:text-base tracking-[0] leading-[20px] sm:leading-[22px]">
                Tödistrasse 2, 8854 Siebnen
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
              <div className="[font-family:'Roboto',Helvetica] font-normal text-white text-sm sm:text-base tracking-[0] leading-[20px] sm:leading-[22px]">
                +41 76 220 46 53
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
              <div className="[font-family:'Roboto',Helvetica] font-normal text-white text-sm sm:text-base tracking-[0] leading-[20px] sm:leading-[22px]">
                info@jan-bau.ch
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mb-8 sm:mb-12">
            <div className="mb-3 sm:mb-4 [font-family:'Roboto',Helvetica] font-bold text-[#f84646] text-lg sm:text-xl tracking-[0] leading-[22px]">
              Navigation
            </div>
            <div className="[font-family:'Roboto',Helvetica] font-normal text-white text-sm sm:text-base tracking-[0] leading-[20px] sm:leading-[22px] space-y-1">
              <Link to="/" className="block hover:text-[#e53935] transition-colors">Startseite</Link>
              <Link to="/referenzen" className="block hover:text-[#e53935] transition-colors">Referenzen</Link>
              <Link to="/leistungen" className="block hover:text-[#e53935] transition-colors">Leistungen</Link>
              <Link to="/unternehmen" className="block hover:text-[#e53935] transition-colors">Unternehmen</Link>
              <Link to="/kontakt" className="block hover:text-[#e53935] transition-colors">Kontakt</Link>
              <Link to="/datenschutz" className="block hover:text-[#e53935] transition-colors">Datenschutz</Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="[font-family:'Roboto',Helvetica] font-normal text-white text-xs sm:text-base tracking-[0] leading-[24px] sm:leading-[30px]">
            ©&nbsp;&nbsp;J.A.N Bau GmbH. Alle Rechte vorbehalten. Webseite
            Design: mizmu.ch
          </div>
        </div>
      </div>
    </div>
  );
};