import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
<<<<<<< HEAD

allProducts: Product[] = [
  { name: 'Гарри Поттер и философский камень', description: 'Первая книга о Гарри Поттере.', imageUrls: ['assets/book1.jpeg'], rating: 4.9, link: 'https://kaspi.kz/shop/p/rouling-dzh-garri-potter-i-filosofskii-kamen--26013455/?c=750000000', category: 'Книги', likes: 0 },
  { name: '1984 - Джордж Оруэлл', description: 'Легендарный антиутопический роман.', imageUrls: ['assets/book2.jpeg'], rating: 4.8, link: 'https://kaspi.kz/shop/p/oruell-dzhordzh-1984-novyi-perevod--113414489/?c=750000000', category: 'Книги', likes: 0 },
  { name: 'Мастер и Маргарита', description: 'Классика русской литературы.', imageUrls: ['assets/book3.jpeg'], rating: 4.7, link: 'https://kaspi.kz/shop/p/bulgakov-m-a-master-i-margarita-105221836/?c=750000000', category: 'Книги', likes: 0 },

  { name: 'Зимняя куртка', description: 'Теплая и стильная куртка.', imageUrls: ['assets/clothing1.jpeg'], rating: 4.6, link: 'https://kaspi.kz/shop/p/zimnjaja-kurtka-jecamian-chernyi-xl-115064963/?c=750000000', category: 'Одежда', likes: 0 },
  { name: 'Кроссовки Nike', description: 'Удобные спортивные кроссовки.', imageUrls: ['assets/clothing2.jpeg'], rating: 4.9, link: 'https://kaspi.kz/shop/p/krossovki-nike-air-force-1-07-cw2288-111-belyi-43-113340612/?c=750000000', category: 'Одежда', likes: 0 },
  { name: 'Джинсы Levi\'s', description: 'Классические джинсы высокого качества.', imageUrls: ['assets/clothing3.jpeg'], rating: 4.7, link: 'https://kaspi.kz/shop/p/dzhinsy-zauzhennye-levis-453f4000375-sinii-m-130207581/?c=750000000', category: 'Одежда', likes: 0 },

  { name: 'LEGO Star Wars', description: 'Конструктор для поклонников вселенной.', imageUrls: ['assets/toy1.jpeg'], rating: 4.9, link: 'https://kaspi.kz/shop/p/konstruktor-lego-star-wars-shlem-pilota-at-at-75429-detalei-730-sht-135271102/?c=750000000', category: 'Игрушки', likes: 0 },
  { name: 'Плюшевый медведь', description: 'Мягкая игрушка для детей.', imageUrls: ['assets/toy2.jpeg'], rating: 4.8, link: 'https://kaspi.kz/shop/p/mjagkaja-igrushka-medved-pljushevyi-vysota-120-sm-bezhevyi-krasnyi-133231982/?c=750000000', category: 'Игрушки', likes: 0 },

  { name: 'Пылесос Dyson', description: 'Мощный и удобный беспроводной пылесос.', imageUrls: ['assets/appliance1.jpeg'], rating: 4.7, link: 'https://kaspi.kz/shop/p/dyson-v15s-detect-submarine-serebristyi-114424216/?c=750000000', category: 'Бытовая техника', likes: 0 },
  { name: 'Кофемашина DeLonghi', description: 'Готовьте вкусный кофе дома.', imageUrls: ['assets/appliance2.jpeg'], rating: 4.9, link: 'https://kaspi.kz/shop/p/kofemashina-delonghi-ecam-320-70-tb-serebristyi-117323927/?c=750000000', category: 'Бытовая техника', likes: 0 }
];

  selectedCategory: string = '';

  get filteredProducts(): Product[] {
    return this.selectedCategory ? this.allProducts.filter(p => p.category === this.selectedCategory) : this.allProducts;
=======
  products: Product[] = [
    {
      name: 'Планшет Apple iPad Pro 12.9" 256Gb серый',
      description: 'Флагманский iPad Pro с мощным процессором и невероятным дисплеем.',
      imageUrls: ['assets/first.jpeg'],
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-2024-wi-fi-11-11-djuim-8-gb-128-gb-seryi-119778165/?c=750000000&m=6836017&sr=1&qid=6ef53ed1c841acfe6fc19be4a258bf78&isPromoted=true&ref=shared_link'
    },
    {
      name: 'Планшет Apple iPad Pro 11" 256Gb серебристый',
      description: 'Компактный и мощный iPad Pro с экраном Liquid Retina.',
      imageUrls: ['assets/second.jpeg'],
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-2024-wi-fi-11-11-djuim-8-gb-128-gb-seryi-119778165/?c=750000000&m=6836017&sr=1&qid=6ef53ed1c841acfe6fc19be4a258bf78&isPromoted=true&ref=shared_link'
    },
    {
      name: 'Планшет Apple iPad Air 10.9" 128Gb синий',
      description: 'iPad Air с инновационным чипом M1 для высокой производительности.',
      imageUrls: ['assets/third.jpeg'],
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-2024-wi-fi-11-11-djuim-8-gb-128-gb-seryi-119778165/?c=750000000&m=6836017&sr=1&qid=6ef53ed1c841acfe6fc19be4a258bf78&isPromoted=true&ref=shared_link'
    },
    {
      name: 'Планшет Apple iPad Air 10.9" 256Gb зеленый',
      description: 'Тонкий и легкий iPad Air с поддержкой Apple Pencil.',
      imageUrls: ['assets/fourth.jpeg'],
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-2024-wi-fi-11-11-djuim-8-gb-128-gb-seryi-119778165/?c=750000000&m=6836017&sr=1&qid=6ef53ed1c841acfe6fc19be4a258bf78&isPromoted=true&ref=shared_link'
    },
    {
      name: 'Планшет Apple iPad 10.2" 128Gb серебристый',
      description: 'Классический iPad с большим экраном для учебы и работы.',
      imageUrls: ['assets/fifth.jpeg'],
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-2024-wi-fi-11-11-djuim-8-gb-128-gb-seryi-119778165/?c=750000000&m=6836017&sr=1&qid=6ef53ed1c841acfe6fc19be4a258bf78&isPromoted=true&ref=shared_link'
    },
    {
      name: 'Планшет Apple iPad mini 8.3" 64Gb фиолетовый',
      description: 'Компактный и мощный iPad mini с новым дизайном.',
      imageUrls: ['assets/sixth.jpeg'],
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-2024-wi-fi-11-11-djuim-8-gb-128-gb-seryi-119778165/?c=750000000&m=6836017&sr=1&qid=6ef53ed1c841acfe6fc19be4a258bf78&isPromoted=true&ref=shared_link'
    },
    {
      name: 'Планшет Apple iPad Pro 11" 512Gb черный',
      description: 'Продвинутый iPad Pro с высокой производительностью и 5G.',
      imageUrls: ['assets/seventh.jpeg'],
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-2024-wi-fi-11-11-djuim-8-gb-128-gb-seryi-119778165/?c=750000000&m=6836017&sr=1&qid=6ef53ed1c841acfe6fc19be4a258bf78&isPromoted=true&ref=shared_link'
    },
    {
      name: 'Планшет Apple iPad 10.9" 64Gb желтый',
      description: 'Яркий и стильный iPad с новыми возможностями.',
      imageUrls: ['assets/eight.jpeg'],
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-2024-wi-fi-11-11-djuim-8-gb-128-gb-seryi-119778165/?c=750000000&m=6836017&sr=1&qid=6ef53ed1c841acfe6fc19be4a258bf78&isPromoted=true&ref=shared_link'
    },
    {
      name: 'Планшет Apple iPad Air 10.9" 64Gb розовый',
      description: 'Мощный и легкий iPad Air для работы и творчества.',
      imageUrls: ['assets/ninth.jpeg'],
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-2024-wi-fi-11-11-djuim-8-gb-128-gb-seryi-119778165/?c=750000000&m=6836017&sr=1&qid=6ef53ed1c841acfe6fc19be4a258bf78&isPromoted=true&ref=shared_link'
    },
    {
      name: 'Планшет Apple iPad mini 8.3" 256Gb золотистый',
      description: 'Компактный планшет с большим потенциалом и топовыми характеристиками.',
      imageUrls: ['assets/tenth.jpeg'],
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-2024-wi-fi-11-11-djuim-8-gb-128-gb-seryi-119778165/?c=750000000&m=6836017&sr=1&qid=6ef53ed1c841acfe6fc19be4a258bf78&isPromoted=true&ref=shared_link'
    }
  ];

  shareOnWhatsApp(link: string): void {
    window.open(`https://wa.me/?text=${encodeURIComponent('📱 Посмотрите: ' + link)}`, '_blank');
  }
  
  shareOnTelegram(link: string): void {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent('📩 Посмотрите: ')}`, '_blank');
>>>>>>> d21bc82a14c9ea5c0142594b87342798347d676b
  }
}

