import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profileSettingsPath: string;
  defaultBackLink: string;

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event instanceof NavigationEnd && event.url) {
        this.defaultBackLink = event.url.replace('/profile', '');
        this.profileSettingsPath = event.url + '/profile-settings';
      }
    });
  }

  ngOnInit() {
  }

}
