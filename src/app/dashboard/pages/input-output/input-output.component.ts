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

  //la ventaja de usar inputs y outputs como señales es que angular sabe exactamente el lugar donde se cambió la data en vez de verificar toda la app
  updateIncrement(product: Product, newQuantity: number){
    this.products.update((products) =>
      products.map((p) =>
        p.id === product.id ? {...p, quantity: newQuantity} : p
      )
    )
  }

  ngOnDestroy(): void {
    this.internalSubscription.unsubscribe()

  }


}
