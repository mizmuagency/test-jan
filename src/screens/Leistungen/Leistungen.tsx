import { Menu, X, FacebookIcon, InstagramIcon, MapPin, Phone, Mail } from "lucide-react";
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
                  className={`[font-family:'Roboto',Helvetica] font-medium text-sm hover:text-[#e53935] transition-colors ${
                    item.name === "LEISTUNGEN" ? "text-[#e53935]" : "text-black"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        {/* Desktop Main Content */}
        <main className="bg-white">
          {/* Hero Section with Large Construction Image */}
          <div className="relative h-[500px] overflow-hidden">
            <img
              src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Construction services"
              className="w-full h-full object-cover filter grayscale"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>

          {/* Content Section */}
          <div className="max-w-7xl mx-auto px-8 py-16">
            {/* Title Section */}
            <div className="mb-16">
              <h1 className="text-6xl font-bold text-black [font-family:'Roboto',Helvetica] tracking-wide mb-12">
                LEISTUNGEN
              </h1>
              
              {/* Services Description */}
              <div className="max-w-4xl">
                <p className="text-black [font-family:'Roboto',Helvetica] text-lg leading-relaxed">
                  Unser Leistungsspektrum umfasst sämtliche Arbeiten im klassischen und modernen Trockenbau, 
                  darunter die Herstellung von nichttragenden Innenwänden, abgehängten 
                  Decken, Vorsatzschalen und Raum-in-Raum-Systemen. Wir realisieren individuelle 
                  Ausbaukonzepte für Wohn-, Gewerbe- und Industriebauten – termingerecht, wirtschaftlich und 
                  mit höchstem Qualitätsanspruch.
                </p>
              </div>
            </div>

            {/* Raumakustik Section - Matching the screenshot */}
            <div className="mb-16">
              <div className="bg-[#3a3a3a] rounded-lg overflow-hidden">
                <div className="flex">
                  {/* Left side - Image */}
                  <div className="w-1/2">
                    <img
                      src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Raumakustik - Acoustic panels construction"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Right side - Content */}
                  <div className="w-1/2 p-12 flex flex-col justify-center">
                    <h2 className="text-4xl font-bold text-white [font-family:'Roboto',Helvetica] mb-8 tracking-wide">
                      RAUMAKUSTIK
                    </h2>
                    <p className="text-white [font-family:'Roboto',Helvetica] text-base leading-relaxed">
                      Ein besonderer Schwerpunkt unserer Tätigkeit liegt in der innovativen Raumakustik, 
                      insbesondere in der Ausführung von fugenlosen Akustikdecken-Systemen. Diese bieten 
                      nicht nur eine exzellente Schallabsorption, sondern ermöglichen durch ihre homogene 
                      Oberfläche auch ein hochwertiges architektonisches Erscheinungsbild. Hierbei arbeiten 
                      wir mit geprüften Systemlösungen namhafter Hersteller und setzen auch komplexe 
                      Sonderlösungen um.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Gipserarbeiten Section - Reversed layout (content left, image right) */}
            <div className="mb-16">
              <div className="bg-[#3a3a3a] rounded-lg overflow-hidden">
                <div className="flex">
                  {/* Left side - Content */}
                  <div className="w-1/2 p-12 flex flex-col justify-center">
                    <h2 className="text-4xl font-bold text-white [font-family:'Roboto',Helvetica] mb-8 tracking-wide">
                      GIPSERARBEITEN
                    </h2>
                    <p className="text-white [font-family:'Roboto',Helvetica] text-base leading-relaxed">
                      Gipserarbeiten aus – von klassischen Putztechniken bis hin zu modernen 
                      Struktur- und Glättputzen im Innenbereich. Unsere Expertise erstreckt sich über 
                      Kalk-, Zement-, Gips- und Lehmputze, angepasst an die technischen Anforderungen 
                      und gestalterischen Wünsche unserer Kunden.
                    </p>
                  </div>
                  
                  {/* Right side - Image */}
                  <div className="w-1/2">
                    <img
                      src="https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Gipserarbeiten - Plastering work"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Trockenbau Section - Same layout as Raumakustik (image left, content right) */}
            <div className="mb-16">
              <div className="bg-[#3a3a3a] rounded-lg overflow-hidden">
                <div className="flex">
                  {/* Left side - Image */}
                  <div className="w-1/2">
                    <img
                      src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Trockenbau - Drywall construction"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Right side - Content */}
                  <div className="w-1/2 p-12 flex flex-col justify-center">
                    <h2 className="text-4xl font-bold text-white [font-family:'Roboto',Helvetica] mb-8 tracking-wide">
                      TROCKENBAU
                    </h2>
                    <p className="text-white [font-family:'Roboto',Helvetica] text-base leading-relaxed">
                      Unser Leistungsspektrum umfasst sämtliche Arbeiten im klassischen und 
                      modernen Trockenbau, darunter die Herstellung von nichttragenden 
                      Innenwänden, abgehängten Decken, Vorsatzschalen und Raum-in-
                      Raum-Systemen. Wir realisieren individuelle Ausbaukonzepte für Wohn-, Gewerbe- und 
                      Industriebauten – termingerecht, wirtschaftlich und mit höchstem 
                      Qualitätsanspruch.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pre-footer Section - No background box, larger title */}
            <div className="py-20">
              <div className="max-w-2xl">
                <h2 className="text-6xl font-bold text-black [font-family:'Roboto',Helvetica] mb-2">
                  Wir wissen, was
                </h2>
                <h2 className="text-6xl font-bold [font-family:'Roboto',Helvetica] mb-2">
                  <span className="text-[#e53935]">Ihre Bedürfnisse</span>
                </h2>
                <h2 className="text-6xl font-bold text-black [font-family:'Roboto',Helvetica] mb-8">
                  sind!
                </h2>
                
                <p className="text-black [font-family:'Roboto',Helvetica] text-base mb-2">
                  Wir lieben und leben Gips. Mit viel Know-
                </p>
                <p className="text-black [font-family:'Roboto',Helvetica] text-base mb-2">
                  how und hohem Engagement setzen wir
                </p>
                <p className="text-black [font-family:'Roboto',Helvetica] text-base mb-2">
                  die Wünsche unserer Kunden präzise und
                </p>
                <p className="text-black [font-family:'Roboto',Helvetica] text-base mb-8">
                  vor allem pünktlich um.
                </p>
                
                <Link
                  to="/unternehmen"
                  className="inline-block bg-[#e53935] text-white px-8 py-3 rounded-lg [font-family:'Roboto',Helvetica] font-bold text-sm hover:bg-[#c62828] transition-colors"
                >
                  ZUM UNTERNEHMEN
                </Link>
              </div>
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

      {/* Mobile Layout - Keep existing mobile design unchanged */}
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

        {/* Mobile Raumakustik Section - Stacked layout for mobile */}
        <div className="px-6 mb-8">
          <div className="bg-[#3a3a3a] rounded-lg overflow-hidden">
            {/* Image */}
            <div className="w-full h-[200px]">
              <img
                src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Raumakustik - Acoustic panels construction"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white [font-family:'Roboto',Helvetica] mb-4 tracking-wide">
                RAUMAKUSTIK
              </h2>
              <p className="text-white [font-family:'Roboto',Helvetica] text-sm leading-relaxed">
                Ein besonderer Schwerpunkt unserer Tätigkeit liegt in der innovativen Raumakustik, 
                insbesondere in der Ausführung von fugenlosen Akustikdecken-Systemen. Diese bieten 
                nicht nur eine exzellente Schallabsorption, sondern ermöglichen durch ihre homogene 
                Oberfläche auch ein hochwertiges architektonisches Erscheinungsbild.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Gipserarbeiten Section - Stacked layout for mobile */}
        <div className="px-6 mb-8">
          <div className="bg-[#3a3a3a] rounded-lg overflow-hidden">
            {/* Image */}
            <div className="w-full h-[200px]">
              <img
                src="https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Gipserarbeiten - Plastering work"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white [font-family:'Roboto',Helvetica] mb-4 tracking-wide">
                GIPSERARBEITEN
              </h2>
              <p className="text-white [font-family:'Roboto',Helvetica] text-sm leading-relaxed">
                Gipserarbeiten aus – von klassischen Putztechniken bis hin zu modernen 
                Struktur- und Glättputzen im Innenbereich. Unsere Expertise erstreckt sich über 
                Kalk-, Zement-, Gips- und Lehmputze, angepasst an die technischen Anforderungen 
                und gestalterischen Wünsche unserer Kunden.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Trockenbau Section - Stacked layout for mobile */}
        <div className="px-6 mb-8">
          <div className="bg-[#3a3a3a] rounded-lg overflow-hidden">
            {/* Image */}
            <div className="w-full h-[200px]">
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Trockenbau - Drywall construction"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white [font-family:'Roboto',Helvetica] mb-4 tracking-wide">
                TROCKENBAU
              </h2>
              <p className="text-white [font-family:'Roboto',Helvetica] text-sm leading-relaxed">
                Unser Leistungsspektrum umfasst sämtliche Arbeiten im klassischen und 
                modernen Trockenbau, darunter die Herstellung von nichttragenden 
                Innenwänden, abgehängten Decken, Vorsatzschalen und Raum-in-
                Raum-Systemen. Wir realisieren individuelle Ausbaukonzepte für Wohn-, Gewerbe- und 
                Industriebauten – termingerecht, wirtschaftlich und mit höchstem 
                Qualitätsanspruch.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Pre-footer Section - No background box, larger title */}
        <div className="w-full px-6 py-12">
          <div className="max-w-sm">
            <h2 className="text-3xl font-bold text-black [font-family:'Roboto',Helvetica] mb-2">
              Wir wissen, was
            </h2>
            <h2 className="text-3xl font-bold [font-family:'Roboto',Helvetica] mb-2">
              <span className="text-[#e53935]">Ihre Bedürfnisse</span>
            </h2>
            <h2 className="text-3xl font-bold text-black [font-family:'Roboto',Helvetica] mb-6">
              sind!
            </h2>
            
            <p className="text-black [font-family:'Roboto',Helvetica] text-sm mb-1">
              Wir lieben und leben Gips. Mit viel Know-
            </p>
            <p className="text-black [font-family:'Roboto',Helvetica] text-sm mb-1">
              how und hohem Engagement setzen wir
            </p>
            <p className="text-black [font-family:'Roboto',Helvetica] text-sm mb-1">
              die Wünsche unserer Kunden präzise und
            </p>
            <p className="text-black [font-family:'Roboto',Helvetica] text-sm mb-6">
              vor allem pünktlich um.
            </p>
            
            <Link
              to="/unternehmen"
              className="inline-block bg-[#e53935] text-white px-6 py-3 rounded-lg [font-family:'Roboto',Helvetica] font-bold text-sm hover:bg-[#c62828] transition-colors"
            >
              ZUM UNTERNEHMEN
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