import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion23Component } from './seccion23.component';

describe('Seccion23Component', () => {
  let component: Seccion23Component;
  let fixture: ComponentFixture<Seccion23Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Seccion23Component]
    });
    fixture = TestBed.createComponent(Seccion23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
