import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';

import { UsersService } from '../core/users.service';

@Component({
  selector: 'app-async-users',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <h3>Property update from an observable using async pipe</h3>
    @for (user of users$ | async; track user.id) {
    <p>
      {{ user.name }}
    </p>
    }
    <hr />
  `,
})
export class AsyncUsersComponent {
  readonly #usersService = inject(UsersService);

  users$ = this.#usersService.getUsers();
}
