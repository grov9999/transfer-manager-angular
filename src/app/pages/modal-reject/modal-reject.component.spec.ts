import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRejectComponent } from './modal-reject.component';

describe('ModalRejectComponent', () => {
  let component: ModalRejectComponent;
  let fixture: ComponentFixture<ModalRejectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalRejectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
