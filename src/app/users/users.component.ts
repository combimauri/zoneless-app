import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { UsersService } from '../core/users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  template: `
    <h3>Property update from an observable</h3>
    @for (user of users(); track user.id) {
    <p>
      {{ user.name }}
    </p>
    }
    <hr />
  `,
})
export class UsersComponent {
  readonly #usersService = inject(UsersService);

  users = toSignal(this.#usersService.getUsers(), { initialValue: [] });
}
