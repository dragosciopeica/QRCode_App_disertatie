import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { MembersComponent } from './members/members.component';
import { SmoneyComponent } from './smoney/smoney.component';
import { RmoneyComponent } from './rmoney/rmoney.component';
import { PayDoneComponent} from './pay-done/pay-done.component';

//Pentru a nu ne lasa sa accesam paginile fara a fi logati
import { AngularFireAuthGuard, redirectUnauthorizedTo, canActivate} from '@angular/fire/auth-guard';


const redirectUnauthorizedToMainPage = () => redirectUnauthorizedTo([''])

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'email', component: EmailComponent },  
  { path: 'members', component: MembersComponent,
  canActivate:[AngularFireAuthGuard],
  data: { authGuardPipe: redirectUnauthorizedToMainPage} },
  { path: 'smoney', component: SmoneyComponent,
  canActivate:[AngularFireAuthGuard],
  data: { authGuardPipe: redirectUnauthorizedToMainPage} },  
  { path: 'rmoney', component: RmoneyComponent,
  canActivate:[AngularFireAuthGuard],
  data: { authGuardPipe: redirectUnauthorizedToMainPage} },
  { path: 'paydone', component: PayDoneComponent,
  canActivate:[AngularFireAuthGuard],
  data: { authGuardPipe: redirectUnauthorizedToMainPage} },
  
];


// Explicatie AuthGuard:
// canActivate:[AngularFireAuthGuard], --> asta nu ne lasa sa accesam pagina DOAR daca suntem logati
// data: { authGuardPipe: redirectUnauthorizedToMainPage} --> asta spune ce sa facem daca NU suntem logati 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
