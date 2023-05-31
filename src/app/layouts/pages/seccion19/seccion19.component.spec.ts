import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion19Component } from './seccion19.component';

describe('Seccion19Component', () => {
  let component: Seccion19Component;
  let fixture: ComponentFixture<Seccion19Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Seccion19Component]
    });
    fixture = TestBed.createComponent(Seccion19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
