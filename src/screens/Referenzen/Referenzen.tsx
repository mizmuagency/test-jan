import { ChevronLeft, ChevronRight, ChevronUp, Menu, X } from "lucide-react";
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
        auftrag: "Brandschutz",
        jahr: "2024"
      }
    },
    {
      id: 2,
      title: "BASEL | WOHNBAU",
      images: [
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      details: {
        objekt: "Wohnkomplex",
        ort: "4000 Basel",
        auftrag: "Trockenbau",
        jahr: "2023"
      }
    },
    {
      id: 3,
      title: "BERN | BÜROGEBÄUDE",
      images: [
        "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/2102588/pexels-photo-2102588.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      details: {
        objekt: "Bürokomplex",
        ort: "3000 Bern",
        auftrag: "Akustikbau",
        jahr: "2023"
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

  return (
    <div className="bg-white w-full min-h-screen">
      <div className="bg-white max-w-md mx-auto relative min-h-screen">
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

        {/* Projects Section */}
        <div className="px-6 pb-8">
          {projects.map((project, index) => (
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

        {/* Footer */}
        <div className="bg-[#262a28] px-6 py-12 mt-8">
          <div className="text-center">
            <Link to="/" className="inline-block mb-4">
              <img
                src="https://pub-45b3416510f04b53aa169f591957c686.r2.dev/janbau%20weissneu.png"
                alt="J.A.N. BAU"
                className="w-16 h-16 mx-auto"
              />
            </Link>
            <div className="text-white [font-family:'Roboto',Helvetica] font-bold text-lg mb-8">
              J.A.N. BAU GmbH
            </div>
            
            {/* Footer Navigation */}
            <div className="space-y-2 mb-8">
              {mainNavItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="block text-white [font-family:'Roboto',Helvetica] text-sm hover:text-[#e53935] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="text-white text-xs [font-family:'Roboto',Helvetica]">
              © J.A.N Bau GmbH. Alle Rechte vorbehalten.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};