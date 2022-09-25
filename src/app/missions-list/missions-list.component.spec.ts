import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionsListComponent } from './missions-list.component';

describe('ShipsListComponent', () => {
  let component: MissionsListComponent;
  let fixture: ComponentFixture<MissionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MissionsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MissionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
