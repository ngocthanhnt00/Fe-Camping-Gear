import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAdminPage = false;
  title = 'project2';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {

        this.isAdminPage = event.urlAfterRedirects.includes('/admin1')
          || event.urlAfterRedirects.includes('/admin2')
          || event.urlAfterRedirects.includes('/admin')
      }
    });
  }

}
