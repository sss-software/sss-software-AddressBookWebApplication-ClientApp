import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ContactPost } from '../models/contact-post';

@Injectable({
  providedIn: 'root'
})

export class ContactPostService {
  contactAppUrl: string;
  contactApiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  constructor(private http: HttpClient) {
    this.contactAppUrl = environment.appUrl;
    this.contactApiUrl = 'api/Contacts/';
  }

  getContactPosts(): Observable<ContactPost[]> {
    return this.http.get<ContactPost[]>(this.contactAppUrl + this.contactApiUrl)
      .pipe(retry(1), catchError(this.errorHandler))
  }

  getContactPost(postId: number): Observable<ContactPost> {
    return this.http.get<ContactPost>(this.contactAppUrl + this.contactApiUrl + postId)
    .pipe(retry(1), catchError(this.errorHandler));
  }

saveContactPost(contactPost): Observable<ContactPost> {
    return this.http.post<ContactPost>(this.contactAppUrl + this.contactApiUrl, JSON.stringify(contactPost), this.httpOptions)
    .pipe(retry(1), catchError(this.errorHandler));
}

updateContactPost(postId: number, contactPost): Observable<ContactPost> {
    return this.http.put<ContactPost>(this.contactAppUrl + this.contactApiUrl + postId, JSON.stringify(contactPost), this.httpOptions)
    .pipe(retry(1), catchError(this.errorHandler));
}

deleteContactPost(postId: number): Observable<ContactPost> {
    return this.http.delete<ContactPost>(this.contactAppUrl + this.contactApiUrl + postId)
    .pipe(retry(1),catchError(this.errorHandler));
}

errorHandler(error) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    errorMessage = error.error.message;
  } else {
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
