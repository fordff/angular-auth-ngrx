import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StatusComponent } from './components/status/status.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app.states';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/effects/auth.effects';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SignUpComponent,
    LogInComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([AuthEffects]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
