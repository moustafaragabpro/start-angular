import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaFooterComponent } from './sa-footer.component';

describe('SaFooterComponent', () => {
  let component: SaFooterComponent;
  let fixture: ComponentFixture<SaFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
