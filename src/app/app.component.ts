import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private router: Router) {
  }

  goToMyshop() {
    this.router.navigate(['/', 'myshop']);
  }
  goToCart() {
    this.router.navigate(['/', 'cart']);
  }
  goToProfil() {
    this.router.navigate(['/', 'profil']);
  }
}