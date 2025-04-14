import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaResumenTotalComponent } from './fila-resumen-total.component';

describe('FilaResumenTotalComponent', () => {
  let component: FilaResumenTotalComponent;
  let fixture: ComponentFixture<FilaResumenTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilaResumenTotalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilaResumenTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
