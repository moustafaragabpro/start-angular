import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaNotfoundComponent } from './sa-notfound.component';

describe('SaNotfoundComponent', () => {
  let component: SaNotfoundComponent;
  let fixture: ComponentFixture<SaNotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaNotfoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
