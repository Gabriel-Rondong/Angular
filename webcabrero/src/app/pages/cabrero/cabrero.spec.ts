import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cabrero } from './cabrero';

describe('Cabrero', () => {
  let component: Cabrero;
  let fixture: ComponentFixture<Cabrero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cabrero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cabrero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
