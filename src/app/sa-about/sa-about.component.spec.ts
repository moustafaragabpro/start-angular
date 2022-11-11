import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaAboutComponent } from './sa-about.component';

describe('SaAboutComponent', () => {
  let component: SaAboutComponent;
  let fixture: ComponentFixture<SaAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
