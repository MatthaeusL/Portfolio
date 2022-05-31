import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmeCardsComponent } from './aboutme-cards.component';

describe('AboutmeCardsComponent', () => {
  let component: AboutmeCardsComponent;
  let fixture: ComponentFixture<AboutmeCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutmeCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutmeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
