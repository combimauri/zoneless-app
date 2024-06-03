import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';

interface Member {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <h3>Property update in an event</h3>
    <p>Counter: {{ counter }}</p>
    <button (click)="incrementCounter()">Increment counter</button>
    <hr />

    <!-- <h3>Property update asynchronously</h3>
    <p>Tick: {{ tick }}</p>
    <hr /> -->

    <!-- <h3>Property update from an observable</h3>
    @for (member of members; track member.id) {
    <p>
      {{ member.name }}
    </p>
    }
    <hr /> -->

    <!-- <h3>Property update from an observable using async pipe</h3>
    @for (member of members$ | async; track member.id) {
    <p>
      {{ member.name }}
    </p>
    }
    <hr /> -->
  `,
})
export class AppComponent implements OnInit, OnDestroy {
  readonly #API_URL = 'https://jsonplaceholder.typicode.com/users';
  readonly #http = inject(HttpClient);

  counter = 0;

  tick = 0;

  members: Member[] = [];
  #membersSub = this.#http
    .get<Member[]>(this.#API_URL)
    .subscribe((members) => (this.members = members));

  members$ = this.#http.get<Member[]>(this.#API_URL);

  ngOnInit(): void {
    setInterval(() => this.tick++, 1000);
  }

  ngOnDestroy(): void {
    this.#membersSub.unsubscribe();
  }

  incrementCounter() {
    this.counter++;
  }
}
