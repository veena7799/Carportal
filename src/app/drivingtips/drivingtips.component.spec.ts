import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivingtipsComponent } from './drivingtips.component';

describe('DrivingtipsComponent', () => {
  let component: DrivingtipsComponent;
  let fixture: ComponentFixture<DrivingtipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrivingtipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivingtipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
