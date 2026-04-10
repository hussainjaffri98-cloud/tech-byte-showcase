import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
   href="https://wa.me/447787454955"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all duration-300"
  >
    <MessageCircle className="w-7 h-7" />
  </a>
);

export default WhatsAppButton;
