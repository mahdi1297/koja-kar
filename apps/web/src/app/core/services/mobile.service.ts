import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MobileService {
  isMobile(): boolean {
    if (window.innerWidth > 768) {
      return false;
    }

    return true;
  }
}
