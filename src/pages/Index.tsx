import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: 'Classic Aviator',
    price: 3500,
    image: 'https://cdn.poehali.dev/projects/77303f0b-c405-4f0d-bbf8-68675d5d8b01/files/81650a7d-de9c-4a5c-bd47-ff3f3acf91a2.jpg',
    description: 'Классические авиаторы для любого случая'
  },
  {
    id: 2,
    name: 'Round Vintage',
    price: 4200,
    image: 'https://cdn.poehali.dev/projects/77303f0b-c405-4f0d-bbf8-68675d5d8b01/files/4f3fac3c-4661-4d8d-a696-6b873f5421c0.jpg',
    description: 'Винтажные круглые очки в стиле ретро'
  },
  {
    id: 3,
    name: 'Black Wayfarer',
    price: 3900,
    image: 'https://cdn.poehali.dev/projects/77303f0b-c405-4f0d-bbf8-68675d5d8b01/files/16d504f6-935d-4085-bfcb-70ddacb39d0b.jpg',
    description: 'Стильные вайфареры для городской жизни'
  },
  {
    id: 4,
    name: 'Sport Shield',
    price: 5200,
    image: 'https://cdn.poehali.dev/projects/77303f0b-c405-4f0d-bbf8-68675d5d8b01/files/81650a7d-de9c-4a5c-bd47-ff3f3acf91a2.jpg',
    description: 'Спортивные очки с максимальной защитой'
  },
  {
    id: 5,
    name: 'Cat Eye Glam',
    price: 4800,
    image: 'https://cdn.poehali.dev/projects/77303f0b-c405-4f0d-bbf8-68675d5d8b01/files/4f3fac3c-4661-4d8d-a696-6b873f5421c0.jpg',
    description: 'Элегантные очки в форме кошачьего глаза'
  },
  {
    id: 6,
    name: 'Modern Square',
    price: 4500,
    image: 'https://cdn.poehali.dev/projects/77303f0b-c405-4f0d-bbf8-68675d5d8b01/files/16d504f6-935d-4085-bfcb-70ddacb39d0b.jpg',
    description: 'Современные квадратные очки премиум-класса'
  }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              CRYSTALL
            </h1>
            <nav className="hidden md:flex gap-6">
              {['home', 'catalog', 'delivery', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'catalog' && 'Каталог'}
                  {section === 'delivery' && 'Доставка'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </nav>
            <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Солнцезащитные очки
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mt-2">
                  в Геленджике
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Премиальная коллекция солнцезащитных очков от ведущих брендов. Защита, стиль и комфорт для ваших глаз.
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  onClick={() => scrollToSection('catalog')}
                >
                  Смотреть каталог
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline">
                  Связаться
                </Button>
              </div>
              <div className="flex gap-8 pt-6">
                <div className="text-center">
                  <Icon name="Glasses" size={32} className="mx-auto mb-2 text-primary" />
                  <p className="text-sm font-medium">Широкий выбор</p>
                </div>
                <div className="text-center">
                  <Icon name="Truck" size={32} className="mx-auto mb-2 text-primary" />
                  <p className="text-sm font-medium">Быстрая доставка</p>
                </div>
                <div className="text-center">
                  <Icon name="MapPin" size={32} className="mx-auto mb-2 text-primary" />
                  <p className="text-sm font-medium">Геленджик</p>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl -z-10"></div>
              <img 
                src="https://cdn.poehali.dev/projects/77303f0b-c405-4f0d-bbf8-68675d5d8b01/files/81650a7d-de9c-4a5c-bd47-ff3f3acf91a2.jpg"
                alt="Hero sunglasses"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наш каталог</h2>
            <p className="text-muted-foreground">Актуальные модели 2024 года</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {product.price} ₽
                    </span>
                    <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 px-4 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Доставка</h2>
            <p className="text-muted-foreground">Удобные способы получения заказа</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Icon name="MapPin" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="font-bold mb-2">Самовывоз</h3>
              <p className="text-sm text-muted-foreground">Забрать в нашем магазине в Геленджике</p>
              <p className="text-primary font-bold mt-2">Бесплатно</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Icon name="Truck" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="font-bold mb-2">Курьер</h3>
              <p className="text-sm text-muted-foreground">Доставка по Геленджику в день заказа</p>
              <p className="text-primary font-bold mt-2">200 ₽</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Icon name="Package" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="font-bold mb-2">СДЭК</h3>
              <p className="text-sm text-muted-foreground">Доставка в любой город России</p>
              <p className="text-primary font-bold mt-2">От 300 ₽</p>
            </Card>
          </div>
          <Card className="mt-8 p-6 bg-white">
            <h3 className="font-bold text-lg mb-4">Условия доставки</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <span>Бесплатная доставка при заказе от 5000 ₽</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <span>Доставка по Геленджику осуществляется в течение 1-2 часов</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <span>Отправка в другие города в течение 1 рабочего дня</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <span>Возможна примерка перед оплатой при самовывозе</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-muted-foreground">Свяжитесь с нами удобным способом</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Адрес</h3>
                    <p className="text-muted-foreground">г. Геленджик, ул. Революционная, 10</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (918) 123-45-67</p>
                    <p className="text-sm text-muted-foreground mt-1">Ежедневно с 9:00 до 21:00</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@crystall-gel.ru</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Режим работы</h3>
                    <p className="text-muted-foreground">Пн-Вс: 9:00 - 21:00</p>
                    <p className="text-sm text-muted-foreground mt-1">Без выходных</p>
                  </div>
                </div>
              </Card>
            </div>
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4">Напишите нам</h3>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <Input type="tel" placeholder="Телефон" />
                </div>
                <div>
                  <Input type="email" placeholder="Email" />
                </div>
                <div>
                  <Textarea placeholder="Ваше сообщение" rows={4} />
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Отправить сообщение
                  <Icon name="Send" size={16} className="ml-2" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-foreground to-foreground/90 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                CRYSTALL
              </h3>
              <p className="text-sm text-gray-300">
                Премиальные солнцезащитные очки в Геленджике
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Меню</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Главная</button></li>
                <li><button onClick={() => scrollToSection('catalog')} className="hover:text-primary transition-colors">Каталог</button></li>
                <li><button onClick={() => scrollToSection('delivery')} className="hover:text-primary transition-colors">Доставка</button></li>
                <li><button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>+7 (918) 123-45-67</li>
                <li>info@crystall-gel.ru</li>
                <li>г. Геленджик</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Соцсети</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="hover:bg-primary hover:border-primary transition-colors">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="hover:bg-primary hover:border-primary transition-colors">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="hover:bg-primary hover:border-primary transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
            © 2024 CRYSTALL. Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
}
