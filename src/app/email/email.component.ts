import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent implements OnInit {
  error: any;

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  // Logare prin E-mail si parola
  SignIn(email, password) {
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((success) => {
        this.router.navigate(['/members']);
      })
      .catch((err) => {
        this.error = err;        
      });
  }

  ngOnInit(): void {}
}
