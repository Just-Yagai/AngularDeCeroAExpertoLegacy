import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion15Component } from './seccion15.component';

describe('Seccion15Component', () => {
  let component: Seccion15Component;
  let fixture: ComponentFixture<Seccion15Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Seccion15Component]
    });
    fixture = TestBed.createComponent(Seccion15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
