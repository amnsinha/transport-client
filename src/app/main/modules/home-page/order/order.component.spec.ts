import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderManagementComponent} from './order.component';

describe('  OrderManagementComponent', () => {
  let component:   OrderManagementComponent;
  let fixture: ComponentFixture<  OrderManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [   OrderManagementComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(  OrderManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
