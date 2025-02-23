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
  }
}

