import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  template: `
    <div class="product-item">
      <img [src]="product.imageUrl" alt="{{ product.name }}">
      <h3>{{ product.name }}</h3>
      <p>Rating: {{ product.rating }} ★</p>
      <div class="buttons">
        <button class="like-btn" (click)="likeProduct()">❤️ Like ({{ product.likes }})</button>
        <button class="remove-btn" (click)="remove.emit(product.id)">🗑 Remove</button>
      </div>
      <div class="share-buttons">
        <button class="whatsapp-btn" (click)="shareOnWhatsApp()">📲 WhatsApp</button>
        <button class="telegram-btn" (click)="shareOnTelegram()">✈️ Telegram</button>
      </div>
    </div>
  `,
  imports: [],
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: any;
  @Output() remove = new EventEmitter<number>();

  likeProduct() {
    this.product.likes++;
  }

  shareOnWhatsApp(): void {
    window.open(`https://wa.me/?text=${encodeURIComponent(this.product.link)}`);
  }

  shareOnTelegram(): void {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(this.product.link)}`);
  }
}

