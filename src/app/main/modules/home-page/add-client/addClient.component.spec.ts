import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientComponent } from './addClient.component';

describe(' AddClientComponent', () => {
  let component:  AddClientComponent;
  let fixture: ComponentFixture< AddClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  AddClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent( AddClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
