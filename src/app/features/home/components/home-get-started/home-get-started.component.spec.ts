import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGetStartedComponent } from './home-get-started.component';

describe('HomeGetStartedComponent', () => {
  let component: HomeGetStartedComponent;
  let fixture: ComponentFixture<HomeGetStartedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeGetStartedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGetStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
