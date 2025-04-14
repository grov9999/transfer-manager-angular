import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyApproveComponent } from './body-approve.component';

describe('BodyApproveComponent', () => {
  let component: BodyApproveComponent;
  let fixture: ComponentFixture<BodyApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyApproveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
