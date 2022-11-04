import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPerifericoComponent } from './add-periferico.component';

describe('AddPerifericoComponent', () => {
  let component: AddPerifericoComponent;
  let fixture: ComponentFixture<AddPerifericoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPerifericoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPerifericoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
