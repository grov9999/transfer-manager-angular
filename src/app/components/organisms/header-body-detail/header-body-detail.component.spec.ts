import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBodyDetailComponent } from './header-body-detail.component';

describe('HeaderBodyDetailComponent', () => {
  let component: HeaderBodyDetailComponent;
  let fixture: ComponentFixture<HeaderBodyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderBodyDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderBodyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
