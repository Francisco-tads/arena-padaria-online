
import { useState, useEffect } from 'react';
import { Menu, X, Search, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Produtos', href: '/produtos' },
    { name: 'Sobre', href: '/#sobre' },
    { name: 'Contato', href: '/#contato' },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', color: 'text-pink-500' },
    { icon: Facebook, href: '#', color: 'text-blue-500' },
    { icon: MessageCircle, href: 'https://wa.me/5511991298838', color: 'text-green-500' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    
    if (href.startsWith('/#')) {
      const elementId = href.substring(2);
      if (location.pathname !== '/') {
        window.location.href = href;
      } else {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header className="fixed top-0 w-full bg-bakery-dark/95 backdrop-blur-sm z-50 border-b border-bakery-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
            <div className="w-10 h-10 bg-bakery-gold rounded-full flex items-center justify-center">
              <span className="text-bakery-dark font-bold text-lg">🍞</span>
            </div>
            <span className="text-bakery-gold font-playfair font-bold text-xl hidden sm:block">
              Panificadora Arena
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.href.startsWith('/#') ? (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-bakery-gold-light hover:text-bakery-gold transition-colors duration-200 font-medium cursor-pointer"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-bakery-gold-light hover:text-bakery-gold transition-colors duration-200 font-medium ${
                    location.pathname === item.href ? 'text-bakery-gold' : ''
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* Search and Social Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <Search className="w-5 h-5 text-bakery-gold-light cursor-pointer hover:text-bakery-gold transition-colors" />
            </div>
            <div className="flex items-center space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} hover:scale-110 transition-transform`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-bakery-gold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-bakery-dark border-b border-bakery-gold/20 animate-fade-in">
            <nav className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                item.href.startsWith('/#') ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="block text-bakery-gold-light hover:text-bakery-gold transition-colors duration-200 font-medium py-2 text-left w-full"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-bakery-gold-light hover:text-bakery-gold transition-colors duration-200 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-bakery-gold/20">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} hover:scale-110 transition-transform`}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
