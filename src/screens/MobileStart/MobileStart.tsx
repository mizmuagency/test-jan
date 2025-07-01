import { FacebookIcon, InstagramIcon, MapPin, Phone, Mail, MessageCircle, X } from "lucide-react";
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

  return (
    <div className="bg-white w-full min-h-screen">
      <div className="bg-white max-w-md mx-auto relative min-h-screen">
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

        {/* Navigation section with red cards - 2x2 Grid - Moved down by 40px total */}
        <div className="w-full bg-[#262a28] px-4 py-6 sm:py-8 mt-10">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-sm mx-auto">
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
            <MessageCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white hover:text-[#e53935] cursor-pointer transition-colors" />
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