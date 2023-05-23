import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdDataComponent } from './std-data.component';

describe('StdDataComponent', () => {
  let component: StdDataComponent;
  let fixture: ComponentFixture<StdDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
