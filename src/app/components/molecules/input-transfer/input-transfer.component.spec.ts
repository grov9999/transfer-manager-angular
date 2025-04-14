import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTransferComponent } from './input-transfer.component';

describe('InputTransferComponent', () => {
  let component: InputTransferComponent;
  let fixture: ComponentFixture<InputTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTransferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
