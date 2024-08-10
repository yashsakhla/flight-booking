import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachComponent } from './serach.component';

describe('SerachComponent', () => {
  let component: SerachComponent;
  let fixture: ComponentFixture<SerachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerachComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
