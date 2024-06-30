import { Component, signal } from '@angular/core';
import { ProductCardComponent } from './ui/product-card/product-card.component';
import { Product } from '../../../interfaces/product';
import { interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './input-output.component.html',
})
export default class InputOutputComponent {

  public products = signal<Product[]>([
    {
      id:1,
      name: 'producto 1',
      quantity: 0
    },
    {
      id:2,
      name: 'producto 2',
      quantity: 0
    }
  ])

  private internalSubscription = interval(1000).pipe(
    tap(() => {
      this.products.update((products) => [
        ...products,
        {
          id: products.length +1,
          name: ` product ${products.length +1 }`,
          quantity: 0
        }
      ])
    }),
    take(7)
  ).subscribe()

  ngOnDestroy(): void {
    this.internalSubscription.unsubscribe()

  }
}
