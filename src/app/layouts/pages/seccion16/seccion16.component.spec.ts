import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion16Component } from './seccion16.component';

describe('Seccion16Component', () => {
  let component: Seccion16Component;
  let fixture: ComponentFixture<Seccion16Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Seccion16Component]
    });
    fixture = TestBed.createComponent(Seccion16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
