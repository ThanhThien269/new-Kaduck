import { questionReducer } from './reducer/question.reducer';
import { QuestionEffects } from './effect/question.effect';
import { AuthEffects } from './../app/effect/auth.effect';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { authReducer } from 'src/app/reducer/auth.reducer';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { question_kitReducer } from './reducer/question_kit.reducer';
import { QuestionKitEffects } from './effect/question_kit.effect';

const config: SocketIoConfig = { url: 'http://localhost:4545/', options: {} };

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    EffectsModule.forRoot([AuthEffects, QuestionEffects, QuestionKitEffects]),
    StoreModule.forRoot(
      {
        auth: authReducer,
        question: questionReducer,
        question_kit: question_kitReducer,
      },
      {}
    ),
    SocketIoModule.forRoot(config),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
