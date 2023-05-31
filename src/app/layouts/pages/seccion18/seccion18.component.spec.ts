import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion18Component } from './seccion18.component';

describe('Seccion18Component', () => {
  let component: Seccion18Component;
  let fixture: ComponentFixture<Seccion18Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Seccion18Component]
    });
    fixture = TestBed.createComponent(Seccion18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
