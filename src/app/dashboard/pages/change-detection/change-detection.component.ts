import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush, //por defecto es default y esto es lo nuevo que veremos, está menos atento a tantos cambios, y enforcar a señales
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title [title]='currentFrame()'></app-title>

    <pre>{{ frameworksAsSignal() | json }}</pre>
    <pre>{{ frameworksAsProperty | json }}</pre>
  `,
})
export default class ChangeDetectionComponent {

  public currentFrame = computed(()=> `change detection - ${this.frameworksAsSignal().name}`)
  public frameworksAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });

  public frameworksAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };

  constructor() {
    //forma tradicional en la que funciona angular respecto a los cambios
    //si activamos el onPush del change detection, esto se dispara pero no hace ningún cambio
    console.log('hecho')
    setTimeout(() => {
      // this.frameworksAsProperty.name = 'React';

      //el beneficio es que todo se enfoca a señales y mejora el rendimiento
      this.frameworksAsSignal.update((value) => ({
        ...value,
        name: 'react'
      }))
    }, 3000);
  }
}
