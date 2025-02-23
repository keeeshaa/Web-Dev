import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Output() categorySelected = new EventEmitter<string>();

  categories: string[] = ['Книги', 'Одежда', 'Игрушки', 'Бытовая техника'];
  selectedCategory: string | null = null;

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.categorySelected.emit(category);
  }
}
