import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDrugsComponent } from './my-drugs.component';

describe('MyDrugsComponent', () => {
  let component: MyDrugsComponent;
  let fixture: ComponentFixture<MyDrugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDrugsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDrugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
