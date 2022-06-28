import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrottinetteComponent } from './trottinette.component';

describe('TrottinetteComponent', () => {
  let component: TrottinetteComponent;
  let fixture: ComponentFixture<TrottinetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrottinetteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrottinetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
