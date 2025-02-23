import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { FormsModule } from '@angular/forms';
=======
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
>>>>>>> d21bc82a14c9ea5c0142594b87342798347d676b

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ProductsComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
=======
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule 
>>>>>>> d21bc82a14c9ea5c0142594b87342798347d676b
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
<<<<<<< HEAD

=======
>>>>>>> d21bc82a14c9ea5c0142594b87342798347d676b
