import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  readonly #API_URL = 'https://jsonplaceholder.typicode.com/users';
  readonly #http = inject(HttpClient);

  getUsers(): Observable<User[]> {
    return this.#http.get<User[]>(this.#API_URL);
  }
}
