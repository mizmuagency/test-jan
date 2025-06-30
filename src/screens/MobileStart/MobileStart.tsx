import { FacebookIcon, InstagramIcon, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const MobileStart = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Service cards data - now using responsive positioning
  const serviceCards = [
    { title: "REFERENZEN", position: "top-left" },
    { title: "LEISTUNGEN", position: "top-right" },
    { title: "KONTAKT", position: "bottom-right" },
    { title: "UNTERNEHMEN", position: "bottom-left" },
  ];

  // Navigation links
  const navLinks = [
    "Startseite",
    "Kompetenzen",
    "Unternehmen",
    "Kontakt",
    "Datenschutz",
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full min-h-screen">
      <div className="bg-white w-full max-w-md relative">
        {/* Home Logo Button - Top Left */}
        <button
          onClick={() => window.location.reload()}
          className="fixed top-4 left-4 z-50 w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center"
          aria-label="Home"
        >
          <img
            src="https://pub-45b3416510f04b53aa169f591957c686.r2.dev/janbau%20weissneu.png"
            alt="J.A.N. BAU Home"
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
          />
        </button>

        {/* Hamburger Menu Button - Simple 3 lines */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="fixed top-4 right-4 z-50 w-8 h-8 sm:w-10 sm:h-10 flex flex-col justify-center items-center space-y-1"
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 sm:w-6 sm:h-0.5 bg-black"></div>
          <div className="w-5 h-0.5 sm:w-6 sm:h-0.5 bg-black"></div>
          <div className="w-5 h-0.5 sm:w-6 sm:h-0.5 bg-black"></div>
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)}>
            <div className="fixed top-0 right-0 w-72 sm:w-80 h-full bg-[#262a28] shadow-xl transform transition-transform">
              <div className="p-4 sm:p-6 pt-16 sm:pt-20">
                <nav className="space-y-3 sm:space-y-4">
                  {navLinks.map((link, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block py-2 sm:py-3 px-3 sm:px-4 text-white hover:bg-[#e53935] rounded-lg transition-colors [font-family:'Roboto',Helvetica] font-normal text-base sm:text-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link}
                    </a>
                  ))}
                </nav>
                
                {/* Contact info in menu */}
                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-600">
                  <div className="mb-3 sm:mb-4 text-[#e53935] [font-family:'Roboto',Helvetica] font-bold text-base sm:text-lg">
                    KONTAKT
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                      <div className="[font-family:'Roboto',Helvetica] font-normal text-white text-xs sm:text-sm">
                        Tödistrasse 2, 8854 Siebnen
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                      <div className="[font-family:'Roboto',Helvetica] font-normal text-white text-xs sm:text-sm">
                        +41 76 220 46 53
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                      <div className="[font-family:'Roboto',Helvetica] font-normal text-white text-xs sm:text-sm">
                        info@jan-bau.ch
                      </div>
                    </div>
                  </div>
                  
                  {/* Social media icons in menu */}
                  <div className="flex gap-4 sm:gap-6 mt-4 sm:mt-6">
                    <FacebookIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white hover:text-[#e53935] cursor-pointer transition-colors" />
                    <InstagramIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white hover:text-[#e53935] cursor-pointer transition-colors" />
                    <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white hover:text-[#e53935] cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main logo with safe area padding */}
        <div className="w-full h-64 sm:h-80 md:h-96 pt-safe">
          <img
            className="w-full h-full object-cover object-center"
            alt="J.A.N. BAU GmbH Logo"
            src="https://pub-45b3416510f04b53aa169f591957c686.r2.dev/janbau%20weissneu.png"
          />
        </div>

        {/* Navigation section with red cards - Responsive Grid */}
        <div className="w-full bg-[#262a28] px-4 py-8 sm:px-6 sm:py-12">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-sm mx-auto">
            {serviceCards.map((card, index) => (
              <div
                key={index}
                className="aspect-square relative rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-[url(/screenshot-2025-06-16-at-18-18-24-1-3.png)] bg-cover bg-center rounded-lg" />
                <div className="absolute inset-0 bg-[#f2000085] rounded-lg" />
                <div className="absolute inset-0 flex items-center justify-center p-2">
                  <div className="[font-family:'Roboto',Helvetica] font-bold text-white text-sm sm:text-base md:text-lg text-center tracking-[0] leading-tight">
                    {card.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Headline */}
        <div className="px-6 sm:px-8 pt-12 sm:pt-16 pb-6 sm:pb-8 [font-family:'Roboto',Helvetica] font-bold text-black text-2xl sm:text-3xl md:text-4xl tracking-[0] leading-tight text-left max-w-sm mx-auto">
          Wir stehen für höchste Qualität und saubere Arbeit.
        </div>

        {/* Call to action section */}
        <Card className="mx-6 sm:mx-8 mb-12 sm:mb-16 border-none shadow-none max-w-sm sm:max-w-md md:max-w-lg lg:mx-auto">
          <CardContent className="p-0">
            <div className="mb-4 sm:mb-6 [font-family:'Roboto',Helvetica] font-normal text-black text-sm sm:text-base tracking-[0] leading-relaxed">
              Kontaktieren Sie uns noch heute für ein unverbindliches Angebot –
              wir machen aus Ihrem Projekt etwas Besonderes!
            </div>

            <Button className="flex w-full h-12 sm:h-16 items-center justify-center gap-2.5 p-3 bg-[#e53935] rounded-lg hover:bg-[#c62828] [font-family:'Roboto',Helvetica] font-semibold text-white text-sm sm:text-base tracking-[0] leading-6">
              ANFRAGE STARTEN
            </Button>
          </CardContent>
        </Card>

        {/* Footer section */}
        <div className="w-full bg-[#262a28] px-6 sm:px-8 md:px-12 py-12 sm:py-16">
          {/* Company logo and name - now left aligned */}
          <div className="flex flex-col items-start mb-6 sm:mb-8">
            <img
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover mb-3 sm:mb-4"
              alt="Jan bau"
              src="/jan-bau-1.png"
            />
            <div className="[font-family:'Roboto',Helvetica] font-bold text-white text-lg sm:text-xl md:text-2xl tracking-[0] leading-tight text-left">
              J.A.N. BAU GmbH
            </div>
          </div>

          {/* Company description */}
          <div className="mb-8 sm:mb-12 [font-family:'Roboto',Helvetica] font-normal text-white text-sm sm:text-base tracking-[0] leading-relaxed">
            Wir sind ein Unternehmen der Bauindustrie im Bereich Trockenes,
            Akustik und Spachtelarbeiten. Unser Leistungsspektrum umfasst die
            gesamte Trockenbau, Akustik, Brandschutz und Schallschutz,
            Türmontagen, Abbruch und Entsorgung sowie Spachtelarbeiten.
          </div>

          {/* Social media icons */}
          <div className="flex gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12">
            <FacebookIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white hover:text-[#e53935] cursor-pointer transition-colors" />
            <InstagramIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white hover:text-[#e53935] cursor-pointer transition-colors" />
            <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white hover:text-[#e53935] cursor-pointer transition-colors" />
          </div>

          {/* Contact information */}
          <div className="mb-8 sm:mb-12">
            <div className="mb-4 sm:mb-6 text-[#e53935] [font-family:'Roboto',Helvetica] font-bold text-lg sm:text-xl tracking-[0] leading-tight">
              KONTAKT
            </div>

            {/* Address */}
            <div className="flex items-start gap-3 mb-3 sm:mb-4">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0 mt-0.5" />
              <div className="[font-family:'Roboto',Helvetica] font-normal text-white text-sm sm:text-base tracking-[0] leading-relaxed">
                Tödistrasse 2, 8854 Siebnen
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
              <div className="[font-family:'Roboto',Helvetica] font-normal text-white text-sm sm:text-base tracking-[0] leading-relaxed">
                +41 76 220 46 53
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
              <div className="[font-family:'Roboto',Helvetica] font-normal text-white text-sm sm:text-base tracking-[0] leading-relaxed">
                info@jan-bau.ch
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mb-8 sm:mb-12">
            <div className="mb-3 sm:mb-4 [font-family:'Roboto',Helvetica] font-bold text-[#f84646] text-lg sm:text-xl tracking-[0] leading-tight">
              Navigation
            </div>
            <div className="[font-family:'Roboto',Helvetica] font-normal text-white text-sm sm:text-base tracking-[0] leading-relaxed space-y-1">
              {navLinks.map((link, index) => (
                <div key={index} className="py-1">
                  {link}
                </div>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="[font-family:'Roboto',Helvetica] font-normal text-white text-xs sm:text-sm tracking-[0] leading-relaxed">
            ©&nbsp;&nbsp;J.A.N Bau GmbH. Alle Rechte vorbehalten. Webseite
            Design: mizmu.ch
          </div>
        </div>
      </div>
    </div>
  );
};