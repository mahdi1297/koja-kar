import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MobileService } from '../services/mobile.service';

@Injectable({
  providedIn: 'root',
})
export class jobsScreenGuard implements CanActivate {
  constructor(private router: Router, private _mobileService: MobileService) {}

  canActivate() {
    if (window.innerWidth <= 768) {
      this.router.navigate(['/sm-jobs']);
      return false;
    }

    return true;
  }
}
