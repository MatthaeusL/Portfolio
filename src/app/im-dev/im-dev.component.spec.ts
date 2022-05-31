import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImDevComponent } from './im-dev.component';

describe('ImDevComponent', () => {
  let component: ImDevComponent;
  let fixture: ComponentFixture<ImDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImDevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
