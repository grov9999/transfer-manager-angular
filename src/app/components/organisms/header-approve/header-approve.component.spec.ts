import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderApproveComponent } from './header-approve.component';

describe('HeaderApproveComponent', () => {
  let component: HeaderApproveComponent;
  let fixture: ComponentFixture<HeaderApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderApproveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
