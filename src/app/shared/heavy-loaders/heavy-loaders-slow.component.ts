import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-full h-[600px]', cssClass]">
      Heavy Loader Slow

    </section>
  `,
})
export class HeavyLoadersSlowComponent {

  @Input({required: true}) cssClass!: string

  //usaremos algo que cargue mucho en crearse/bloqueante (lo hacemos adrede)
  constructor(){
    const start = Date.now()
    while(Date.now()-start < 3000){}
  }
}
