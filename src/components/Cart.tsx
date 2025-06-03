
import { useState } from 'react';
import { ShoppingCart, Plus, Minus, Trash2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useCart } from '@/contexts/CartContext';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useToast } from '@/hooks/use-toast';

const Cart = () => {
  const { items, updateQuantity, removeItem, totalPrice, totalItems, clearCart } = useCart();
  const [customerName, setCustomerName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('pix');
  const { toast } = useToast();

  const handleCheckout = () => {
    if (!customerName.trim()) {
      toast({
        title: "Nome obrigatório",
        description: "Por favor, informe seu nome para finalizar o pedido.",
        variant: "destructive"
      });
      return;
    }

    if (items.length === 0) {
      toast({
        title: "Carrinho vazio",
        description: "Adicione produtos ao carrinho antes de finalizar o pedido.",
        variant: "destructive"
      });
      return;
    }

    // Monta a mensagem para o WhatsApp
    let message = `🍞 *Pedido - Panificadora Arena*\n\n`;
    message += `👤 *Cliente:* ${customerName}\n\n`;
    message += `📋 *Itens do Pedido:*\n`;
    
    items.forEach(item => {
      message += `• ${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2)}\n`;
    });
    
    message += `\n💰 *Total: R$ ${totalPrice.toFixed(2)}*\n\n`;
    message += `💳 *Forma de Pagamento:* ${paymentMethod === 'pix' ? 'PIX (11) 99129-8838' : 'Dinheiro'}\n\n`;
    message += `📱 Pedido enviado pelo site`;

    const whatsappUrl = `https://wa.me/5511991298838?text=${encodeURIComponent(message)}`;
    
    // Abre o WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Limpa o carrinho e mostra sucesso
    clearCart();
    setCustomerName('');
    
    toast({
      title: "Pedido enviado!",
      description: "Seu pedido foi enviado para o WhatsApp. Aguarde nosso contato!",
    });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative border-bakery-gold text-bakery-gold hover:bg-bakery-gold hover:text-bakery-dark">
          <ShoppingCart className="w-5 h-5" />
          {totalItems > 0 && (
            <Badge className="absolute -top-2 -right-2 bg-bakery-orange text-white rounded-full h-5 w-5 text-xs flex items-center justify-center">
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      
      <SheetContent className="bg-bakery-dark border-bakery-gold/20 text-bakery-gold-light w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="text-bakery-gold font-playfair">Seu Pedido</SheetTitle>
          <SheetDescription className="text-bakery-gold-light/80">
            Revise seus itens e finalize o pedido
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-6 mt-6">
          {/* Items do Carrinho */}
          <div className="space-y-4 max-h-60 overflow-y-auto">
            {items.length === 0 ? (
              <p className="text-center text-bakery-gold-light/60 py-8">
                Seu carrinho está vazio
              </p>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex items-center space-x-3 bg-bakery-brown/30 p-3 rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-bakery-gold text-sm">{item.name}</h4>
                    <p className="text-bakery-gold-light/80 text-xs">R$ {item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-6 w-6 p-0 border-bakery-gold/30"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="w-3 h-3" />
                    </Button>
                    <span className="text-sm w-6 text-center">{item.quantity}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-6 w-6 p-0 border-bakery-gold/30"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="w-3 h-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-6 w-6 p-0 border-red-500/30 text-red-500"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Total */}
          {items.length > 0 && (
            <div className="border-t border-bakery-gold/20 pt-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span className="text-bakery-gold">Total:</span>
                <span className="text-bakery-gold">R$ {totalPrice.toFixed(2)}</span>
              </div>
            </div>
          )}

          {/* Formulário de Checkout */}
          {items.length > 0 && (
            <div className="space-y-4 border-t border-bakery-gold/20 pt-4">
              <div className="space-y-2">
                <Label htmlFor="customerName" className="text-bakery-gold">
                  Nome do Cliente *
                </Label>
                <Input
                  id="customerName"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Digite seu nome"
                  className="bg-bakery-brown/30 border-bakery-gold/30 text-bakery-gold-light"
                />
              </div>

              <div className="space-y-3">
                <Label className="text-bakery-gold">Forma de Pagamento *</Label>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pix" id="pix" className="border-bakery-gold" />
                    <Label htmlFor="pix" className="text-bakery-gold-light">
                      PIX: (11) 99129-8838
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="dinheiro" id="dinheiro" className="border-bakery-gold" />
                    <Label htmlFor="dinheiro" className="text-bakery-gold-light">
                      Dinheiro
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <Button
                onClick={handleCheckout}
                className="w-full bg-bakery-gold text-bakery-dark hover:bg-bakery-gold/90 font-semibold"
              >
                Finalizar Pedido via WhatsApp
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
