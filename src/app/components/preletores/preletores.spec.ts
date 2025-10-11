import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Preletores } from './preletores';

describe('Preletores', () => {
  let component: Preletores;
  let fixture: ComponentFixture<Preletores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Preletores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Preletores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
