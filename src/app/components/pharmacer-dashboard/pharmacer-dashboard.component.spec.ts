import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacerDashboardComponent } from './pharmacer-dashboard.component';

describe('PharmacerDashboardComponent', () => {
  let component: PharmacerDashboardComponent;
  let fixture: ComponentFixture<PharmacerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacerDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
