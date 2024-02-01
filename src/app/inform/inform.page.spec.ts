import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformPage } from './inform.page';

describe('InformPage', () => {
  let component: InformPage;
  let fixture: ComponentFixture<InformPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
