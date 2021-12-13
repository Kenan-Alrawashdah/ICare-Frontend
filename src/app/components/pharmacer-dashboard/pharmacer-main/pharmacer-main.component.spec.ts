import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacerMainComponent } from './pharmacer-main.component';

describe('PharmacerMainComponent', () => {
  let component: PharmacerMainComponent;
  let fixture: ComponentFixture<PharmacerMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacerMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
