import { useState } from "react";
import { MessageCircle, Phone } from "lucide-react";

const FloatingButtons = () => {
  const [tooltip, setTooltip] = useState(false);

  return (
    <>
      {/* WhatsApp — bottom right */}
      <div className="fixed bottom-7 right-7 z-[1000]">
        <a
          href="https://wa.me/27796388572"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setTooltip(true)}
          onMouseLeave={() => setTooltip(false)}
          className="w-[60px] h-[60px] bg-green-wa rounded-full flex items-center justify-center shadow-[0_6px_24px_rgba(37,211,102,0.45)] hover:scale-110 transition-transform"
        >
          <MessageCircle size={28} className="text-white" />
        </a>
        {tooltip && (
          <div className="absolute right-[72px] top-1/2 -translate-y-1/2 bg-white text-navy-dark font-body font-semibold text-[0.78rem] px-3 py-2 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.1)] whitespace-nowrap">
            Chat on WhatsApp
          </div>
        )}
      </div>

      {/* Call button — mobile only */}
      <a
        href="tel:+27796388572"
        className="fixed bottom-7 left-7 z-[1000] md:hidden inline-flex items-center gap-2 bg-blue-primary text-white font-body font-bold text-[0.85rem] px-5 py-3 rounded-full shadow-[0_4px_16px_rgba(26,58,143,0.4)]"
      >
        <Phone size={16} /> Call Us
      </a>
    </>
  );
};

export default FloatingButtons;