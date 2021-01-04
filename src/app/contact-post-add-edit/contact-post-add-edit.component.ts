import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactPostService } from '../services/contact-post.service';
import { ContactPost } from '../models/contact-post';

@Component({
  selector: 'app-contact-post-add-edit',
  templateUrl: './contact-post-add-edit.component.html',
  styleUrls: ['./contact-post-add-edit.component.scss']
})
export class ContactPostAddEditComponent implements OnInit {
  form: FormGroup;
  actionType: string;
  formTitle: string;
  formBody: string;
  postId: number;
  errorMessage: any;
  existingContactPost: ContactPost;

  constructor(private contactPostService: ContactPostService, private formBuilder: FormBuilder, private avRoute: ActivatedRoute, private router: Router) {
    const idParam = 'id';
    this.actionType = 'Add';
    this.formTitle = 'name';
    this.formBody = 'surname';
    if (this.avRoute.snapshot.params[idParam]) {
      this.postId = this.avRoute.snapshot.params[idParam];
    }

    this.form = this.formBuilder.group(
      {
        postId: 0,
        firstname: ['', [Validators.required]],
        surname: ['', [Validators.required]],
        birthDate: ['', [Validators.required]],
        contactType: ['', [Validators.required]],
        description: ['', [Validators.required]],
      }
    )

  }

  ngOnInit() {

    if (this.postId > 0) {
      this.actionType = 'Edit';
      this.contactPostService.getContactPost(this.postId)
        .subscribe(data => (
          this.existingContactPost = data,
          this.form.controls[this.formTitle].setValue(data.firstname + data.surname),
          this.form.controls[this.formBody].setValue(data.contactId)
        ));
    }
  }

  save() {
    if (!this.form.valid) {
      return;
    }

    if (this.actionType === 'Add') {
      let contactPost: ContactPost = {
        birthDate: new Date(),
        updatedDate: new Date(),
        firstname: '',
        surname: '',
        contactDetail : {
          description: '',
          contactId: 0,
          contactTypeId: 0,
        }
      };

      this.contactPostService.saveContactPost(contactPost)
        .subscribe((data) => {
          this.router.navigate(['/contact', data.contactId]);
        });
    }

    if (this.actionType === 'Edit') {
      let contactPost: ContactPost = {
        contactId: this.existingContactPost.contactId,
        birthDate: this.existingContactPost.birthDate,
        updatedDate: this.existingContactPost.birthDate,
        firstname: this.existingContactPost.firstname,
        surname: this.existingContactPost.surname,
        contactDetail: {
          contactId: this.existingContactPost.contactDetail.contactId,
          contactTypeId: this.existingContactPost.contactDetail.contactTypeId,
          description: this.existingContactPost.contactDetail.description
        }
      };
      this.contactPostService.updateContactPost(contactPost.contactId, contactPost)
        .subscribe((data) => {
          this.router.navigate([this.router.url]);
        });
    }
  }

  cancel() {
    this.router.navigate(['/']);
  }

  get title() { return this.form.get(this.formTitle); }
  get body() { return this.form.get(this.formBody); }

}
