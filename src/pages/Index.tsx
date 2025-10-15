import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: 'Солнечный бриз',
    price: 2990,
    image: 'https://cdn.poehali.dev/projects/77303f0b-c405-4f0d-bbf8-68675d5d8b01/files/81650a7d-de9c-4a5c-bd47-ff3f3acf91a2.jpg',
    description: 'Лёгкие очки для прогулок по набережной'
  },
  {
    id: 2,
    name: 'Золотой закат',
    price: 3490,
    image: 'https://cdn.poehali.dev/projects/77303f0b-c405-4f0d-bbf8-68675d5d8b01/files/4f3fac3c-4661-4d8d-a696-6b873f5421c0.jpg',
    description: 'Стильные очки с янтарными линзами'
  },
  {
    id: 3,
    name: 'Морской бриз',
    price: 3290,
    image: 'https://cdn.poehali.dev/projects/77303f0b-c405-4f0d-bbf8-68675d5d8b01/files/16d504f6-935d-4085-bfcb-70ddacb39d0b.jpg',
    description: 'Классика для пляжного отдыха'
  },
  {
    id: 4,
    name: 'Яркий день',
    price: 4290,
    image: 'https://cdn.poehali.dev/projects/77303f0b-c405-4f0d-bbf8-68675d5d8b01/files/81650a7d-de9c-4a5c-bd47-ff3f3acf91a2.jpg',
    description: 'Максимальная защита от солнца'
  },
  {
    id: 5,
    name: 'Летний вечер',
    price: 3890,
    image: 'https://cdn.poehali.dev/projects/77303f0b-c405-4f0d-bbf8-68675d5d8b01/files/4f3fac3c-4661-4d8d-a696-6b873f5421c0.jpg',
    description: 'Элегантные очки для прогулок'
  },
  {
    id: 6,
    name: 'Южное солнце',
    price: 3690,
    image: 'https://cdn.poehali.dev/projects/77303f0b-c405-4f0d-bbf8-68675d5d8b01/files/16d504f6-935d-4085-bfcb-70ddacb39d0b.jpg',
    description: 'Премиум качество и комфорт'
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
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <Icon name="Sun" size={32} className="text-primary" />
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Посмотри на солнце
              </h1>
            </div>
            <nav className="hidden md:flex gap-8">
              {['home', 'catalog', 'about', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-semibold transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'catalog' && 'Каталог'}
                  {section === 'about' && 'О нас'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </nav>
            <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg">
              <Icon name="ShoppingBag" size={18} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-amber-100/50 to-secondary/10 -z-10"></div>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <Icon name="MapPin" size={18} className="text-secondary" />
                <span className="text-sm font-semibold text-gray-700">Геленджик</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">
                Посмотри на солнце
                <span className="block text-4xl md:text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mt-4">
                  без забот! ☀️
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Стильные солнцезащитные очки для яркого лета в Геленджике. Защита UV400, современный дизайн и доступные цены.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform shadow-xl text-lg px-8"
                  onClick={() => scrollToSection('catalog')}
                >
                  Выбрать очки
                  <Icon name="ArrowRight" size={22} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 text-lg px-8">
                  Позвонить нам
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="bg-white p-4 rounded-xl shadow-md mb-3 inline-flex">
                    <Icon name="Shield" size={36} className="text-primary" />
                  </div>
                  <p className="text-sm font-semibold">Защита UV400</p>
                </div>
                <div className="text-center">
                  <div className="bg-white p-4 rounded-xl shadow-md mb-3 inline-flex">
                    <Icon name="Sparkles" size={36} className="text-primary" />
                  </div>
                  <p className="text-sm font-semibold">Стильный дизайн</p>
                </div>
                <div className="text-center">
                  <div className="bg-white p-4 rounded-xl shadow-md mb-3 inline-flex">
                    <Icon name="BadgePercent" size={36} className="text-primary" />
                  </div>
                  <p className="text-sm font-semibold">Отличные цены</p>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-amber-400 to-secondary blur-3xl opacity-30 -z-10 animate-pulse"></div>
              <div className="bg-white p-6 rounded-3xl shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/77303f0b-c405-4f0d-bbf8-68675d5d8b01/files/81650a7d-de9c-4a5c-bd47-ff3f3acf91a2.jpg"
                  alt="Солнцезащитные очки"
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full mb-4">
              <Icon name="Sparkles" size={18} className="text-secondary" />
              <span className="text-sm font-semibold text-gray-700">Лето 2024</span>
            </div>
            <h2 className="text-5xl font-bold mb-4">Наша коллекция</h2>
            <p className="text-xl text-gray-600">Выбери свой стиль для летнего отдыха</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in bg-gradient-to-br from-white to-amber-50/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-bold text-secondary">Хит продаж</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {product.price} ₽
                      </span>
                    </div>
                    <Button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform shadow-lg">
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      Купить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-4 bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">О магазине</h2>
            <p className="text-xl text-gray-600">Почему нас выбирают в Геленджике</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-xl">
                    <Icon name="Sun" size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Защита от солнца</h3>
                    <p className="text-gray-600">Все модели с защитой UV400 для максимальной безопасности ваших глаз на южном солнце</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-xl">
                    <Icon name="Award" size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Качество</h3>
                    <p className="text-gray-600">Только проверенные бренды и сертифицированная продукция с гарантией</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-xl">
                    <Icon name="MapPin" size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Местный магазин</h3>
                    <p className="text-gray-600">Работаем в Геленджике круглый год. Быстрая доставка и самовывоз</p>
                  </div>
                </div>
              </Card>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary blur-3xl opacity-20 -z-10"></div>
              <img 
                src="https://cdn.poehali.dev/projects/77303f0b-c405-4f0d-bbf8-68675d5d8b01/files/4f3fac3c-4661-4d8d-a696-6b873f5421c0.jpg"
                alt="О магазине"
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
          </div>
          <div className="mt-16 bg-gradient-to-r from-primary to-secondary p-8 md:p-12 rounded-3xl text-white shadow-2xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">500+</div>
                <p className="text-white/90">Довольных клиентов</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">100+</div>
                <p className="text-white/90">Моделей в наличии</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">5 лет</div>
                <p className="text-white/90">На рынке Геленджика</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full mb-4">
              <Icon name="MessageCircle" size={18} className="text-secondary" />
              <span className="text-sm font-semibold text-gray-700">Свяжитесь с нами</span>
            </div>
            <h2 className="text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">Приезжайте к нам или напишите</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-amber-50/30">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl">
                    <Icon name="MapPin" size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Наш адрес</h3>
                    <p className="text-gray-600 text-lg">г. Геленджик, ул. Луначарского, 156</p>
                    <p className="text-sm text-gray-500 mt-2">Рядом с набережной</p>
                  </div>
                </div>
              </Card>
              <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-amber-50/30">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl">
                    <Icon name="Phone" size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Телефон</h3>
                    <p className="text-gray-600 text-lg">+7 (918) 555-33-22</p>
                    <p className="text-sm text-gray-500 mt-2">Ежедневно с 10:00 до 20:00</p>
                  </div>
                </div>
              </Card>
              <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-amber-50/30">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl">
                    <Icon name="Mail" size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Email</h3>
                    <p className="text-gray-600 text-lg">info@posmotrionasunce.ru</p>
                    <p className="text-sm text-gray-500 mt-2">Ответим в течение часа</p>
                  </div>
                </div>
              </Card>
            </div>
            <Card className="p-8 border-0 shadow-xl bg-gradient-to-br from-white to-amber-50/50">
              <h3 className="text-2xl font-bold mb-6">Напишите нам</h3>
              <form className="space-y-6">
                <div>
                  <Input placeholder="Ваше имя" className="h-12 text-lg" />
                </div>
                <div>
                  <Input type="tel" placeholder="Телефон" className="h-12 text-lg" />
                </div>
                <div>
                  <Input type="email" placeholder="Email" className="h-12 text-lg" />
                </div>
                <div>
                  <Textarea placeholder="Ваше сообщение" rows={5} className="text-lg" />
                </div>
                <Button className="w-full h-14 text-lg bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform shadow-xl">
                  Отправить сообщение
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sun" size={32} className="text-primary" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Посмотри на солнце
                </h3>
              </div>
              <p className="text-gray-400">
                Солнцезащитные очки в Геленджике
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Навигация</h4>
              <ul className="space-y-3 text-gray-400">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Главная</button></li>
                <li><button onClick={() => scrollToSection('catalog')} className="hover:text-primary transition-colors">Каталог</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О нас</button></li>
                <li><button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Контакты</h4>
              <ul className="space-y-3 text-gray-400">
                <li>+7 (918) 555-33-22</li>
                <li>info@posmotrionasunce.ru</li>
                <li>г. Геленджик</li>
                <li>ул. Луначарского, 156</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Соцсети</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="hover:bg-primary hover:border-primary transition-all hover:scale-110">
                  <Icon name="Instagram" size={22} />
                </Button>
                <Button size="icon" variant="outline" className="hover:bg-primary hover:border-primary transition-all hover:scale-110">
                  <Icon name="MessageCircle" size={22} />
                </Button>
                <Button size="icon" variant="outline" className="hover:bg-primary hover:border-primary transition-all hover:scale-110">
                  <Icon name="Phone" size={22} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">© 2024 Посмотри на солнце. Геленджик. Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
