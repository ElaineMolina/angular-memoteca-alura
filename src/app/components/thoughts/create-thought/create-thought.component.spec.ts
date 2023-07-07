import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateThoughtComponent } from './create-thought.component';

describe('CreateThoughtComponent', () => {
  let component: CreateThoughtComponent;
  let fixture: ComponentFixture<CreateThoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateThoughtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateThoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
