import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecundContentComponent } from './secund-content.component';

describe('SecundContentComponent', () => {
  let component: SecundContentComponent;
  let fixture: ComponentFixture<SecundContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecundContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecundContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
