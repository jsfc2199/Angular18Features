import { Component } from '@angular/core';
import { ProductCardComponent } from './ui/product-card/product-card.component';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './input-output.component.html',
})
export default class InputOutputComponent {

}
