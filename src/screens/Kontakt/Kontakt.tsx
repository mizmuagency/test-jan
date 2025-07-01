import { Menu, X, FacebookIcon, InstagramIcon, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Kontakt = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    vorname: '',
    nachname: '',
    email: '',
    nachricht: ''
  });

  // Main navigation items
  const mainNavItems = [
    { name: "REFERENZEN", path: "/referenzen" },
    { name: "LEISTUNGEN", path: "/leistungen" },
    { name: "UNTERNEHMEN", path: "/unternehmen" },
    { name: "KONTAKT", path: "/kontakt" }
  ];

  const services = [
    "Trockenbau",
    "Stukko", 
    "Gipserarbeit",
    "Andere"
  ];

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', { ...formData, services: selectedServices });
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

        {/* Hero Section with Contact Icons */}
        <div className="relative h-[350px] sm:h-[400px] overflow-hidden">
          {/* Background Image */}
          <img
            src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Contact us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          
          {/* Contact Icons Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex space-x-8 sm:space-x-12">
              {/* Email Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              
              {/* Phone Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              
              {/* At Symbol Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-white text-2xl sm:text-3xl font-bold">@</span>
              </div>
            </div>
          </div>
        </div>

        {/* Title and Description Section */}
        <div className="px-6 py-8 bg-white">
          <h1 className="text-3xl sm:text-4xl font-bold text-black [font-family:'Roboto',Helvetica] mb-6">
            KONTAKT
          </h1>
          
          <p className="text-gray-700 [font-family:'Roboto',Helvetica] text-sm sm:text-base leading-relaxed mb-8">
            Rufen Sie an oder senden Sie ein Online-Formular, um einen Kostenvoranschlag anzufordern oder allgemeine Fragen zu vom Unternehmen zertifizierten Auftragnehmern und unseren Dienstleistungen zu stellen. Wir freuen uns auf Sie!
          </p>
        </div>

        {/* Contact Information Section - Dark Background */}
        <div className="bg-[#3a3a3a] px-6 py-8 mx-6 rounded-lg mb-8">
          {/* Phone Numbers */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-[#e53935] flex-shrink-0" />
              <div className="text-white [font-family:'Roboto',Helvetica] font-normal text-sm sm:text-base">
                +41 (0) 76 220 465 3
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-[#e53935] flex-shrink-0" />
              <div className="text-white [font-family:'Roboto',Helvetica] font-normal text-sm sm:text-base">
                +41 (0) 76 650 75 60 (Büro)
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 mb-6">
            <Mail className="w-5 h-5 text-[#e53935] flex-shrink-0" />
            <div className="text-white [font-family:'Roboto',Helvetica] font-normal text-sm sm:text-base">
              info@jan-bau.ch
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4">
            <MapPin className="w-5 h-5 text-[#e53935] flex-shrink-0 mt-0.5" />
            <div className="text-white [font-family:'Roboto',Helvetica] font-normal text-sm sm:text-base">
              <div className="font-semibold mb-1">J.A.N. BAU GmbH</div>
              <div>Tödistrasse 2</div>
              <div>8854 Siebnen, Schweiz</div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="px-6 pb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Service Interest Section */}
            <div>
              <h3 className="text-[#e53935] [font-family:'Roboto',Helvetica] font-bold text-lg mb-4">
                Ich interessiere mich für:
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {services.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => toggleService(service)}
                    className={`px-4 py-3 rounded-full text-sm font-medium transition-colors ${
                      selectedServices.includes(service)
                        ? 'bg-[#3a3a3a] text-white'
                        : 'bg-[#3a3a3a] text-white hover:bg-[#4a4a4a]'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              {/* Vorname */}
              <div>
                <label className="block text-black [font-family:'Roboto',Helvetica] text-sm mb-2">
                  Vorname*
                </label>
                <input
                  type="text"
                  name="vorname"
                  value={formData.vorname}
                  onChange={handleInputChange}
                  required
                  className="w-full border-b-2 border-gray-300 bg-transparent pb-2 text-black focus:border-[#e53935] focus:outline-none transition-colors"
                />
              </div>

              {/* Nachname */}
              <div>
                <label className="block text-black [font-family:'Roboto',Helvetica] text-sm mb-2">
                  Nachname*
                </label>
                <input
                  type="text"
                  name="nachname"
                  value={formData.nachname}
                  onChange={handleInputChange}
                  required
                  className="w-full border-b-2 border-gray-300 bg-transparent pb-2 text-black focus:border-[#e53935] focus:outline-none transition-colors"
                />
              </div>

              {/* E-Mail */}
              <div>
                <label className="block text-black [font-family:'Roboto',Helvetica] text-sm mb-2">
                  E-Mail*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full border-b-2 border-gray-300 bg-transparent pb-2 text-black focus:border-[#e53935] focus:outline-none transition-colors"
                />
              </div>

              {/* Nachricht */}
              <div>
                <label className="block text-black [font-family:'Roboto',Helvetica] text-sm mb-2">
                  Nachricht
                </label>
                <textarea
                  name="nachricht"
                  value={formData.nachricht}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full border-2 border-gray-300 rounded-lg p-3 text-black focus:border-[#e53935] focus:outline-none transition-colors resize-none"
                  placeholder=""
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#e53935] text-white py-4 rounded-lg [font-family:'Roboto',Helvetica] font-bold text-lg hover:bg-[#c62828] transition-colors"
            >
              ABSENDEN
            </button>
          </form>
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