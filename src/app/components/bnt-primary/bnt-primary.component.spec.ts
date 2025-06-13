import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BntPrimaryComponent } from './bnt-primary.component';

describe('BntPrimaryComponent', () => {
  let component: BntPrimaryComponent;
  let fixture: ComponentFixture<BntPrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BntPrimaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BntPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
