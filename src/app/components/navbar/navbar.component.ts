import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogin: boolean;

  constructor(
      private authService: AuthService,
  ) { }

  ngOnInit() {
      this.isLogin = false;
      this.authService.checkAuth().subscribe( auth => {
          if (auth) {
              this.isLogin = true;
          }
      });
  }
  logOut() {
      this.authService.logOut();
  }

}
