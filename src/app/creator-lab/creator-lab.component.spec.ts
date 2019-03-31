import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorLabComponent } from './creator-lab.component';

describe('CreatorLabComponent', () => {
  let component: CreatorLabComponent;
  let fixture: ComponentFixture<CreatorLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatorLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
