import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.page.html',
  styleUrls: ['./profile-settings.page.scss'],
})
export class ProfileSettingsPage implements OnInit {

  defaultBackLink: string;

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event instanceof NavigationEnd && event.url) {
        this.defaultBackLink = event.url.replace('/profile-settings', '');
      }
    });
  }

  ngOnInit() {
  }

}
