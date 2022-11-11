import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaNavbarComponent } from './sa-navbar.component';

describe('SaNavbarComponent', () => {
  let component: SaNavbarComponent;
  let fixture: ComponentFixture<SaNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
