import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandMemberComponent } from './band-member.component';

describe('BandMemberComponent', () => {
  let component: BandMemberComponent;
  let fixture: ComponentFixture<BandMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
