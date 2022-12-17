import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { User } from '@dev/domain';
import { AuthService } from '../../core/services/auth.service';
import { LoginBottomSheetComponent } from '../../shared/components/login-bottom-sheet/login-bottom-sheet.component';

@Component({
  selector: 'dev-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userData: User = null;

  constructor(
    private _authService: AuthService,
    private _bottomSheet: MatBottomSheet
  ) {}

  ngOnInit(): void {
    this._authService.$getUser.subscribe({
      next: (data) => {
        this.userData = data;
      },
      error: () => {
        console.log('err');
      },
    });
  }

  openLoginBtn() {
    this._bottomSheet.open(LoginBottomSheetComponent);
  }
}
