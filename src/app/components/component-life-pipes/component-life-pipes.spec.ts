import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLifePipes } from './component-life-pipes';

describe('ComponentLifePipes', () => {
  let component: ComponentLifePipes;
  let fixture: ComponentFixture<ComponentLifePipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentLifePipes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentLifePipes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
