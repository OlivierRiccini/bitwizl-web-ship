import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierIntroComponent } from './courier-intro.component';

describe('CourierIntroComponent', () => {
  let component: CourierIntroComponent;
  let fixture: ComponentFixture<CourierIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourierIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
