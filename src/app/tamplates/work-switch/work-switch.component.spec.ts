import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkSwitchComponent } from './work-switch.component';

describe('WorkSwitchComponent', () => {
  let component: WorkSwitchComponent;
  let fixture: ComponentFixture<WorkSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
