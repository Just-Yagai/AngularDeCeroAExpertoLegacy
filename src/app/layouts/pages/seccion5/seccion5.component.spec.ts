import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion5Component } from './seccion5.component';

describe('Seccion5Component', () => {
  let component: Seccion5Component;
  let fixture: ComponentFixture<Seccion5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Seccion5Component]
    });
    fixture = TestBed.createComponent(Seccion5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
