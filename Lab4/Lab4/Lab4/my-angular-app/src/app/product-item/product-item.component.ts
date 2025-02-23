import { Component, Input } from '@angular/core';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;

  shareOnWhatsApp(): void {
    window.open(`https://wa.me/?text=${encodeURIComponent(this.product.link)}`);
  }

  shareOnTelegram(): void {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(this.product.link)}`);
  }
}


