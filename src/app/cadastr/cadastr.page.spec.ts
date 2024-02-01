import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrPage } from './cadastr.page';

describe('CadastrPage', () => {
  let component: CadastrPage;
  let fixture: ComponentFixture<CadastrPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
