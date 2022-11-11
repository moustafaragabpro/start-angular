import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css'],
})
export class HeadingComponent implements OnInit {
  @Input() headingStyle: string = 'font-size: 3rem;';
  @Input() lineBgColor: string = 'bg-white';
  @Input() title: string = '';

  constructor() {}

  ngOnInit(): void {}
}
