import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPostsComponent } from './contact-posts.component';

describe('ContactPostsComponent', () => {
  let component: ContactPostsComponent;
  let fixture: ComponentFixture<ContactPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
