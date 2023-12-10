import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBoissonComponent } from './add-boisson.component';

describe('AddBoissonComponent', () => {
  let component: AddBoissonComponent;
  let fixture: ComponentFixture<AddBoissonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBoissonComponent]
    });
    fixture = TestBed.createComponent(AddBoissonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
