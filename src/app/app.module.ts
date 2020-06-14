import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Adaugate de mine!

import { environment } from '../environments/environment';
// De aici iau valorile pentru firebase


import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { SmoneyComponent } from './smoney/smoney.component';
import { RmoneyComponent } from './rmoney/rmoney.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { FormsModule } from '@angular/forms'; // pentru a merge ngModule
import { HttpClientModule } from '@angular/common/http';
import { PayDoneComponent } from './pay-done/pay-done.component';



 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    SmoneyComponent,
    RmoneyComponent,
    PayDoneComponent,
    
    
  ],
  imports: [    
    BrowserModule,
    NgxQRCodeModule,      
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,    
    ZXingScannerModule,    
    FormsModule,  
    HttpClientModule,    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
