import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaContactsComponent } from './sa-contacts.component';

describe('SaContactsComponent', () => {
  let component: SaContactsComponent;
  let fixture: ComponentFixture<SaContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
