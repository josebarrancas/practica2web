import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router'; 
import { Product } from '../../models/producto.model';
import { ProductsService } from '../../services/producto.service';
import { CarritoService } from '../../services/carrito.service';
import { ProductCardComponent } from '../producto-card/producto-card';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [ProductCardComponent, RouterLink], 
  templateUrl: './catalogo.html',
  styleUrls: ['./catalogo.css'],
})
export class CatalogoComponent {
  products = signal<Product[]>([]);
  inStockCount = computed(() => this.products().filter(p => p.inStock).length);

  constructor(
    private productsService: ProductsService,
    private carritoService: CarritoService
  ) {
    this.productsService.getAll().subscribe({
      next: (data) => this.products.set(data),
      error: (err) => console.error('Error cargando XML:', err),
    });
  }

  agregar(producto: Product) {
    this.carritoService.agregar(producto);
  }
}