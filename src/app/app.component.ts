import { Component } from '@angular/core';
import { StorageService } from './auth-services/storage-service/storage.service';
import { Router,NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'restaurant_angular';
  isAdminLoggedIn: boolean;
isCustomerLoggedIn: boolean;

constructor(private router: Router) { }

ngOnInit() {
  this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      this.isAdminLoggedIn = StorageService.isAdminLoggedIn();
      this.isCustomerLoggedIn = StorageService.isCustomerLoggedIn();
    }
  });
}
 logout(){
  StorageService.signout();
  this.router.navigateByUrl("/login");
 }
}

