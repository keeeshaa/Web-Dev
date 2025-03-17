import { Component, Input, Output, EventEmitter } from '@angular/core';
import {ProductItemComponent} from '../product-item/product-item.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-product-list',
  template: `
    <div class="product-list">
      <app-product-item *ngFor="let product of products" [product]="product"
                        (remove)="remove.emit($event)"></app-product-item>
    </div>
  `,
  imports: [
    ProductItemComponent,
    NgForOf
  ],
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: any[] = [];
  @Output() remove = new EventEmitter<number>();
}

