import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  error: any;
  user: firebase.User;

 

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe((user) => {
      console.log(user);
      if (user) {
        this.router.navigateByUrl('/members');
        // vom lua informatiile din obiectul user si le punem in user-ul nostru!
        this.user = user;
      }
    });
  }

  // Logare prin Google
  loginG() {
    console.log('Redirecting to Google login Proivder');
    this.afAuth
      .signInWithRedirect(new firebase.auth.GoogleAuthProvider())
      .then((success) => {
        this.router.navigate(['/members']);
      })
      .catch((err) => {
        this.error = err;
      });
  }

  // Folosita la logout
  logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
  ngOnInit(): void {}
}
