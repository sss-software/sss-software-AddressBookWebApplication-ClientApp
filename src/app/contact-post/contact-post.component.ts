import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactPostService } from '../services/contact-post.service';
import { ContactPost } from '../models/contact-post';

@Component({
  selector: 'app-contact-post',
  templateUrl: './contact-post.component.html',
  styleUrls: ['./contact-post.component.scss']
})

export class ContactPostComponent implements OnInit {
  contactPost$: Observable<ContactPost>;
  postId: number;

  constructor(private contactPostService: ContactPostService, private avRoute: ActivatedRoute) {
    const idParam = 'id';
    if (this.avRoute.snapshot.params[idParam]) {
      this.postId = this.avRoute.snapshot.params[idParam];
    }
  }

  ngOnInit(): void {
    this.loadContactPost();
  }

  loadContactPost() {
    this.contactPost$ = this.contactPostService.getContactPost(this.postId);
  }
}
