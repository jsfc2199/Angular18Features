import { Component, inject } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { TitleComponent } from '@shared/title/title.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, TitleComponent, RouterModule],
  templateUrl: './users.component.html',
})
export default class UsersComponent {
  public usersService: UsersService = inject(UsersService)
}
