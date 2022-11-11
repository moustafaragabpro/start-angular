import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaPortfolioComponent } from './sa-portfolio.component';

describe('SaPortfolioComponent', () => {
  let component: SaPortfolioComponent;
  let fixture: ComponentFixture<SaPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaPortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
