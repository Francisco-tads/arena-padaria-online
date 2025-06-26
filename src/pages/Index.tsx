
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, Star, ChefHat, Heart, Award, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  const highlights = [
    {
      title: 'Pães Artesanais',
      description: 'Feitos diariamente com ingredientes selecionados',
      icon: ChefHat,
      discount: '15% OFF'
    },
    {
      title: 'Tortas Especiais',
      description: 'Doces e salgadas para todas as ocasiões',
      icon: Heart,
      discount: '10% OFF'
    },
    {
      title: 'Produtos Frescos',
      description: 'Qualidade garantida todos os dias',
      icon: Award,
      discount: 'Promoção'
    }
  ];

  const handleButtonClick = (buttonName: string) => {
    console.log(`${buttonName} button clicked`);
  };

  return (
    <div className="min-h-screen bg-bakery-dark text-bakery-gold-light font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-bakery-gold rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-bakery-gold rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-bakery-gold/20 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge className="bg-bakery-gold text-bakery-dark font-semibold px-4 py-2">
                Desconto 15%
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-playfair font-bold text-bakery-gold leading-tight">
                Panificadora<br />Arena
              </h1>
              <p className="text-lg text-bakery-gold-light/80 max-w-md">
                Tradição e sabor em cada produto. Desfrute dos melhores pães artesanais, 
                tortas e delícias da nossa panificadora.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-bakery-gold-light">
                <Clock className="w-5 h-5 text-bakery-gold" />
                <div className="text-sm">
                  <div className="font-semibold">Horário de Funcionamento:</div>
                  <div>Segunda a Sábado: 06h às 19h</div>
                  <div>Domingos: 06h às 12h</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-bakery-gold-light">
                <MapPin className="w-5 h-5 text-bakery-gold" />
                <span className="text-sm">Rua Tommasso Giodanni</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-bakery-gold text-bakery-dark hover:bg-bakery-gold/90 font-semibold px-8 py-3 text-lg w-full sm:w-auto"
                asChild
                onClick={() => handleButtonClick('Ver Cardápio')}
              >
                <Link to="/produtos">Ver Cardápio</Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-bakery-gold text-bakery-gold hover:bg-bakery-gold hover:text-bakery-dark px-8 py-3 text-lg w-full sm:w-auto"
                asChild
                onClick={() => handleButtonClick('Fazer Pedido')}
              >
                <Link to="/produtos">Fazer Pedido</Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Featured Image */}
          <div className="relative animate-scale-in">
            <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-bakery-gold/20 to-transparent">
              <div className="absolute inset-0 bg-gradient-to-t from-bakery-dark/50 to-transparent"></div>
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Pães artesanais frescos"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-bakery-gold font-playfair text-2xl font-bold mb-2">
                  Pães Frescos Diariamente
                </h3>
                <p className="text-bakery-gold-light text-sm">
                  Feitos com amor e ingredientes selecionados
                </p>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-bakery-orange rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-white font-bold text-sm">Novo!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="destaques" className="py-20 bg-bakery-brown/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-bakery-gold mb-4">
              Nossos Destaques
            </h2>
            <p className="text-bakery-gold-light/80 max-w-2xl mx-auto">
              Descubra os produtos mais queridos pelos nossos clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <Card key={index} className="bg-bakery-dark/50 border-bakery-gold/20 hover:border-bakery-gold/40 transition-colors group">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-bakery-gold/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-bakery-gold/30 transition-colors">
                      <item.icon className="w-8 h-8 text-bakery-gold" />
                    </div>
                    <Badge className="absolute -top-2 -right-2 bg-bakery-orange text-white">
                      {item.discount}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-bakery-gold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-bakery-gold-light/80 text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-playfair font-bold text-bakery-gold">
                Nossa História
              </h2>
              <div className="space-y-4 text-bakery-gold-light/80 text-lg leading-relaxed">
                <p>
                  A Panificadora Arena nasceu em 2009 de um sonho familiar: levar aos nossos clientes 
                  o sabor autêntico dos pães artesanais, feitos com amor e tradição italiana.
                </p>
                <p>
                  Localizada na Rua Tommasso Giodanni, nossa padaria se tornou referência na região 
                  por manter a qualidade e frescor em todos os nossos produtos. Cada pão é cuidadosamente 
                  preparado com ingredientes selecionados e técnicas tradicionais passadas de geração em geração.
                </p>
                <p>
                  Ao longo de mais de 15 anos, conquistamos a confiança de milhares de famílias, 
                  oferecendo não apenas produtos de excelência, mas também um atendimento caloroso 
                  que faz parte da nossa essência.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-bakery-gold">15+</div>
                  <div className="text-sm text-bakery-gold-light/80">Anos de tradição</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-bakery-gold">50+</div>
                  <div className="text-sm text-bakery-gold-light/80">Produtos frescos</div>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
                <span className="text-bakery-gold-light/80 ml-2">4.9/5 - Avaliação dos clientes</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Interior da panificadora"
                className="w-full h-96 object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-bakery-brown/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-bakery-gold mb-4">
              Entre em Contato
            </h2>
            <p className="text-bakery-gold-light/80 max-w-2xl mx-auto">
              Estamos sempre prontos para atendê-lo. Visite nossa loja ou entre em contato conosco
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-bakery-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-bakery-gold font-semibold text-lg mb-2">Endereço</h3>
                    <p className="text-bakery-gold-light/80">
                      Rua Tommasso Giodanni<br />
                      São Paulo, SP
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-bakery-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-bakery-gold font-semibold text-lg mb-2">Telefone</h3>
                    <p className="text-bakery-gold-light/80">
                      <a href="tel:5511991298838" className="hover:text-bakery-gold transition-colors">
                        (11) 99129-8838
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-bakery-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-bakery-gold font-semibold text-lg mb-2">Horário de Funcionamento</h3>
                    <div className="text-bakery-gold-light/80 space-y-1">
                      <p>Segunda a Sábado: 06h às 19h</p>
                      <p>Domingos: 06h às 12h</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-bakery-gold/20">
                <Button 
                  className="bg-bakery-gold text-bakery-dark hover:bg-bakery-gold/90 font-semibold px-8 py-3"
                  asChild
                >
                  <a href="https://wa.me/5511991298838" target="_blank" rel="noopener noreferrer">
                    Chamar no WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Map */}
            <div className="h-96 rounded-3xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1!2d-46.6333!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjgiUyA0NsKwMzcnNTkuOSJX!5e0!3m2!1spt!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
