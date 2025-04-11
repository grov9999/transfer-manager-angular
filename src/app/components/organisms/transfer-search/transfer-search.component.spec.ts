import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferSearchComponent } from './transfer-search.component';

describe('TransferSearchComponent', () => {
  let component: TransferSearchComponent;
  let fixture: ComponentFixture<TransferSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
