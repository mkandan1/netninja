import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LefNavComponent } from './lef-nav.component';

describe('LefNavComponent', () => {
  let component: LefNavComponent;
  let fixture: ComponentFixture<LefNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LefNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LefNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
