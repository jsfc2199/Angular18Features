import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../interfaces/user.interface';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, TitleComponent, RouterModule],
  template: `
    <app-title [title]="titleLabel()"></app-title>

    @if ( user() ) {
    <section>
      <img [srcset]="user()!.avatar" [alt]="user()!.first_name" />
      <div>
        <h3>{{user()!.first_name}} {{user()!.last_name}}</h3>
        <h3>{{user()!.email}}</h3>

      </div>
    </section>
    }@else {
    <p>Cargando información</p>
    }
  `,
})
export default class UserComponent {
  //transformar observable a señal
  public usersService: UsersService = inject(UsersService);
  private route = inject(ActivatedRoute);


  //tomamos un observable y lo volvemos como señal
  public user = toSignal(
    this.route.params.pipe(
      switchMap(({id}) => this.usersService.getUserById(id))
    )
  );


  public titleLabel = computed(() => {
    if(this.user()){
      return `informacion del usuario ${this.user()!.first_name} ${this.user()!.last_name}`
    }

    return 'informacion del usuario'
  })
}
