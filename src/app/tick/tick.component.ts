import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-tick',
  standalone: true,
  template: `
    <h3>Property update asynchronously</h3>
    <p>Tick: {{ tick() }}</p>
    <hr />
  `,
})
export class TickComponent implements OnInit {
  tick = signal(0);

  ngOnInit(): void {
    setInterval(() => this.tick.update((tick) => tick + 1), 1000);
  }
}
