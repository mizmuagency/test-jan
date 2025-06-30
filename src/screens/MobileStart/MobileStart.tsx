import { FacebookIcon, InstagramIcon, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const MobileStart = (): JSX.Element => {
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
        {/* Main logo with safe area padding */}
        <div className="w-full h-[380px] pt-safe">
          <img
            className="w-full h-full object-cover object-center"
            alt="J.A.N. BAU GmbH Logo"
            src="https://pub-45b3416510f04b53aa169f591957c686.r2.dev/janbau%20weissneu.png"
          />
        </div>

        {/* Navigation section with red cards */}
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

        {/* Call to action section */}
        <Card className="w-[323px] mx-auto mb-16 mt-16 border-none shadow-none">
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

        {/* Footer section */}
        <div className="w-full bg-[#262a28] px-[49px] py-16">
          {/* Company logo and name with headline */}
          <div className="flex items-center mb-8">
            <img
              className="w-24 h-[88px] object-cover mr-4"
              alt="Jan bau"
              src="/jan-bau-1.png"
            />
            <div className="flex flex-col">
              <div className="[font-family:'Roboto',Helvetica] font-bold text-white text-[23px] tracking-[0] leading-[28px] mb-2">
                J.A.N. BAU GmbH
              </div>
              <div className="[font-family:'Roboto',Helvetica] font-bold text-white text-[18px] tracking-[0] leading-[22px]">
                Wir stehen für höchste Qualität und saubere Arbeit.
              </div>
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