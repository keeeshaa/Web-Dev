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
  }
}

