import { Component, input, output } from '@angular/core';
import { Product } from '../../../../../interfaces/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {

  //normalmente usaríamos @Input o @Output

  public product = input.required<Product>() //esto es una señal (InputSignal), el required es opcional, pero con eso garantizamos que siempre nos manden info


  public onIncrementQuantity = output<number>()

  public incrementQuantity(){
    this.onIncrementQuantity.emit(this.product().quantity + 1)
  }
}
