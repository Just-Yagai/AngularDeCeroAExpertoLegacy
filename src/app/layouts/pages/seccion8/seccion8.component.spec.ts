import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion8Component } from './seccion8.component';

describe('Seccion8Component', () => {
  let component: Seccion8Component;
  let fixture: ComponentFixture<Seccion8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Seccion8Component]
    });
    fixture = TestBed.createComponent(Seccion8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
