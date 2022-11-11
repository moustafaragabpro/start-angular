import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaHomeComponent } from './sa-home.component';

describe('SaHomeComponent', () => {
  let component: SaHomeComponent;
  let fixture: ComponentFixture<SaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
