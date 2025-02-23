import { Component } from '@angular/core';
<<<<<<< HEAD

@Component({
  selector: 'app-root',
=======
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductsComponent], 
>>>>>>> d21bc82a14c9ea5c0142594b87342798347d676b
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  title = 'Kaspi Shop';
=======
  title = 'product-list';
>>>>>>> d21bc82a14c9ea5c0142594b87342798347d676b
}
