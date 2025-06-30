import { FacebookIcon, InstagramIcon, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const MobileStart = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Service cards data with adjusted positioning for equal spacing
  const serviceCards = [
    { title: "REFERENZEN", top: "top-[46px]", left: "left-[17px]" },
    { title: "LEISTUNGEN", top: "top-[46px]", left: "left-[218px]" },
    { title: "KONTAKT", top: "top-[232px]", left: "left-[218px]" },
    {
      title: "UNTERNEHMEN",
      top: "top-[230px]",
      left: "left-[17px]",
      extraClasses: "w-44 left-0",
    },
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
      <div className="bg-white w-[400px] relative">
        {/* Home Logo Button - Top Left */}
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

        {/* Hamburger Menu Button - Simple 3 lines */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="fixed top-4 right-4 z-50 w-10 h-10 flex flex-col justify-center items-center space-y-1"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)}>
            <div className="fixed top-0 right-0 w-80 h-full bg-[#262a28] shadow-xl transform transition-transform">
              <div className="p-6 pt-20">
                <nav className="space-y-4">
                  {navLinks.map((link, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block py-3 px-4 text-white hover:bg-[#e53935] rounded-lg transition-colors [font-family:'Roboto',Helvetica] font-normal text-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link}
                    </a>
                  ))}
                </nav>
                
                {/* Contact info in menu */}
                <div className="mt-8 pt-8 border-t border-gray-600">
                  <div className="mb-4 text-[#e53935] [font-family:'Roboto',Helvetica] font-bold text-lg">
                    KONTAKT
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-white flex-shrink-0" />
                      <div className="[font-family:'Roboto',Helvetica] font-normal text-white text-sm">
                        Tödistrasse 2, 8854 Siebnen
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-white flex-shrink-0" />
                      <div className="[font-family:'Roboto',Helvetica] font-normal text-white text-sm">
                        +41 76 220 46 53
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-white flex-shrink-0" />
                      <div className="[font-family:'Roboto',Helvetica] font-normal text-white text-sm">
                        info@jan-bau.ch
                      </div>
                    </div>
                  </div>
                  
                  {/* Social media icons in menu */}
                  <div className="flex gap-6 mt-6">
                    <FacebookIcon className="w-8 h-8 text-white hover:text-[#e53935] cursor-pointer transition-colors" />
                    <InstagramIcon className="w-8 h-8 text-white hover:text-[#e53935] cursor-pointer transition-colors" />
                    <MessageCircle className="w-8 h-8 text-white hover:text-[#e53935] cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main logo with full viewport height */}
        <div className="w-full h-screen flex items-center justify-center bg-white">
          <img
            className="w-full h-auto max-h-[80vh] object-contain"
            alt="J.A.N. BAU GmbH Logo"
            src="https://pub-45b3416510f04b53aa169f591957c686.r2.dev/janbau%20weissneu.png"
          />
        </div>

        {/* Headline */}
        <div className="w-[293px] mx-auto pt-16 pb-8 [font-family:'Roboto',Helvetica] font-bold text-black text-[40px] tracking-[0] leading-[45px] px-[35px]">
          Wir stehen für höchste Qualität und saubere Arbeit.
        </div>

        {/* Call to action section */}
        <Card className="w-[323px] mx-auto mb-16 border-none shadow-none">
          <CardContent className="p-0">
            <div className="w-[302px] mx-auto mb-6 [font-family:'Roboto',Helvetica] font-normal text-black text-base tracking-[0] leading-5">
              Kontaktieren Sie uns noch heute für ein unverbindliches Angebot –
              wir machen aus Ihrem Projekt etwas Besonderes!
            </div>

            <Button className="flex w-[323px] h-[65px] items-center justify-center gap-2.5 p-3 bg-[#e53935] rounded-lg hover:bg-[#c62828] [font-family:'Roboto',Helvetica] font-semibold text-white text-base tracking-[0] leading-6">
              ANFRAGE STARTEN
            </Button>
          </CardContent>
        </Card>

        {/* Navigation section with red cards - moved down */}
        <div className="w-full h-[437px] bg-[#262a28] relative">
          {serviceCards.map((card, index) => (
            <div
              key={index}
              className={`absolute w-[165px] h-[165px] ${card.top} ${card.left} rounded-lg`}
            >
              <div className="absolute w-[165px] h-[163px] top-0.5 left-0 bg-[url(/screenshot-2025-06-16-at-18-18-24-1-3.png)] bg-cover bg-[50%_50%]" />
              <div className="w-[165px] h-[165px] left-0 bg-[#f2000085] rounded-lg absolute top-0" />
              <div
                className={`absolute w-[145px] top-[76px] left-2.5 [font-family:'Roboto',Helvetica] font-bold text-white text-xl text-center tracking-[0] leading-5 ${card.extraClasses || ""}`}
              >
                {card.title}
              </div>
            </div>
          ))}
        </div>

        {/* Footer section */}
        <div className="w-full bg-[#262a28] px-[49px] py-16">
          {/* Company logo and name */}
          <div className="flex items-center mb-8">
            <img
              className="w-24 h-[88px] object-cover mr-4"
              alt="Jan bau"
              src="/jan-bau-1.png"
            />
            <div className="[font-family:'Roboto',Helvetica] font-bold text-white text-[23px] tracking-[0] leading-[57.5px]">
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
              {navLinks.map((link, index) => (
                <React.Fragment key={index}>
                  {link}
                  {index < navLinks.length - 1 && <br />}
                </React.Fragment>
              ))}
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