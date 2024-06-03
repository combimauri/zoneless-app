import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <h3>Property update in an event</h3>
    <p>Counter: {{ counter }}</p>
    <button (click)="incrementCounter()">Increment counter</button>
    <hr />
  `,
})
export class CounterComponent {
  counter = 0;

  incrementCounter() {
    this.counter++;
  }
}
