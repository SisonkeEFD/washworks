import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import logoWhite from "@/assets/TWWL-06.png";

const Footer = () => (
  <footer className="bg-navy-deep pt-16 pb-8 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10">
        {/* Brand */}
        <div>
          <img src={logoWhite} alt="The Wash Works" className="w-[160px] mb-4" />
          <p className="font-display italic text-white text-base tracking-[0.5px]">"The future of laundry is effortless."</p>
          <p className="font-body text-[0.82rem] text-white/40 mt-3 leading-relaxed">
            Professional laundromat in Centurion offering wash & fold, ironing, sneaker cleaning, carpet cleaning, and convenient collection & delivery.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-body font-bold text-[0.75rem] tracking-[2px] uppercase text-white/60 mb-[18px]">SERVICES</h4>
          {["Laundry Wash & Dry", "Wash, Dry & Ironing", "Sneaker Cleaning", "Carpet Cleaning", "Corporate Laundry", "Monthly Packages"].map((s) => (
            <button key={s} onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })} className="block font-body text-[0.83rem] text-white/40 hover:text-blue-light mb-[10px] transition-colors">
              {s}
            </button>
          ))}
        </div>

        {/* Areas */}
        <div>
          <h4 className="font-body font-bold text-[0.75rem] tracking-[2px] uppercase text-white/60 mb-[18px]">AREAS SERVED</h4>
          {["Centurion", "Wierdapark", "Eldoraigne", "Rooihuiskraal", "Highveld", "Midstream"].map((a) => (
            <p key={a} className="font-body text-[0.83rem] text-white/40 mb-[10px]">{a}</p>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-body font-bold text-[0.75rem] tracking-[2px] uppercase text-white/60 mb-[18px]">CONTACT</h4>
          <a href="tel:+27796388572" className="flex items-center gap-2.5 font-body text-[0.83rem] text-white/40 hover:text-blue-light mb-[10px] transition-colors">
            <Phone size={16} className="text-blue-light" /> 079 638 8572
          </a>
          <a href="mailto:info@thewashworks.co.za" className="flex items-center gap-2.5 font-body text-[0.83rem] text-white/40 hover:text-blue-light mb-[10px] transition-colors">
            <Mail size={16} className="text-blue-light" /> info@thewashworks.co.za
          </a>
          <a href="https://wa.me/27796388572" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 font-body text-[0.83rem] text-white/40 hover:text-blue-light mb-[10px] transition-colors">
            <MessageCircle size={16} className="text-blue-light" /> WhatsApp Us
          </a>
          <p className="flex items-center gap-2.5 font-body text-[0.83rem] text-white/40 mb-[10px]">
            <MapPin size={16} className="text-blue-light flex-shrink-0" /> 113 1st Ave, Gerhardsville, Centurion, 0046
          </p>
          <p className="font-body text-[0.83rem] text-white/40 pl-[26px]">Mon–Fri: 8am–6pm | Sat: 9am–2pm | Sun: Closed</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="font-body text-[0.77rem] text-white/30">
          © 2025 The Wash Works Laundromat & Sneaker Care · Centurion, Gauteng · All rights reserved.
        </p>
        <p className="font-body text-[0.77rem] text-blue-light font-semibold">
          Mon–Fri: 8am–6pm | Sat: 9am–2pm
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;