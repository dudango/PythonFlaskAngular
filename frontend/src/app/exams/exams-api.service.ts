import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

import 'rxjs/add/operator/catch';
import {environment} from '../../environments/environment';
import {Exam} from './exam.model';
import * as Auth0 from 'auth0-web';

@Injectable()
export class ExamsApiService {

  constructor(private http: HttpClient) {
  }

  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  // GET list of public, future events
  getExams(): Observable<any> {
    return this.http
      .get(`${environment.API_URL}/exams`)
      .catch(ExamsApiService._handleError);
  }

  saveExam(exam: Exam): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${Auth0.getAccessToken()}`
      })
    };
    return this.http
      .post(`${environment.API_URL}/exams`, exam, httpOptions);
  }
   deleteExam(examId: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${Auth0.getAccessToken()}`
      })
    };
    return this.http
      .delete(`${environment.API_URL}/exams/${examId}`, httpOptions);
  }
}

