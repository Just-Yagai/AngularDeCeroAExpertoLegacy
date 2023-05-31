import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion22Component } from './seccion22.component';

describe('Seccion22Component', () => {
  let component: Seccion22Component;
  let fixture: ComponentFixture<Seccion22Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Seccion22Component]
    });
    fixture = TestBed.createComponent(Seccion22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
