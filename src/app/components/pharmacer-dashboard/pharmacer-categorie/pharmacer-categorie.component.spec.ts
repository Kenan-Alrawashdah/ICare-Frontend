import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacerCategorieComponent } from './pharmacer-categorie.component';

describe('PharmacerCategorieComponent', () => {
  let component: PharmacerCategorieComponent;
  let fixture: ComponentFixture<PharmacerCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacerCategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacerCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
