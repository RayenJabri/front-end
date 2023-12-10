import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoissonsComponent } from './boissons.component';

describe('BoissonsComponent', () => {
  let component: BoissonsComponent;
  let fixture: ComponentFixture<BoissonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoissonsComponent]
    });
    fixture = TestBed.createComponent(BoissonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
