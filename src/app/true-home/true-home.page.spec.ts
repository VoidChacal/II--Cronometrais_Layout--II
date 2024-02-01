import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrueHomePage } from './true-home.page';

describe('TrueHomePage', () => {
  let component: TrueHomePage;
  let fixture: ComponentFixture<TrueHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TrueHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
