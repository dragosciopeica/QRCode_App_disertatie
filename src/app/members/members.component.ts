import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit {
  name: firebase.User;
  state: string = '';

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe((auth) => {
      if (auth) {
        this.name = auth;
      }
    });
  }

  ngOnInit(): void {}

  // Folosita la logout
  logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

  sMoney() {
//console.log('Trimiti bani?')
  this.router.navigate(['/smoney']);    
  }

  
  rMoney() {
    this.router.navigate(['/rmoney']);    
  }
}
