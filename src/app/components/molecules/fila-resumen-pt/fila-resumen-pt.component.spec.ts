import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaResumenPTComponent } from './fila-resumen-pt.component';

describe('FilaResumenPTComponent', () => {
  let component: FilaResumenPTComponent;
  let fixture: ComponentFixture<FilaResumenPTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilaResumenPTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilaResumenPTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
