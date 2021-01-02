import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipIntroComponent } from './ship-intro.component';

describe('ShipIntroComponent', () => {
  let component: ShipIntroComponent;
  let fixture: ComponentFixture<ShipIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
