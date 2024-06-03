import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tick',
  standalone: true,
  template: `
    <h3>Property update asynchronously</h3>
    <p>Tick: {{ tick }}</p>
    <hr />
  `,
})
export class TickComponent implements OnInit {
  tick = 0;

  ngOnInit(): void {
    setInterval(() => this.tick++, 1000);
  }
}
