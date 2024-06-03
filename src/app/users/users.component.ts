import { Component, OnDestroy, inject } from '@angular/core';

import { UsersService } from '../core/users.service';
import { User } from '../core/user.model';

@Component({
  selector: 'app-users',
  standalone: true,
  template: `
    <h3>Property update from an observable</h3>
    @for (user of users; track user.id) {
    <p>
      {{ user.name }}
    </p>
    }
    <hr />
  `,
})
export class UsersComponent implements OnDestroy {
  readonly #usersService = inject(UsersService);

  users: User[] = [];
  #usersSub = this.#usersService
    .getUsers()
    .subscribe((users) => (this.users = users));

  ngOnDestroy(): void {
    this.#usersSub.unsubscribe();
  }
}
