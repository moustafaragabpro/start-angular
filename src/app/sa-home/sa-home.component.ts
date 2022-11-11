import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sa-home',
  templateUrl: './sa-home.component.html',
  styleUrls: ['./sa-home.component.css'],
})
export class SaHomeComponent implements OnInit {
  headingStyle: string = 'font-size: calc(2.7rem + 1.5vw)';

  constructor() {}

  ngOnInit(): void {}
}
