import { Injectable, computed, inject, signal } from '@angular/core';
import { User, UsersResponse } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';

interface State {
  users: User[],
  loading: boolean
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject(HttpClient)
  public baseUrl = 'https://reqres.in/api/users'

  //el # sirva para que sea privado
  #state = signal<State>({
    loading: true,
    users:[]
  })

  //al ser computed es de solo lectura
  users = computed(() => this.#state().users)
  loading = computed(() => this.#state().loading)


  constructor() {
    this.http.get<UsersResponse>(this.baseUrl)
    .pipe(
      delay(1500)
    )
    .subscribe((response) => {
      this.#state.set({
        loading: false,
        users: response.data
      })
    })
  }
}
