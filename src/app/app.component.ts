import { Component } from '@angular/core';

import { CounterComponent } from './counter/counter.component';
import { TickComponent } from './tick/tick.component';
import { UsersComponent } from './users/users.component';
import { AsyncUsersComponent } from './async-users/async-users.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CounterComponent,
    TickComponent,
    UsersComponent,
    AsyncUsersComponent,
  ],
  template: `
    <app-counter />

    <!-- <app-tick /> -->

    <!-- <app-users /> -->

    <!-- <app-async-users /> -->
  `,
})
export class AppComponent {}
