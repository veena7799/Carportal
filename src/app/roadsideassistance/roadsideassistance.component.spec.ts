import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadsideassistanceComponent } from './roadsideassistance.component';

describe('RoadsideassistanceComponent', () => {
  let component: RoadsideassistanceComponent;
  let fixture: ComponentFixture<RoadsideassistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadsideassistanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadsideassistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
