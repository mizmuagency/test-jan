import { FacebookIcon, InstagramIcon, MapPin, Phone, Mail, MessageCircle, X } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const MobileStart = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Service cards data
  const serviceCards = [
    { title: "REFERENZEN" },
    { title: "LEISTUNGEN" },
    { title: "UNTERNEHMEN" },
    { title: "KONTAKT" },
  ];

  // Main navigation items (matching screenshot)
  const mainNavItems = [
    "REFERENZEN",
    "LEISTUNGEN", 
    "UNTERNEHMEN",
    "KONTAKT"
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full min-h-screen">
      <div className="bg-white w-[400px] relative">
        {/* Home Logo Button - Top Left - Hidden when menu is open */}
        {!isMenuOpen && (
          <button
            onClick={() => window.location.reload()}
            className="fixed top-4 left-4 z-50 w-10 h-10 flex justify-center items-center"
            aria-label="Home"
          >
            <img
              src="https://pub-45b3416510f04b53aa169f591957c686.r2.dev/janbau%20weissneu.png"
              alt="J.A.N. BAU Home"
              className="w-10 h-10 object-contain"
            />
          </button>
        )}

        {/* Hamburger Menu Button - Simple 3 lines - Hidden when menu is open */}
        {!isMenuOpen && (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="fixed top-4 right-4 z-50 w-10 h-10 flex flex-col justify-center items-center space-y-1"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </button>
        )}

        {/* Mobile Menu Overlay - Full screen dark overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 bg-[#3a3a3a]">
            {/* Close button - X in top right */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 z-50"
              aria-label="Close menu"
            >
              <X className="w-8 h-8 text-white" />
            </button>

            {/* Navigation items */}
            <div className="pt-20 px-8">
              <nav className="space-y-8">
                {mainNavItems.map((item, index) => (
                  <div key={index}>
                    <a
                      href="#"
                      className="block text-white text-2xl font-bold [font-family:'Roboto',Helvetica] tracking-wide hover:text-gray-300 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* Main logo - Large circular logo taking up most of the top section */}
        <div className="w-full h-[500px] flex items-center justify-center bg-white pt-16">
          <div className="w-[350px] h-[350px] rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              alt="J.A.N. BAU GmbH Logo"
              src="https://pub-45b3416510f04b53aa169f591957c686.r2.dev/janbau%20weissneu.png"
            />
          </div>
        </div>

        {/* Navigation section with red cards - 2x2 Grid directly below logo */}
        <div className="w-full bg-[#262a28] px-4 py-8">
          <div className="grid grid-cols-2 gap-4 max-w-[350px] mx-auto">
            {serviceCards.map((card, index) => (
              <div
                key={index}
                className="w-[165px] h-[165px] relative rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-[url(/screenshot-2025-06-16-at-18-18-24-1-3.png)] bg-cover bg-center rounded-lg" />
                <div className="absolute inset-0 bg-[#f2000085] rounded-lg" />
                <div className="absolute inset-0 flex items-center justify-center p-2">
                  <div className="[font-family:'Roboto',Helvetica] font-bold text-white text-xl text-center tracking-[0] leading-5">
                    {card.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content section - All aligned to the left */}
        <div className="w-full px-[35px] py-16">
          {/* Headline - Left aligned */}
          <div className="mb-8 [font-family:'Roboto',Helvetica] font-bold text-black text-[40px] tracking-[0] leading-[45px] text-left">
            Wir stehen für höchste Qualität und saubere Arbeit.
          </div>

          {/* Description text - Left aligned */}
          <div className="mb-8 [font-family:'Roboto',Helvetica] font-normal text-black text-base tracking-[0] leading-5 text-left">
            Kontaktieren Sie uns noch heute für ein unverbindliches Angebot –
            wir machen aus Ihrem Projekt etwas Besonderes!
          </div>

          {/* Button - Left aligned */}
          <Button className="w-full h-[65px] bg-[#e53935] rounded-lg hover:bg-[#c62828] [font-family:'Roboto',Helvetica] font-semibold text-white text-base tracking-[0] leading-6">
            ANFRAGE STARTEN
          </Button>
        </div>

        {/* Footer section */}
        <div className="w-full bg-[#262a28] px-[49px] py-16">
          {/* Company logo and name - now left aligned */}
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
          <div className="mb-12 [font-family:'Roboto',Helvetica] font-normal text-white text-base tracking-[0] leading-[22px]">
            Wir sind ein Unternehmen der Bauindustrie im Bereich Trockenes,
            Akustik und Spachtelarbeiten. Unser Leistungsspektrum umfasst die
            gesamte Trockenbau, Akustik, Brandschutz und Schallschutz,
            Türmontagen, Abbruch und Entsorgung sowie Spachtelarbeiten.
          </div>

          {/* Social media icons */}
          <div className="flex gap-12 mb-12">
            <FacebookIcon className="w-12 h-12 text-white" />
            <InstagramIcon className="w-12 h-12 text-white" />
            <MessageCircle className="w-12 h-12 text-white" />
          </div>

          {/* Contact information */}
          <div className="mb-12">
            <div className="mb-6 text-[#e53935] [font-family:'Roboto',Helvetica] font-bold text-xl tracking-[0] leading-[22px]">
              KONTAKT
            </div>

            {/* Address */}
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-white flex-shrink-0" />
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
            <div className="[font-family:'Roboto',Helvetica] font-normal text-white text-base tracking-[0] leading-[22px]">
              Startseite<br />
              Kompetenzen<br />
              Unternehmen<br />
              Kontakt<br />
              Datenschutz
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
  );
};