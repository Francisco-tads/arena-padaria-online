import { useState, useEffect } from 'react';
import { Search, Filter, Plus, Star, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cart from '@/components/Cart';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import { useSearchParams } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Products = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addItem } = useCart();
  const { toast } = useToast();

  // Initialize search term from URL parameter
  useEffect(() => {
    const urlSearchTerm = searchParams.get('search');
    if (urlSearchTerm) {
      setSearchTerm(urlSearchTerm);
    }
  }, [searchParams]);

  const categories = [
    { id: 'todos', name: 'Todos os Produtos' },
    { id: 'paes-italianos', name: 'Pães Italianos' },
    { id: 'paes-recheados', name: 'Pães Recheados' },
    { id: 'paes-frances', name: 'Pães Francês' },
    { id: 'tortas-doces', name: 'Tortas Doces' },
    { id: 'tortas-salgadas', name: 'Tortas Salgadas' },
    { id: 'massas', name: 'Massas' },
    { id: 'refrigerantes', name: 'Refrigerantes' },
    { id: 'bolos', name: 'Bolos' },
    { id: 'salgados', name: 'Salgados' },
    { id: 'cafes', name: 'Cafés' },
  ];

  const products = [
    {
      id: '1',
      name: 'Pão Italiano Tradicional',
      price: 8.50,
      category: 'paes-italianos',
      description: 'Pão artesanal com fermentação natural, crocante por fora e macio por dentro. Ingredientes selecionados para um sabor único.',
      images: [
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      discount: 15,
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: '2',
      name: 'Pão Recheado de Queijo',
      price: 12.00,
      category: 'paes-recheados',
      description: 'Delicioso pão recheado com queijo mussarela derretido. Perfeito para um lanche saboroso.',
      images: [
        'https://images.unsplash.com/photo-1596188805550-5ac9b3a1a1fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      discount: 10
    },
    {
      id: '3',
      name: 'Pão Francês Artesanal',
      price: 0.75,
      category: 'paes-frances',
      description: 'O clássico pão francês feito artesanalmente. Crocante e fresquinho todos os dias.',
      images: [
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.7,
      discount: 0
    },
    {
      id: '4',
      name: 'Torta de Chocolate Belga',
      price: 45.00,
      category: 'tortas-doces',
      description: 'Torta premium com chocolate belga 70% cacau. Uma experiência única de sabor.',
      images: [
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 5.0,
      discount: 20
    },
    {
      id: '5',
      name: 'Torta de Frango com Catupiry',
      price: 35.00,
      category: 'tortas-salgadas',
      description: 'Torta salgada com frango desfiado e catupiry cremoso. Ideal para almoços e jantares.',
      images: [
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.6,
      discount: 15
    },
    {
      id: '6',
      name: 'Massa de Lasanha Fresca',
      price: 18.00,
      category: 'massas',
      description: 'Massa fresca para lasanha, feita diariamente. Textura perfeita para suas receitas.',
      images: [
        'https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.5,
      discount: 0
    },
    {
      id: '7',
      name: 'Coca-Cola 350ml',
      price: 4.50,
      category: 'refrigerantes',
      description: 'Refrigerante Coca-Cola gelado, perfeito para acompanhar nossos produtos.',
      images: [
        'https://images.unsplash.com/photo-1624552161102-c4aae37b2308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.3,
      discount: 0
    },
    {
      id: '8',
      name: 'Pão de Açúcar Italiano',
      price: 15.00,
      category: 'paes-italianos',
      description: 'Pão doce italiano tradicional, perfeito para o café da manhã ou lanche da tarde.',
      images: [
        'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      discount: 10
    },
    {
      id: '9',
      name: 'Pão Italiano com Azeitona',
      price: 12.00,
      category: 'paes-italianos',
      description: 'Pão italiano artesanal com azeitonas pretas, sabor marcante e textura única.',
      images: [
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.6,
      discount: 5
    },
    {
      id: '10',
      name: 'Pão Recheado de Presunto e Queijo',
      price: 14.50,
      category: 'paes-recheados',
      description: 'Pão macio recheado com presunto e queijo derretido. Ideal para um lanche completo.',
      images: [
        'https://images.unsplash.com/photo-1596188805550-5ac9b3a1a1fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.7,
      discount: 8
    },
    {
      id: '11',
      name: 'Pão Recheado de Frango com Catupiry',
      price: 16.00,
      category: 'paes-recheados',
      description: 'Pão recheado com frango desfiado e catupiry cremoso. Uma explosão de sabor.',
      images: [
        'https://images.unsplash.com/photo-1596188805550-5ac9b3a1a1fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      discount: 12
    },
    {
      id: '12',
      name: 'Pão Francês Integral',
      price: 1.00,
      category: 'paes-frances',
      description: 'Versão integral do clássico pão francês, mais nutritivo e saboroso.',
      images: [
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.4,
      discount: 0
    },
    {
      id: '13',
      name: 'Pão Francês com Gergelim',
      price: 0.85,
      category: 'paes-frances',
      description: 'Pão francês tradicional coberto com gergelim torrado. Sabor especial.',
      images: [
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.5,
      discount: 0
    },
    {
      id: '14',
      name: 'Torta de Morango',
      price: 38.00,
      category: 'tortas-doces',
      description: 'Torta doce com morangos frescos e chantilly. Perfeita para sobremesa.',
      images: [
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      discount: 15
    },
    {
      id: '15',
      name: 'Torta de Limão',
      price: 32.00,
      category: 'tortas-doces',
      description: 'Torta refrescante de limão com merengue. Sabor cítrico irresistível.',
      images: [
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.7,
      discount: 10
    },
    {
      id: '16',
      name: 'Torta de Carne Seca',
      price: 42.00,
      category: 'tortas-salgadas',
      description: 'Torta salgada com carne seca desfiada e temperos especiais. Sabor único.',
      images: [
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      discount: 18
    },
    {
      id: '17',
      name: 'Torta de Palmito',
      price: 36.00,
      category: 'tortas-salgadas',
      description: 'Torta salgada com palmito e queijo. Opção vegetariana deliciosa.',
      images: [
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.5,
      discount: 12
    },
    {
      id: '18',
      name: 'Massa de Nhoque Fresca',
      price: 16.00,
      category: 'massas',
      description: 'Nhoque caseiro feito com batata selecionada. Textura macia e saborosa.',
      images: [
        'https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.6,
      discount: 0
    },
    {
      id: '19',
      name: 'Massa de Ravioli',
      price: 22.00,
      category: 'massas',
      description: 'Ravioli recheado com ricota e espinafre. Massa artesanal premium.',
      images: [
        'https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      discount: 8
    },
    {
      id: '20',
      name: 'Guaraná Antarctica 350ml',
      price: 4.00,
      category: 'refrigerantes',
      description: 'Refrigerante de guaraná gelado, sabor brasileiro autêntico.',
      images: [
        'https://images.unsplash.com/photo-1624552161102-c4aae37b2308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.2,
      discount: 0
    },
    {
      id: '21',
      name: 'Suco Natural de Laranja 500ml',
      price: 6.50,
      category: 'refrigerantes',
      description: 'Suco natural de laranja espremido na hora. Vitamina C pura.',
      images: [
        'https://images.unsplash.com/photo-1624552161102-c4aae37b2308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      discount: 0
    },
    {
      id: '22',
      name: 'Água Mineral 500ml',
      price: 2.50,
      category: 'refrigerantes',
      description: 'Água mineral gelada, perfeita para acompanhar qualquer refeição.',
      images: [
        'https://images.unsplash.com/photo-1624552161102-c4aae37b2308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.0,
      discount: 0
    },
    {
      id: '23',
      name: 'Bolo de Chocolate',
      price: 25.00,
      category: 'bolos',
      description: 'Bolo de chocolate com cobertura cremosa. Ideal para festas e comemorações.',
      images: [
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.7,
      discount: 12
    },
    {
      id: '24',
      name: 'Bolo de Cenoura',
      price: 22.00,
      category: 'bolos',
      description: 'Bolo de cenoura tradicional com calda de chocolate. Sabor caseiro.',
      images: [
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.6,
      discount: 8
    },
    {
      id: '25',
      name: 'Coxinha de Frango',
      price: 6.50,
      category: 'salgados',
      description: 'Coxinha tradicional com frango desfiado temperado. Crocante e saborosa.',
      images: [
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      discount: 0
    },
    {
      id: '26',
      name: 'Pastel de Carne',
      price: 7.00,
      category: 'salgados',
      description: 'Pastel assado com recheio de carne moída temperada. Massa crocante.',
      images: [
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.5,
      discount: 5
    },
    {
      id: '27',
      name: 'Empada de Palmito',
      price: 8.00,
      category: 'salgados',
      description: 'Empada caseira com recheio cremoso de palmito. Opção vegetariana.',
      images: [
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.4,
      discount: 0
    },
    {
      id: '28',
      name: 'Pão Italiano com Ervas',
      price: 10.00,
      category: 'paes-italianos',
      description: 'Pão italiano aromático com mix de ervas finas. Sabor diferenciado.',
      images: [
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.7,
      discount: 6
    },
    {
      id: '29',
      name: 'Bolo Red Velvet',
      price: 35.00,
      category: 'bolos',
      description: 'Bolo red velvet com cream cheese. Uma experiência única de sabor e textura.',
      images: [
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      discount: 15
    },
    {
      id: '30',
      name: 'Salgadinho de Queijo',
      price: 5.50,
      category: 'salgados',
      description: 'Salgadinho crocante recheado com queijo derretido. Perfeito para o lanche.',
      images: [
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.3,
      discount: 0
    },
    {
      id: '31',
      name: 'Café Expresso Premium',
      price: 5.50,
      category: 'cafes',
      description: 'Café expresso tradicional com grãos selecionados e torrados na hora. Sabor intenso e aroma marcante.',
      images: [
        'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      discount: 0
    },
    {
      id: '32',
      name: 'Cappuccino Artesanal',
      price: 8.00,
      category: 'cafes',
      description: 'Cappuccino cremoso com espuma de leite vaporizado e pitada de canela. Uma experiência única.',
      images: [
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      discount: 10
    },
    {
      id: '33',
      name: 'Café com Leite Especial',
      price: 6.50,
      category: 'cafes',
      description: 'Café com leite cremoso feito com café premium e leite vaporizado. Perfeito para qualquer hora.',
      images: [
        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.7,
      discount: 5
    },
    {
      id: '34',
      name: 'Café Gelado Gourmet',
      price: 7.50,
      category: 'cafes',
      description: 'Café gelado refrescante com gelo, leite e xarope de baunilha. Ideal para dias quentes.',
      images: [
        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.6,
      discount: 8
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.discount > 0 ? product.price * (1 - product.discount / 100) : product.price,
      image: product.images[0],
      category: product.category
    });
    
    toast({
      title: "Produto adicionado!",
      description: `${product.name} foi adicionado ao carrinho.`,
    });
  };

  const calculateDiscountedPrice = (price, discount) => {
    return discount > 0 ? price * (1 - discount / 100) : price;
  };

  return (
    <div className="min-h-screen bg-bakery-dark text-bakery-gold-light font-inter">
      <Header />
      
      <div className="pt-20">
        {/* Header da página */}
        <div className="bg-bakery-brown/50 py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-4xl font-playfair font-bold text-bakery-gold mb-4">
                  Nossos Produtos
                </h1>
                <p className="text-bakery-gold-light/80">
                  Descubra nossa seleção completa de pães, tortas, bolos, salgados, cafés e delícias artesanais
                </p>
                {searchTerm && (
                  <p className="text-bakery-gold mt-2">
                    Resultados para: "{searchTerm}"
                  </p>
                )}
              </div>
              <Cart />
            </div>

            {/* Filtros e Busca */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              <div className="lg:col-span-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-bakery-gold w-5 h-5" />
                  <Input
                    placeholder="Buscar produtos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-bakery-dark/50 border-bakery-gold/30 text-bakery-gold-light"
                  />
                </div>
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-bakery-gold w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-bakery-dark/50 border border-bakery-gold/30 rounded-md text-bakery-gold-light appearance-none cursor-pointer"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id} className="bg-bakery-dark">
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Banner de Promoções */}
        <div className="bg-gradient-to-r from-bakery-orange to-bakery-gold py-4">
          <div className="container mx-auto px-4">
            <div className="text-center text-bakery-dark">
              <p className="font-semibold">
                🎉 PROMOÇÃO ESPECIAL: Descontos de até 20% em produtos selecionados! 🎉
              </p>
            </div>
          </div>
        </div>

        {/* Grid de Produtos */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="bg-bakery-brown/30 border-bakery-gold/20 hover:border-bakery-gold/40 transition-all duration-300 group overflow-hidden">
                <div className="relative">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.discount > 0 && (
                    <Badge className="absolute top-2 left-2 bg-bakery-orange text-white">
                      -{product.discount}%
                    </Badge>
                  )}
                  <div className="absolute top-2 right-2 flex items-center space-x-1 bg-black/50 rounded px-2 py-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-white text-sm">{product.rating}</span>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-playfair font-bold text-bakery-gold mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-bakery-gold-light/80 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      {product.discount > 0 && (
                        <span className="text-bakery-gold-light/60 line-through text-sm">
                          R$ {product.price.toFixed(2)}
                        </span>
                      )}
                      <span className="text-bakery-gold font-bold text-lg">
                        R$ {calculateDiscountedPrice(product.price, product.discount).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button
                      onClick={() => handleAddToCart(product)}
                      className="flex-1 bg-bakery-gold text-bakery-dark hover:bg-bakery-gold/90"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Adicionar
                    </Button>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="border-bakery-gold text-bakery-gold hover:bg-bakery-gold hover:text-bakery-dark"
                          onClick={() => setSelectedProduct(product)}
                        >
                          Ver Mais
                        </Button>
                      </DialogTrigger>
                      
                      <DialogContent className="bg-bakery-dark border-bakery-gold/20 text-bakery-gold-light max-w-4xl max-h-[80vh] overflow-y-auto">
                        {selectedProduct && (
                          <>
                            <DialogHeader>
                              <DialogTitle className="text-bakery-gold font-playfair text-2xl">
                                {selectedProduct.name}
                              </DialogTitle>
                              <DialogDescription className="text-bakery-gold-light/80">
                                Detalhes do produto
                              </DialogDescription>
                            </DialogHeader>
                            
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                              {/* Carrossel de Imagens */}
                              <div className="space-y-4">
                                <Carousel className="w-full">
                                  <CarouselContent>
                                    {selectedProduct.images.map((image, index) => (
                                      <CarouselItem key={index}>
                                        <img
                                          src={image}
                                          alt={`${selectedProduct.name} - Imagem ${index + 1}`}
                                          className="w-full h-64 object-cover rounded-lg cursor-zoom-in hover:scale-105 transition-transform"
                                          onClick={() => window.open(image, '_blank')}
                                        />
                                      </CarouselItem>
                                    ))}
                                  </CarouselContent>
                                  {selectedProduct.images.length > 1 && (
                                    <>
                                      <CarouselPrevious className="border-bakery-gold text-bakery-gold" />
                                      <CarouselNext className="border-bakery-gold text-bakery-gold" />
                                    </>
                                  )}
                                </Carousel>
                                
                                {/* Vídeo (se existir) */}
                                {selectedProduct.video && (
                                  <div className="relative">
                                    <iframe
                                      src={selectedProduct.video}
                                      title={`Vídeo - ${selectedProduct.name}`}
                                      className="w-full h-48 rounded-lg"
                                      frameBorder="0"
                                      allowFullScreen
                                    />
                                  </div>
                                )}
                              </div>
                              
                              {/* Informações do Produto */}
                              <div className="space-y-4">
                                <div className="flex items-center space-x-2">
                                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                                  <span className="text-bakery-gold">{selectedProduct.rating}/5.0</span>
                                  <span className="text-bakery-gold-light/60">• Avaliação dos clientes</span>
                                </div>
                                
                                <p className="text-bakery-gold-light leading-relaxed">
                                  {selectedProduct.description}
                                </p>
                                
                                <div className="space-y-2">
                                  <div className="flex items-center justify-between">
                                    {selectedProduct.discount > 0 && (
                                      <span className="text-bakery-gold-light/60 line-through">
                                        R$ {selectedProduct.price.toFixed(2)}
                                      </span>
                                    )}
                                    <span className="text-bakery-gold font-bold text-2xl">
                                      R$ {calculateDiscountedPrice(selectedProduct.price, selectedProduct.discount).toFixed(2)}
                                    </span>
                                  </div>
                                  
                                  {selectedProduct.discount > 0 && (
                                    <Badge className="bg-bakery-orange text-white">
                                      Economize {selectedProduct.discount}%
                                    </Badge>
                                  )}
                                </div>
                                
                                <Button
                                  onClick={() => {
                                    handleAddToCart(selectedProduct);
                                    setSelectedProduct(null);
                                  }}
                                  className="w-full bg-bakery-gold text-bakery-dark hover:bg-bakery-gold/90 font-semibold py-3"
                                >
                                  <Plus className="w-5 h-5 mr-2" />
                                  Adicionar ao Carrinho
                                </Button>
                              </div>
                            </div>
                          </>
                        )}
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-bakery-gold-light/60 text-lg">
                Nenhum produto encontrado com os filtros selecionados.
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
