import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
      private afAuth: AngularFireAuth
  ) { }

  login(email: string, passord: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, passord).then(user => resolve(user))
          .catch( error => reject(error));
    });
  }
}
