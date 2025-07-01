import { FacebookIcon, InstagramIcon, MapPin, Phone, Mail, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const MobileStart = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Service cards data with navigation links
  const serviceCards = [
    { title: "REFERENZEN", path: "/referenzen" },
    { title: "LEISTUNGEN", path: "/leistungen" },
    { title: "UNTERNEHMEN", path: "/unternehmen" },
    { title: "KONTAKT", path: "/kontakt" },
  ];

  // Main navigation items (matching screenshot)
  const mainNavItems = [
    { name: "REFERENZEN", path: "/referenzen" },
    { name: "LEISTUNGEN", path: "/leistungen" },
    { name: "UNTERNEHMEN", path: "/unternehmen" },
    { name: "KONTAKT", path: "/kontakt" }
  ];

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

        {/* Desktop Main Content */}
        <main className="bg-white">
          <div className="max-w-7xl mx-auto px-8 py-16">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-6xl font-bold text-[#e53935] [font-family:'Roboto',Helvetica] mb-4">
                J.A.N BAU GmbH
              </h1>
              <h2 className="text-3xl font-bold text-black [font-family:'Roboto',Helvetica] mb-2">
                IHR TROCKENBAU
              </h2>
              <h2 className="text-3xl font-bold text-black [font-family:'Roboto',Helvetica] mb-8">
                SPEZIALIST
              </h2>
              
              <p className="text-gray-700 [font-family:'Roboto',Helvetica] text-lg max-w-md mx-auto">
                Wir glauben an guter Handwerkskunst ist heute heute noch nie einen schlechteren.
              </p>
            </div>
          </div>
        </main>

        {/* Service Cards Grid - Full Width Dark Section */}
        <div className="w-full bg-[#3a3a3a] py-16">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
              {serviceCards.map((card, index) => (
                <Link
                  key={index}
                  to={card.path}
                  className="aspect-square relative rounded-lg overflow-hidden block group"
                >
                  <div className="absolute inset-0 bg-[url(/screenshot-2025-06-16-at-18-18-24-1-3.png)] bg-cover bg-center rounded-lg" />
                  <div className="absolute inset-0 bg-[#e53935] bg-opacity-80 rounded-lg group-hover:bg-opacity-90 transition-all" />
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="[font-family:'Roboto',Helvetica] font-bold text-white text-2xl text-center tracking-wide">
                      {card.title}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* White CTA Section */}
        <div className="w-full bg-white py-16">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex items-center justify-between">
              {/* Left side - Text content */}
              <div className="flex-1">
                <h3 className="text-4xl font-bold text-[#e53935] [font-family:'Roboto',Helvetica] mb-2">
                  Einen Traum
                </h3>
                <h3 className="text-4xl font-bold text-[#e53935] [font-family:'Roboto',Helvetica] mb-2">
                  zu bauen
                </h3>
                <h3 className="text-4xl font-bold text-black [font-family:'Roboto',Helvetica] mb-2">
                  sollte kein
                </h3>
                <h3 className="text-4xl font-bold text-black [font-family:'Roboto',Helvetica] mb-8">
                  Albtraum sein!
                </h3>
              </div>
              
              {/* Right side - Description and button */}
              <div className="flex-1 pl-16">
                <p className="text-black [font-family:'Roboto',Helvetica] text-lg mb-2">
                  Kontaktieren Sie uns,
                </p>
                <p className="text-black [font-family:'Roboto',Helvetica] text-lg mb-2">
                  wenn auch Sie Ihren Traum
                </p>
                <p className="text-black [font-family:'Roboto',Helvetica] text-lg mb-8">
                  verwirklichen wollen.
                </p>
                
                <Button className="bg-[#e53935] text-white px-8 py-4 rounded-lg [font-family:'Roboto',Helvetica] font-bold text-lg hover:bg-[#c62828] transition-colors">
                  ANFRAGE STARTEN
                </Button>
              </div>
            </div>
          </div>
        </div>

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

            {/* Company description */}
            <div className="mb-12 [font-family:'Roboto',Helvetica] font-normal text-white text-base tracking-[0] leading-[22px] max-w-3xl">
              Wir sind ein Unternehmen der Bauindustrie im Bereich Trockenes,
              Akustik und Spachtelarbeiten. Unser Leistungsspektrum umfasst die
              gesamte Trockenbau, Akustik, Brandschutz und Schallschutz,
              Türmontagen, Abbruch und Entsorgung sowie Spachtelarbeiten.
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
        {/* Home Logo Button - Top Left - Hidden when menu is open */}
        {!isMenuOpen && (
          <button
            onClick={() => window.location.reload()}
            className="fixed top-4 left-4 z-50 w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center"
            aria-label="Home"
          >
            <img
              src="https://pub-45b3416510f04b53aa169f591957c686.r2.dev/janbau%20weissneu.png"
              alt="J.A.N. BAU Home"
              className="w-full h-full object-contain"
            />
          </button>
        )}

        {/* Hamburger Menu Button - Simple 3 lines - Hidden when menu is open */}
        {!isMenuOpen && (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="fixed top-4 right-4 z-50 w-8 h-8 sm:w-10 sm:h-10 flex flex-col justify-center items-center space-y-1"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-0.5 sm:w-6 sm:h-0.5 bg-black"></div>
            <div className="w-5 h-0.5 sm:w-6 sm:h-0.5 bg-black"></div>
            <div className="w-5 h-0.5 sm:w-6 sm:h-0.5 bg-black"></div>
          </button>
        )}

        {/* Mobile Menu Overlay - Full screen dark overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 bg-[#3a3a3a]">
            {/* Close button - X in top right */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </button>

            {/* Navigation items */}
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

        {/* Main logo - Responsive circular logo */}
        <div className="w-full h-[400px] sm:h-[500px] flex items-center justify-center bg-white pt-12 sm:pt-16 px-4">
          <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              alt="J.A.N. BAU GmbH Logo"
              src="https://pub-45b3416510f04b53aa169f591957c686.r2.dev/janbau%20weissneu.png"
            />
          </div>
        </div>

        {/* Navigation section with red cards - 2x2 Grid - Full width dark background */}
        <div className="w-full bg-[#262a28] py-6 sm:py-8 mt-10">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-sm mx-auto px-4">
            {serviceCards.map((card, index) => (
              <Link
                key={index}
                to={card.path}
                className="aspect-square relative rounded-lg overflow-hidden block"
              >
                <div className="absolute inset-0 bg-[url(/screenshot-2025-06-16-at-18-18-24-1-3.png)] bg-cover bg-center rounded-lg" />
                <div className="absolute inset-0 bg-[#f2000085] rounded-lg" />
                <div className="absolute inset-0 flex items-center justify-center p-2">
                  <div className="[font-family:'Roboto',Helvetica] font-bold text-white text-lg sm:text-xl text-center tracking-[0] leading-5">
                    {card.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Content section - All aligned to the left */}
        <div className="w-full px-6 sm:px-8 py-12 sm:py-16">
          {/* Headline - Left aligned */}
          <div className="mb-6 sm:mb-8 [font-family:'Roboto',Helvetica] font-bold text-black text-[28px] sm:text-[36px] lg:text-[40px] tracking-[0] leading-[32px] sm:leading-[40px] lg:leading-[45px] text-left">
            Wir stehen für höchste Qualität und saubere Arbeit.
          </div>

          {/* Description text - Left aligned */}
          <div className="mb-6 sm:mb-8 [font-family:'Roboto',Helvetica] font-normal text-black text-sm sm:text-base tracking-[0] leading-5 sm:leading-6 text-left">
            Kontaktieren Sie uns noch heute für ein unverbindliches Angebot –
            wir machen aus Ihrem Projekt etwas Besonderes!
          </div>

          {/* Button - Left aligned */}
          <Button className="w-full h-[55px] sm:h-[65px] bg-[#e53935] rounded-lg hover:bg-[#c62828] [font-family:'Roboto',Helvetica] font-semibold text-white text-sm sm:text-base tracking-[0] leading-6">
            ANFRAGE STARTEN
          </Button>
        </div>

        {/* Footer section */}
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
            Wir sind ein Unternehmen der Bauindustrie im Bereich Trockenes,
            Akustik und Spachtelarbeiten. Unser Leistungsspektrum umfasst die
            gesamte Trockenbau, Akustik, Brandschutz und Schallschutz,
            Türmontagen, Abbruch und Entsorgung sowie Spachtelarbeiten.
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