import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvLibComponent } from './rv-lib.component';

describe('RvLibComponent', () => {
  let component: RvLibComponent;
  let fixture: ComponentFixture<RvLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RvLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
