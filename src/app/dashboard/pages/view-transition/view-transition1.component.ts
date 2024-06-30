import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-view-transition1',
  standalone: true,
  imports: [TitleComponent],
  template: `
    <app-title title="View Transition 1"></app-title>

    <section class="flex justify-start">
      <!-- en el style deben tener el mismo nombre de transiscion para poder apreciarlo y debe ser único entre imagenes -->

      <img srcset="https://picsum.photos/id/237/200/300" alt="picsum" width="200" height="300" style="view-transition-name: dog1">

      <div class="bg-blue-500 w-56 h-56" style="view-transition-name: box1"></div>
    </section>
  `,
})
export default class ViewTransitionComponent {

}
