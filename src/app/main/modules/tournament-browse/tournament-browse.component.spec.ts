import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentBrowseComponent } from './tournament-browse.component';

describe('TournamentBrowseComponent', () => {
  let component: TournamentBrowseComponent;
  let fixture: ComponentFixture<TournamentBrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentBrowseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
