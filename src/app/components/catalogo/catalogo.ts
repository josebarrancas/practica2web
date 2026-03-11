import { Component, inject } from '@angular/core'; 
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductsService } from '../../services/producto.service';
import { ProductoCardComponent } from '../producto-card/producto-card';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [ProductoCardComponent],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class CatalogoComponent {
  private productsService = inject(ProductsService);
  products = toSignal(this.productsService.getAll(), { initialValue: [] });
}