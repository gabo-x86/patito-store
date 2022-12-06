import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatitoComponent } from './add-patito.component';

describe('AddPatitoComponent', () => {
  let component: AddPatitoComponent;
  let fixture: ComponentFixture<AddPatitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPatitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPatitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
