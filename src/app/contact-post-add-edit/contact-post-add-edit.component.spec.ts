import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPostAddEditComponent } from './contact-post-add-edit.component';

describe('AddressBookPostAddEditComponent', () => {
  let component: ContactPostAddEditComponent;
  let fixture: ComponentFixture<ContactPostAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactPostAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPostAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
