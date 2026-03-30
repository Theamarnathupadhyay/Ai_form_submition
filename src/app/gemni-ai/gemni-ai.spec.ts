import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GemniAi } from './gemni-ai';

describe('GemniAi', () => {
  let component: GemniAi;
  let fixture: ComponentFixture<GemniAi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GemniAi],
    }).compileComponents();

    fixture = TestBed.createComponent(GemniAi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
