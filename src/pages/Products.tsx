
import { useState } from 'react';
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
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addItem } = useCart();
  const { toast } = useToast();

  const categories = [
    { id: 'todos', name: 'Todos os Produtos' },
    { id: 'paes-italianos', name: 'Pães Italianos' },
    { id: 'paes-recheados', name: 'Pães Recheados' },
    { id: 'paes-frances', name: 'Pães Francês' },
    { id: 'tortas-doces', name: 'Tortas Doces' },
    { id: 'tortas-salgadas', name: 'Tortas Salgadas' },
    { id: 'massas', name: 'Massas' },
    { id: 'refrigerantes', name: 'Refrigerantes' },
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
                  Descubra nossa seleção de pães, tortas e delícias artesanais
                </p>
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
