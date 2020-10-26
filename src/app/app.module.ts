import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { LandingComponent } from './pages/landing/landing.component';

import { HttpClientModule } from '@angular/common/http';

import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogBodyComponent } from './pages/dialog-body/dialog-body.component';
import { LoginDialogueComponent } from './pages/login-dialogue/login-dialogue.component';
import { InitiativesComponent } from './pages/initiatives/initiatives.component';
import { NotifiactionComponent } from './pages/notifiaction/notifiaction.component';
import { LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS, ScrollHooks } from 'ng-lazyload-image';
import { DialogAddNotifComponent } from './pages/dialog-add-notif/dialog-add-notif.component';
import { AngularFireMessaging, AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';


export const env = {
  production: false,
  firebase : {
    apiKey: "AIzaSyCNJlIeEHTNd61nkHOwM1XzJHvd1jkHqm0",
    authDomain: "e-cell-iitb.firebaseapp.com",
    databaseURL: "https://e-cell-iitb.firebaseio.com",
    projectId: "e-cell-iitb",
    storageBucket: "e-cell-iitb.appspot.com",
    messagingSenderId: "25208360514",
    appId: "1:25208360514:web:3f785a8eed0451849ce7db"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    DialogBodyComponent,
    LoginDialogueComponent,
    InitiativesComponent,
    NotifiactionComponent,
    DialogAddNotifComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    LazyLoadImageModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(env.firebase),
    AngularFireAnalyticsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogBodyComponent]
})
export class AppModule { }
