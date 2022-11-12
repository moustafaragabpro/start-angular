import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sa-contacts',
  templateUrl: './sa-contacts.component.html',
  styleUrls: ['./sa-contacts.component.css'],
})
export class SaContactsComponent implements OnInit {
  isInputEmpty: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  handleInput(e: any) {
    this.isInputEmpty = e.target.value.length !== 0 ? true : false;
  }
}
