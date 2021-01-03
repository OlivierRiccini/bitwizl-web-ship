import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderIntroComponent } from './order-intro.component';

describe('OrderIntroComponent', () => {
  let component: OrderIntroComponent;
  let fixture: ComponentFixture<OrderIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
