import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ICareComponent } from './icare.component';

describe('ICareComponent', () => {
  let component: ICareComponent;
  let fixture: ComponentFixture<ICareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ICareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ICareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
