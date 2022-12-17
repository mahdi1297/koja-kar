import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
} from '@angular/material/snack-bar';
import { CodeInputComponent } from 'angular-code-input';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'dev-login-bottomsheet',
  templateUrl: './login-bottom-sheet.component.html',
  styleUrls: ['./login-bottom-sheet.component.scss'],
})
export class LoginBottomSheetComponent implements OnInit {
  @ViewChild('codeInput') codeInput!: CodeInputComponent;

  mobileForm: FormGroup;
  isPasswordField = false;
  passCode = '';
  userId = '';
  isLoading = false;

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.mobileForm = this._fb.group({
      mobile: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onCodeCompleted(code: string) {
    this.isLoading = true;
    this._authService.sendConfirmCode(this.userId, code).subscribe({
      next: () => {
        this.successCodeSnackbar();
        setTimeout(() => {
          window.location.reload();
        }, 700);
      },
      error: () => {
        this.errorCodeSnackbar();
        this.codeInput.reset();
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  sendMessage() {
    if (this.mobileForm.valid) {
      let mobileValue = this.mobileForm.value.mobile;

      if (mobileValue.length == 10 && mobileValue[0] != 0) {
        mobileValue = `0${mobileValue}`;
      }

      this.isLoading = true;

      this._authService.register(mobileValue).subscribe({
        next: (data) => {
          if (data) {
            this.userId = data;
            this.isPasswordField = true;
            this.sendCodeSnackbar();
          }
        },
        error: () => {
          this._snackBar.open('مشکلی پیش آمده است', 'متوجه شدم', {
            panelClass: 'error',
          });
        },
        complete: () => {
          this.isLoading = false;
        },
      });
    }
  }

  sendCodeSnackbar() {
    this._snackBar.open('رمز عبور برای شما ارسال شد', 'متوجه شدم', {
      panelClass: 'success',
    });
  }

  successCodeSnackbar() {
    this._snackBar.open('با موفقیت وارد شدید', '', {
      panelClass: 'success',
    });
  }

  errorCodeSnackbar() {
    this._snackBar.open('کد ارسال شده صحیح نمی باشد', 'متوجه شدم', {
      panelClass: 'error',
    });
  }
}
