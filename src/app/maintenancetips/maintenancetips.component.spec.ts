import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenancetipsComponent } from './maintenancetips.component';

describe('MaintenancetipsComponent', () => {
  let component: MaintenancetipsComponent;
  let fixture: ComponentFixture<MaintenancetipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenancetipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenancetipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
