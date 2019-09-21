import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPeliculasComponent } from './formulario-peliculas.component';

describe('FormularioPeliculasComponent', () => {
  let component: FormularioPeliculasComponent;
  let fixture: ComponentFixture<FormularioPeliculasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioPeliculasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
