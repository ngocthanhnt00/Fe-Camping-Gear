import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super',
  // templateUrl: './super.component.html',
  template: `
    <h1>Hello {{title}}</h1>
    `,
  styleUrls: ['./super.component.css'],
})
export class SuperComponent implements OnInit {
  title: string = "Cac ban"
  constructor() { }

  ngOnInit() {
  }

}
