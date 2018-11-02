import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isLogin: boolean;
  constructor(
      private router: Router,
      private authService: AuthService
  ) {
  }
  canActivate(): boolean {
      this.authService.checkAuth().subscribe( auth => {
          if (auth) {
              this.isLogin = true;
          } else {
              this.isLogin = false;
          }
      });
      if (!this.isLogin) {
          this.router.navigate(['/login']);
      }
      return this.isLogin;
  }
}
