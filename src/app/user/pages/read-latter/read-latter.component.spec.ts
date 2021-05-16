import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadLatterComponent } from './read-latter.component';

describe('ReadLatterComponent', () => {
  let component: ReadLatterComponent;
  let fixture: ComponentFixture<ReadLatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadLatterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadLatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
