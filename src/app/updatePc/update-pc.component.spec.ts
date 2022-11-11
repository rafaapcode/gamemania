import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePcComponent } from './update-pc.component';

describe('AddPcComponent', () => {
  let component: UpdatePcComponent;
  let fixture: ComponentFixture<UpdatePcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
