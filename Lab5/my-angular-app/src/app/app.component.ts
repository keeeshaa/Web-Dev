import { Component } from '@angular/core';
import {ProductListComponent} from './product-list/product-list.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Product Categories</h1>
      <div class="categories">
        <button *ngFor="let category of categories" (click)="selectCategory(category)">
          {{ category.name }}
        </button>
      </div>
      <app-product-list [products]="selectedProducts" (remove)="removeProduct($event)"></app-product-list>
    </div>
  `,
  imports: [
    ProductListComponent,
    NgForOf
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = [
    { name: 'Electronics', products: [
        { id: 1, name: 'Laptop', likes: 0, rating: 4.5, imageUrl: 'assets/laptop.jpg', link: 'https://example.com/laptop' },
        { id: 2, name: 'Smartphone', likes: 0, rating: 5.0, imageUrl: 'assets/smartphone.jpg', link: 'https://example.com/laptop'},
        { id: 3, name: 'Tablet', likes: 0, rating: 4.1, imageUrl: 'assets/tablet.jpg', link: 'https://example.com/laptop'},
        { id: 4, name: 'Headphones', likes: 0, rating: 4.3, imageUrl: 'assets/headphones.jpg', link: 'https://example.com/laptop' },
        { id: 5, name: 'Smartwatch', likes: 0, rating: 4.2, imageUrl: 'assets/smartwatch.jpg', link: 'https://example.com/laptop' }
      ]},
    { name: 'Clothing', products: [
        { id: 6, name: 'T-Shirt', likes: 0, rating: 3.5, imageUrl: 'assets/t-shirt.jpg', link: 'https://example.com/laptop' },
        { id: 7, name: 'Jeans', likes: 0, rating: 4.3, imageUrl: 'assets/jeans.jpg', link: 'https://example.com/laptop' },
        { id: 8, name: 'Jacket', likes: 0, rating: 4.3, imageUrl: 'assets/jacket.jpg', link: 'https://example.com/laptop' },
        { id: 9, name: 'Shoes', likes: 0, rating: 4.7, imageUrl: 'assets/shoes.jpg', link: 'https://example.com/laptop' },
        { id: 10, name: 'Hat', likes: 0, rating: 4.8, imageUrl: 'assets/hat.jpg', link: 'https://example.com/laptop' }
      ]},
    { name: 'Books', products: [
        { id: 11, name: 'Fiction', likes: 0, rating: 3.9, imageUrl: 'assets/1.jpg', link: 'https://example.com/laptop' },
        { id: 12, name: 'Non-Fiction', likes: 0, rating: 5.0, imageUrl: 'assets/2.jpg', link: 'https://example.com/laptop' },
        { id: 13, name: 'Sci-Fi', likes: 0, rating: 2.9, imageUrl: 'assets/3.jpg', link: 'https://example.com/laptop' },
        { id: 14, name: 'Biography', likes: 0, rating: 4.9, imageUrl: 'assets/4.jpg', link: 'https://example.com/laptop' },
        { id: 15, name: 'History', likes: 0, rating: 4.1, imageUrl: 'assets/5.jpg', link: 'https://example.com/laptop' }
      ]},
    { name: 'Sports', products: [
        { id: 16, name: 'Football', likes: 0, rating: 4.1, imageUrl: 'assets/football.jpg', link: 'https://example.com/laptop' },
        { id: 17, name: 'Basketball', likes: 0, rating: 4.1, imageUrl: 'assets/basketball.jpg', link: 'https://example.com/laptop' },
        { id: 18, name: 'Tennis Racket', likes: 0, rating: 4.4, imageUrl: 'assets/tennis-racket.jpg', link: 'https://example.com/laptop'},
        { id: 19, name: 'Running Shoes', likes: 0, rating: 3.8, imageUrl: 'assets/running-shoes.jpg', link: 'https://example.com/laptop' },
        { id: 20, name: 'Yoga Mat', likes: 0, rating: 3.7, imageUrl: 'assets/yoga-mat.jpg', link: 'https://example.com/laptop' }
      ]}
  ];

  selectedProducts = this.categories[0].products;

  selectCategory(category: any) {
    this.selectedProducts = category.products;
  }

  removeProduct(productId: number) {
    this.selectedProducts = this.selectedProducts.filter(p => p.id !== productId);
  }
}
