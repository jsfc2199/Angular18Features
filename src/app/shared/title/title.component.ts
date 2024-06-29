import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  template: ` <h1 class="text-3xl mb-5">{{ title }} - {{withShadow}}</h1> `,
})
export class TitleComponent {
  //required inputs
  @Input({ required: true }) title!: string;

  //transformaciones en los inputs. Si viene se queda en true, sino es false
  @Input({ transform: booleanAttribute }) withShadow: boolean = false;
}
