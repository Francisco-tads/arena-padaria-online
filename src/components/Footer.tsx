
import { MapPin, Clock, Phone, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bakery-dark text-bakery-gold-light">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-bakery-gold rounded-full flex items-center justify-center">
                <span className="text-bakery-dark font-bold text-lg">🍞</span>
              </div>
              <span className="text-bakery-gold font-playfair font-bold text-xl">
                Panificadora Arena
              </span>
            </div>
            <p className="text-sm text-bakery-gold-light/80">
              Os melhores pães artesanais, tortas e produtos de panificação da região. 
              Tradição e qualidade em cada produto.
            </p>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-4">
            <h3 className="text-bakery-gold font-semibold text-lg">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-bakery-gold" />
                <span className="text-sm">Rua Tommasso Giodanni</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-bakery-gold" />
                <span className="text-sm">(11) 99129-8838</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-bakery-gold" />
                <div className="text-sm">
                  <div>Seg-Sáb: 06h às 19h</div>
                  <div>Dom: 06h às 12h</div>
                </div>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="space-y-4">
            <h3 className="text-bakery-gold font-semibold text-lg">Siga-nos</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-pink-500 hover:scale-110 transition-transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-blue-500 hover:scale-110 transition-transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/5511991298838"
                className="text-green-500 hover:scale-110 transition-transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
            <div className="pt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1!2d-46.6333!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjgiUyA0NsKwMzcnNTkuOSJX!5e0!3m2!1spt!2sbr!4v1234567890"
                width="250"
                height="150"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-bakery-gold/20 mt-8 pt-8 text-center">
          <p className="text-sm text-bakery-gold-light/60">
            © 2024 Panificadora Arena. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
