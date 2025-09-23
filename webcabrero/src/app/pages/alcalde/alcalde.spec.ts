import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alcalde } from './alcalde';

describe('Alcalde', () => {
  let component: Alcalde;
  let fixture: ComponentFixture<Alcalde>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alcalde]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Alcalde);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
