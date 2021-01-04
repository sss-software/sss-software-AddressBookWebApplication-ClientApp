import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactPostService } from '../services/contact-post.service';
import { ContactPost } from '../models/contact-post';

@Component({
  selector: 'app-contact-posts',
  templateUrl: './contact-posts.component.html',
  styleUrls: ['./contact-posts.component.scss']
})
export class ContactPostsComponent implements OnInit {
  contactPosts$: Observable<ContactPost[]>;
  constructor(private contactPostService: ContactPostService) { }

  ngOnInit(): void {
    this.loadContactPosts();
  }

  loadContactPosts() {
    this.contactPosts$ = this.contactPostService.getContactPosts();
  }

  delete(postId) {
    const answer = confirm('Do you want to delete contact with id: ' + postId);
    if (answer) {
      this.contactPostService.deleteContactPost(postId).subscribe((data) => {
        this.loadContactPosts();
      });
    }
  }

}
