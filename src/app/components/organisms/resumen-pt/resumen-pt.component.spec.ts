import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenPTComponent } from './resumen-pt.component';

describe('ResumenPTComponent', () => {
  let component: ResumenPTComponent;
  let fixture: ComponentFixture<ResumenPTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumenPTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumenPTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
