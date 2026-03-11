import { Component, Input } from '@angular/core';
import { Product } from '../../models/producto.model';

@Component({
  selector: 'app-producto-card',
  standalone: true,
  imports: [], 
  templateUrl: './producto-card.html',
  styleUrl: './producto-card.css',
})
export class ProductoCardComponent {
  @Input({ required: true }) product!: Product;

  get formattedPrice(): string {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN'
    }).format(this.product.price);
  }
}