import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {ExamsApiService} from './exams/exams-api.service';
import {ExamFormComponent} from './exams/exam-form.component';
import {RouterModule, Routes} from '@angular/router';
import {ExamsComponent} from './exams/exams.component';

import * as Auth0 from 'auth0-web';
import {CallbackComponent} from './callback.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatButtonModule} from '@angular/material';



const appRoutes: Routes = [
  { path: 'callback', component: CallbackComponent },
  { path: 'new-exam', component: ExamFormComponent },
  { path: '', component: ExamsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ExamFormComponent,
    ExamsComponent,
    CallbackComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
  ],

  providers: [ExamsApiService],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() {
    Auth0.configure({
      domain: 'auth234.auth0.com',
      audience: 'http://167.99.55.219/authentication',
      clientID: 'ZqZezKqlnNMEJiJWY23wJdu5nnKvrag4',
      redirectUri: 'http://167.99.55.219:4200/callback',
      scope: 'openid profile manage:exams'
    });
  }
}
