import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  error: any;

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  // Creare cont e-mail si parola
  SignUp(email, password) {
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((success) => {
        this.router.navigate(['/members']);
      })
      .catch((err) => {
        this.error = err;
      });
  }

  ngOnInit(): void {}
}
