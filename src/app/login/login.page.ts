import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {

  constructor(private router: Router) {}
onLogin() {
    this.router.navigate(['task']);
}

onRegister() {
      this.router.navigate(['register']);
}
}
