import { Menu, X, FacebookIcon, InstagramIcon, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Leistungen = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Main navigation items
  const mainNavItems = [
    { name: "REFERENZEN", path: "/referenzen" },
    { name: "LEISTUNGEN", path: "/leistungen" },
    { name: "UNTERNEHMEN", path: "/unternehmen" },
    { name: "KONTAKT", path: "/kontakt" }
  ];

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
            src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Construction services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Title Section */}
        <div className="px-6 py-8 bg-white">
          <h1 className="text-3xl sm:text-4xl font-bold text-black [font-family:'Roboto',Helvetica] mb-6">
            LEISTUNGEN
          </h1>
          
          {/* Services Description */}
          <div className="space-y-4 text-gray-700 [font-family:'Roboto',Helvetica] text-sm sm:text-base leading-relaxed">
            <p>
              Unser Leistungsspektrum umfasst sämtliche Arbeiten im Gipsbereich und modernen Trockenbau, darunter die Herstellung von metallischen Unterkonstruktionen, abgehängten Decken, Vorsatzschalen und Raum-in-Raum-Systemen. Wir realisieren individuelle Lösungen für Wohn-, Gewerbe- und Industriebauten – termingerecht, wirtschaftlich und in höchster Qualität.
            </p>
          </div>
        </div>

        {/* Services List */}
        <div className="px-6 pb-8">
          <div className="space-y-6">
            {/* Service Category 1 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-black [font-family:'Roboto',Helvetica] mb-4">
                TROCKENBAU
              </h3>
              <ul className="space-y-2 text-gray-700 [font-family:'Roboto',Helvetica] text-sm sm:text-base">
                <li>• Metallische Unterkonstruktionen</li>
                <li>• Vorsatzschalen</li>
                <li>• Trennwände</li>
                <li>• Raum-in-Raum-Systeme</li>
                <li>• Abgehängte Decken</li>
              </ul>
            </div>

            {/* Service Category 2 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-black [font-family:'Roboto',Helvetica] mb-4">
                AKUSTIK & BRANDSCHUTZ
              </h3>
              <ul className="space-y-2 text-gray-700 [font-family:'Roboto',Helvetica] text-sm sm:text-base">
                <li>• Akustikbau</li>
                <li>• Schallschutz</li>
                <li>• Brandschutz</li>
                <li>• Spezielle Akustiksysteme</li>
                <li>• Brandschutzbekleidungen</li>
              </ul>
            </div>

            {/* Service Category 3 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-black [font-family:'Roboto',Helvetica] mb-4">
                SPACHTELARBEITEN
              </h3>
              <ul className="space-y-2 text-gray-700 [font-family:'Roboto',Helvetica] text-sm sm:text-base">
                <li>• Gipsspachtelarbeiten</li>
                <li>• Oberflächenbehandlung</li>
                <li>• Fugenspachtelung</li>
                <li>• Glättarbeiten</li>
                <li>• Qualitätsstufen Q1-Q4</li>
              </ul>
            </div>

            {/* Service Category 4 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-black [font-family:'Roboto',Helvetica] mb-4">
                WEITERE LEISTUNGEN
              </h3>
              <ul className="space-y-2 text-gray-700 [font-family:'Roboto',Helvetica] text-sm sm:text-base">
                <li>• Türmontagen</li>
                <li>• Abbrucharbeiten</li>
                <li>• Entsorgung</li>
                <li>• Beratung & Planung</li>
                <li>• Qualitätskontrolle</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="px-6 py-8 bg-[#f5f5f5]">
          <div className="text-center">
            <h3 className="text-xl font-bold text-black [font-family:'Roboto',Helvetica] mb-4">
              Interesse an unseren Leistungen?
            </h3>
            <p className="text-gray-700 [font-family:'Roboto',Helvetica] text-sm sm:text-base mb-6">
              Kontaktieren Sie uns für ein unverbindliches Angebot.
            </p>
            <Link
              to="/kontakt"
              className="inline-block bg-[#e53935] text-white px-8 py-3 rounded-lg [font-family:'Roboto',Helvetica] font-semibold hover:bg-[#c62828] transition-colors"
            >
              KONTAKT AUFNEHMEN
            </Link>
          </div>
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