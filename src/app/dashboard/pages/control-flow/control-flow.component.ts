import { Component, signal } from '@angular/core';

type Grade = 'A'|'B'|'F'
@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
})
export default class ControlFlowComponent {

  public showContent = signal(false);
  public grade = signal<Grade>('A');
  public frameworks = signal(['Angular', 'Vue', 'Svelte', 'React', 'NestJs'])
  public frameworks2 = signal([])



  public toggleContent(){
    this.showContent.update((value) => !value)
  }
}
